import "../css/legal.css"

export function CookiesPolicy() {
    return (
        <section className="legal-section">
            <div className="legal-container">
                <h1 className="legal-title">Política de Cookies</h1>

                <div className="legal-content">
                    <h2>1. ¿Qué son las cookies?</h2>
                    <p>
                        Las cookies son pequeños archivos de texto que se almacenan en tu navegador cuando visitas un sitio web.
                        Permiten que el sitio recuerde tus preferencias y comportamiento durante un periodo de tiempo.
                    </p>

                    <h2>2. ¿Qué cookies utilizamos?</h2>
                    <p>En VM Agency utilizamos únicamente cookies técnicas y de terceros esenciales para el funcionamiento del sitio:</p>

                    <h3>Cookies técnicas (necesarias)</h3>
                    <p>Son necesarias para el correcto funcionamiento del sitio web y no requieren consentimiento previo:</p>
                    <ul>
                        <li>Cookie de sesión para el funcionamiento de la aplicación React</li>
                        <li>Preferencia de idioma seleccionado por el usuario</li>
                    </ul>

                    <h3>Cookies de terceros</h3>
                    <p>Utilizamos servicios externos que pueden establecer sus propias cookies:</p>
                    <ul>
                        <li><strong>Calendly:</strong> herramienta de reserva de citas. Consulta su política de cookies en <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer">calendly.com/privacy</a>.</li>
                    </ul>

                    <h2>3. Gestión de cookies</h2>
                    <p>
                        Puedes configurar tu navegador para aceptar o rechazar todas las cookies, o para recibir una
                        notificación antes de que se almacene una cookie. Los pasos para gestionar las cookies varían según
                        el navegador:
                    </p>
                    <ul>
                        <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
                        <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
                        <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
                        <li><a href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
                    </ul>
                    <p>
                        Si desactivas las cookies técnicas, es posible que el sitio web no funcione correctamente.
                    </p>

                    <h2>4. Consentimiento</h2>
                    <p>
                        Al navegar por nuestro sitio web, aceptas el uso de las cookies técnicas necesarias para su
                        funcionamiento. Para cualquier otra cookie, te solicitaremos tu consentimiento expreso.
                    </p>

                    <h2>5. Contacto</h2>
                    <p>
                        Si tienes dudas sobre nuestra política de cookies, puedes escribirnos a:
                        <strong>vmmarketing.ia@gmail.com</strong>
                    </p>

                    <p className="legal-date">Última actualización: mayo de 2026</p>
                </div>
            </div>
        </section>
    )
}
