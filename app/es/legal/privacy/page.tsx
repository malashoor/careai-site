import SiteHeaderUnified from '../../../components/SiteHeaderUnified';
import SiteFooter from '../../../components/SiteFooter';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad — CareAI",
  description: "Política de Privacidad de CareAI - Aprende cómo recopilamos, usamos y protegemos tu información.",
};

export default function PrivacyEs() {
  return (
    <>
      <SiteHeaderUnified locale="es" />
      <main>
        <div className="mx-auto max-w-4xl px-4 py-16">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-ink-900 mb-8">Política de Privacidad de CareAI</h1>
            
            <div className="text-ink-600 mb-8">
              <p><strong>Última actualización:</strong> 19 de agosto de 2025</p>
              <p>
                Esta Política de Privacidad explica cómo CareAI ("CareAI," "nosotros," "nos," o "nuestro") recopila, usa y comparte información cuando utilizas nuestros sitios web, aplicaciones y servicios relacionados (colectivamente, los "Servicios").
              </p>
            </div>

            <div className="bg-ink-50 border-l-4 border-brand-blue p-6 mb-8">
              <p className="text-ink-700 font-medium">
                <strong>Resumen en lenguaje sencillo</strong> (no es un sustituto de la política completa): recopilamos información de cuenta, dispositivo y relacionada con la salud para proporcionar los Servicios, mantener a las personas seguras, mejorar la confiabilidad y cumplir con los requisitos legales. Tú controlas tus datos y puedes acceder, corregir, exportar o eliminarlos.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">1. Quiénes somos</h2>
            <p><strong>Controlador de datos:</strong> CareAI Co.</p>
            <p><strong>Contacto:</strong> privacy@careai.com.</p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">2. Alcance</h2>
            <p>
              Esta política se aplica a los Servicios y a las personas que los utilizan (pacientes, cuidadores, familiares y clínicos). Si utilizas CareAI a través de un proveedor de atención médica, podemos procesar datos como <strong>procesador</strong> en nombre del proveedor sujeto a un Acuerdo de Asociado Comercial (BAA) o Acuerdo de Procesamiento de Datos (DPA).
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">3. Información que recopilamos</h2>
            <p>Recopilamos información <strong>que proporcionas</strong>, información <strong>automáticamente</strong>, e información de <strong>integraciones</strong> que conectas.</p>

            <h3 className="text-xl font-bold text-ink-900 mt-8 mb-3">A) Lo que proporcionas</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Perfil y contacto: nombre, correo electrónico, teléfono, idioma preferido, contactos de emergencia.</li>
              <li>Información de salud que ingresas o nos autorizas a acceder: síntomas, medicamentos, horarios, notas.</li>
              <li>Comunicaciones: mensajes, solicitudes de soporte, notas de voz grabadas (si habilitas la grabación).</li>
              <li>Detalles de pago y suscripción (procesados por proveedores de pago de terceros—CareAI no almacena números completos de tarjeta).</li>
            </ul>

            <h3 className="text-xl font-bold text-ink-900 mt-8 mb-3">B) Recopilado automáticamente</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Datos del dispositivo y la aplicación: modelo/OS del dispositivo, versión de la aplicación, identificadores únicos, registros de fallas, métricas de rendimiento.</li>
              <li>Datos de uso: funciones utilizadas, botones clickeados, páginas vistas, marcas de tiempo de sesión, ubicación aproximada derivada de IP.</li>
            </ul>

            <h3 className="text-xl font-bold text-ink-900 mt-8 mb-3">C) De integraciones que conectas</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Dispositivos portátiles / plataformas de salud (por ejemplo, HealthKit / Google Fit, dispositivos Bluetooth).</li>
              <li>Sistemas EHR/EMR o software clínico (si tu organización conecta estos).</li>
            </ul>
            <p>Solo accedemos a datos que autorizas explícitamente.</p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">4. Por qué usamos tu información (propósitos y bases legales)</h2>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Proporcionar y asegurar los Servicios</strong> (ejecutar el contrato; intereses legítimos).</li>
              <li><strong>Características de cuidado</strong> como recordatorios de medicamentos, seguimiento de adherencia, alertas de caída, asistente de voz y compartir con cuidadores aprobados (consentimiento; intereses vitales; interés público sustancial donde esté permitido).</li>
              <li><strong>Investigación y mejora del producto</strong> como análisis, depuración, pruebas A/B (intereses legítimos; consentimiento donde sea requerido).</li>
              <li><strong>Comunicaciones</strong> como mensajes de servicio, alertas de seguridad y—con tu opt-in—marketing (consentimiento; intereses legítimos).</li>
              <li><strong>Cumplimiento legal</strong> incluyendo responder a solicitudes legales y hacer cumplir términos (obligación legal; intereses legítimos).</li>
            </ul>

            <div className="bg-ink-50 border-l-4 border-brand-blue p-6 mb-8">
              <p className="text-ink-700">
                <strong>Categoría especial / datos de salud (GDPR):</strong> Procesamos datos de salud solo con tu <strong>consentimiento explícito</strong>, para proteger intereses vitales, o como está permitido bajo un contrato con tu proveedor de atención médica sujeto a salvaguardas apropiadas (Art. 9 GDPR). Puedes retirar el consentimiento en cualquier momento.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">5. Compartir tu información</h2>
            <p>Compartimos información solo con:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Tus contactos autorizados</strong> (familia, cuidadores, clínicos) cuando habilitas el compartir.</li>
              <li><strong>Proveedores de servicios</strong> (alojamiento en la nube, análisis, reportes de fallas, soporte). Solo pueden acceder a datos <strong>para</strong> realizar servicios para nosotros bajo contrato.</li>
              <li><strong>Servicios de emergencia</strong> si activas SOS o creemos razonablemente que hay riesgo inminente para la vida o seguridad.</li>
              <li><strong>Legal y cumplimiento</strong> cuando lo requiera la ley, para proteger derechos y seguridad, o en una transacción corporativa (con notificación y salvaguardas).</li>
            </ul>
            <p><strong>No vendemos</strong> tu información personal y no usamos datos sensibles de salud para publicidad dirigida.</p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">6. Transferencias internacionales</h2>
            <p>
              Podemos transferir datos a países con diferentes leyes de privacidad. Donde lo hacemos, usamos salvaguardas como <strong>Cláusulas Contractuales Estándar (SCCs)</strong> y, para transferencias a los EE.UU., participación en el <strong>Marco de Privacidad de Datos UE-EE.UU. (DPF)</strong> (si está certificado). Las copias de las salvaguardas relevantes están disponibles bajo solicitud.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">7. Seguridad</h2>
            <p>
              Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger tu información, incluyendo encriptación, controles de acceso, monitoreo de seguridad y capacitación del personal. Sin embargo, ningún sistema es completamente seguro.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">8. Tus derechos</h2>
            <p>Dependiendo de tu ubicación, puedes tener derechos como:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Acceso, corrección, portabilidad y eliminación de datos</li>
              <li>Restricción y objeción al procesamiento</li>
              <li>Retiro del consentimiento</li>
              <li>Presentación de quejas ante autoridades de protección de datos</li>
            </ul>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">9. Retención de datos</h2>
            <p>
              Retenemos tu información solo mientras sea necesario para los propósitos descritos en esta política o según lo requiera la ley. Los datos se eliminan o anonimizan de forma segura cuando ya no son necesarios.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">10. Cambios a esta política</h2>
            <p>
              Podemos actualizar esta política ocasionalmente. Te notificaremos cambios significativos por correo electrónico o a través de la aplicación. Tu uso continuado de los Servicios después de los cambios constituye aceptación de la política actualizada.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">11. Contacto</h2>
            <p>
              Si tienes preguntas sobre esta política o quieres ejercer tus derechos, contáctanos en:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Email:</strong> privacy@careai.com</li>
              <li><strong>Dirección:</strong> CareAI Co., [Dirección]</li>
            </ul>
          </div>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
