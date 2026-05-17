import "../css/legal.css"

export function LegalNotice() {
    return (
        <section className="legal-section">
            <div className="legal-container">
                <h1 className="legal-title">Aviso Legal</h1>

                <div className="legal-content">
                    <h2>1. Datos identificativos</h2>
                    <p>
                        En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio,
                        de Servicios de la Sociedad de la Información y de Comercio Electrónico, a continuación se exponen los
                        datos identificativos del titular del sitio web <strong>vmagencia.es</strong>:
                    </p>
                    <ul>
                        <li><strong>Titular:</strong> VM Agencia Marketing</li>
                        <li><strong>Nombre comercial:</strong> VM Agency</li>
                        <li><strong>Domicilio:</strong> Gandia, Valencia, España</li>
                        <li><strong>Correo electrónico:</strong> vmmarketing.ia@gmail.com</li>
                        <li><strong>Actividad:</strong> Marketing digital, desarrollo web, automatización con IA y consultoría digital.</li>
                    </ul>

                    <h2>2. Condiciones de uso</h2>
                    <p>
                        El acceso y uso de este sitio web atribuye la condición de usuario e implica la aceptación plena y sin
                        reservas de todas las disposiciones incluidas en este Aviso Legal. El usuario se compromete a hacer un
                        uso adecuado del sitio web y de los servicios ofrecidos, con arreglo a la ley, la buena fe, el orden
                        público y las presentes condiciones.
                    </p>

                    <h2>3. Propiedad intelectual e industrial</h2>
                    <p>
                        Todos los contenidos del sitio web (textos, imágenes, logotipos, diseño, código fuente, etc.) son
                        propiedad de VM Agency o de terceros que han autorizado su uso, y están protegidos por las leyes de
                        propiedad intelectual e industrial. Queda prohibida la reproducción, distribución, comunicación pública
                        o transformación total o parcial sin la autorización expresa del titular.
                    </p>

                    <h2>4. Exclusión de responsabilidad</h2>
                    <p>
                        VM Agency no se hace responsable de los daños o perjuicios derivados del uso de la información
                        contenida en este sitio web, ni de los posibles errores técnicos o de contenido. El sitio web puede
                        contener enlaces a sitios externos sobre los que no tenemos control ni asumimos responsabilidad alguna.
                    </p>

                    <h2>5. Legislación aplicable</h2>
                    <p>
                        Las presentes condiciones se rigen por la legislación española. Para cualquier controversia que pudiera
                        derivarse del acceso o uso del sitio web, las partes se someten a los juzgados y tribunales de Gandia
                        (Valencia), renunciando a cualquier otro fuero que pudiera corresponderles.
                    </p>

                    <p className="legal-date">Última actualización: mayo de 2026</p>
                </div>
            </div>
        </section>
    )
}
