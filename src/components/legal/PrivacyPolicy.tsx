import "../css/legal.css"

export function PrivacyPolicy() {
    return (
        <section className="legal-section">
            <div className="legal-container">
                <h1 className="legal-title">Política de Privacidad</h1>

                <div className="legal-content">
                    <h2>1. Responsable del tratamiento</h2>
                    <p>
                        Identidad: Víctor Martínez
                        <br />
                        Nombre comercial: VM Agency
                        <br />
                        Correo electrónico: vmmarketing.ia@gmail.com
                        <br />
                        Domicilio: Gandia, Valencia, España
                    </p>

                    <h2>2. Datos que recopilamos</h2>
                    <p>Podemos recopilar los siguientes datos personales a través de nuestros formularios:</p>
                    <ul>
                        <li>Nombre y apellidos</li>
                        <li>Dirección de correo electrónico</li>
                        <li>Número de teléfono</li>
                        <li>Información sobre tu negocio (presupuesto, perfil, necesidades)</li>
                    </ul>

                    <h2>3. Finalidad del tratamiento</h2>
                    <p>Los datos personales recogidos se utilizan para las siguientes finalidades:</p>
                    <ul>
                        <li>Gestionar la solicitud de información o consulta realizada a través del formulario</li>
                        <li>Evaluar si tu perfil se ajusta a nuestros servicios</li>
                        <li>Enviar comunicaciones comerciales relacionadas con nuestros servicios (previa autorización)</li>
                        <li>Gestionar la agenda de llamadas y reuniones</li>
                    </ul>

                    <h2>4. Base legal</h2>
                    <p>
                        El tratamiento de tus datos se realiza sobre la base del consentimiento prestado al marcar la casilla
                        de aceptación y enviar el formulario correspondiente, así como la ejecución de medidas precontractuales
                        solicitadas por el interesado.
                    </p>

                    <h2>5. Destinatarios y transferencias</h2>
                    <p>
                        No cedemos tus datos personales a terceros, salvo obligación legal. Utilizamos herramientas de
                        terceros como Calendly para la gestión de citas, que pueden tener acceso a tus datos bajo sus propias
                        políticas de privacidad.
                    </p>

                    <h2>6. Plazo de conservación</h2>
                    <p>
                        Conservaremos tus datos personales mientras exista interés mutuo o durante el tiempo necesario para
                        cumplir con las obligaciones legales aplicables. Una vez finalizada la relación, los datos se
                        conservarán bloqueados durante los plazos legales de prescripción.
                    </p>

                    <h2>7. Derechos del usuario</h2>
                    <p>Puedes ejercer en cualquier momento tus derechos de:</p>
                    <ul>
                        <li><strong>Acceso:</strong> saber qué datos tuyos estamos tratando</li>
                        <li><strong>Rectificación:</strong> solicitar la corrección de datos inexactos</li>
                        <li><strong>Supresión:</strong> solicitar la eliminación de tus datos</li>
                        <li><strong>Limitación:</strong> solicitar que limitemos el tratamiento</li>
                        <li><strong>Portabilidad:</strong> recibir tus datos en un formato estructurado</li>
                        <li><strong>Oposición:</strong> oponerte al tratamiento de tus datos</li>
                    </ul>
                    <p>
                        Para ejercer estos derechos, escríbenos a <strong>vmmarketing.ia@gmail.com</strong> indicando el
                        derecho que deseas ejercer. También puedes presentar una reclamación ante la Agencia Española de
                        Protección de Datos (AEPD).
                    </p>

                    <p className="legal-date">Última actualización: mayo de 2026</p>
                </div>
            </div>
        </section>
    )
}
