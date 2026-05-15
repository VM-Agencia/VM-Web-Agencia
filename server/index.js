const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/api/health", (_, res) => res.json({ status: "ok" }));

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASS,
    },
});

const IMAGE_DIR = path.join(__dirname, "images");

function cidAttachments() {
    const attachments = [];
    if (!fs.existsSync(IMAGE_DIR)) return attachments;
    const files = fs.readdirSync(IMAGE_DIR).filter(f => /\.(png|jpg|jpeg|gif|webp)$/i.test(f));
    for (const file of files) {
        const cid = `${path.basename(file, path.extname(file))}@vm`;
        attachments.push({
            filename: file,
            path: path.join(IMAGE_DIR, file),
            cid,
        });
    }
    return attachments;
}

function replaceImagesWithCid(html) {
    if (!fs.existsSync(IMAGE_DIR)) return html;
    const files = fs.readdirSync(IMAGE_DIR).filter(f => /\.(png|jpg|jpeg|gif|webp)$/i.test(f));
    for (const file of files) {
        const name = path.basename(file);
        const cid = `${path.basename(file, path.extname(file))}@vm`;
        html = html.replace(
            new RegExp(`(src\\s*=\\s*["'])${escapeRegex(name)}["']`, "gi"),
            `$1cid:${cid}"`
        );
        html = html.replace(
            new RegExp(`,\\s*url\\(\\s*["']?${escapeRegex(name)}["']?\\s*\\)`, "gi"),
            ""
        );
        html = html.replace(
            new RegExp(`url\\(\\s*["']?${escapeRegex(name)}["']?\\s*\\)\\s*,?`, "gi"),
            ""
        );
    }
    return html;
}

function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

app.post("/api/send-guide", async (req, res) => {
    try {
        const { email, name } = req.body;

        if (!email || !email.includes("@")) {
            return res.status(400).json({ error: "Email inválido" });
        }

        const templatePath = path.join(__dirname, "templates", "email_diagnostico_vm.html");
        if (!fs.existsSync(templatePath)) {
            return res.status(500).json({ error: "Plantilla no encontrada" });
        }
        let html = fs.readFileSync(templatePath, "utf-8");

        html = html
            .replace(/\{\{nombre\}\}/g, name || "amigo/a")
            .replace(/\{\{email_destinatario\}\}/g, email)
            .replace(/\{\{pdf_url\}\}/g, "#")
            .replace(/\{\{calendly_url\}\}/g, "https://calendly.com/vmmarketing-ia")
            .replace(/\{\{unsubscribe_url\}\}/g, "#")
            .replace(/\{\{preferences_url\}\}/g, "#");

        html = replaceImagesWithCid(html);

        const attachments = cidAttachments();

        const pdfPath = path.join(__dirname, "guide.pdf");
        if (fs.existsSync(pdfPath)) {
            attachments.push({ filename: "Diagnostico_Digital_VM.pdf", path: pdfPath });
        }

        await transporter.sendMail({
            from: `"VM Agency" <${process.env.GMAIL_USER}>`,
            to: email,
            subject: "Tu diagnóstico gratuito está listo",
            html,
            attachments,
        });

        res.json({ success: true, message: "Email enviado correctamente" });
    } catch (err) {
        console.error("Error sending email:", err);
        res.status(500).json({ error: "Error al enviar el email" });
    }
});

if (process.env.SERVE_STATIC) {
    const buildPath = path.join(__dirname, "..", "build");
    app.use(express.static(buildPath));
    app.get("*", (_, res) => res.sendFile(path.join(buildPath, "index.html")));
}

app.listen(PORT, () => {
    console.log(`Email server running on http://localhost:${PORT}`);
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASS) {
        console.warn("⚠  GMAIL_USER / GMAIL_APP_PASS not set in server/.env");
    }
});
