import SiteHeaderUnified from '../../../components/SiteHeaderUnified';
import SiteFooter from '../../../components/SiteFooter';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos de Servicio — CareAI",
  description: "Términos de Servicio de CareAI - Lee nuestros términos y condiciones de uso.",
};

export default function TermsEs() {
  return (
    <>
      <SiteHeaderUnified locale="es" />
      <main>
        <div className="mx-auto max-w-4xl px-4 py-16">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-ink-900 mb-8">Términos de Servicio de CareAI</h1>
            
            <div className="text-ink-600 mb-8">
              <p><strong>Última actualización:</strong> 19 de agosto de 2025</p>
              <p>
                Estos Términos de Servicio ("Términos") rigen tu uso de los servicios de CareAI, incluyendo nuestro sitio web, aplicaciones móviles y cualquier otro servicio relacionado (colectivamente, los "Servicios").
              </p>
            </div>

            <div className="bg-ink-50 border-l-4 border-brand-blue p-6 mb-8">
              <p className="text-ink-700 font-medium">
                <strong>Resumen importante:</strong> Al usar nuestros Servicios, aceptas estos términos. Los Servicios no son un sustituto de la atención médica profesional. En caso de emergencia, contacta servicios de emergencia inmediatamente.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">1. Aceptación de los términos</h2>
            <p>
              Al acceder o usar nuestros Servicios, aceptas estar sujeto a estos Términos. Si no estás de acuerdo con alguna parte de estos términos, no debes usar nuestros Servicios.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">2. Descripción de los servicios</h2>
            <p>
              CareAI proporciona herramientas de inteligencia artificial para ayudar con recordatorios de medicamentos, seguimiento de salud, comunicación con cuidadores y asistencia general de bienestar. Nuestros Servicios están diseñados para complementar, no reemplazar, la atención médica profesional.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">3. Uso aceptable</h2>
            <p>Te comprometes a usar nuestros Servicios solo para fines legales y apropiados. No debes:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Usar los Servicios para actividades ilegales o fraudulentas</li>
              <li>Intentar acceder no autorizado a nuestros sistemas</li>
              <li>Interferir con el funcionamiento de los Servicios</li>
              <li>Compartir información falsa o engañosa</li>
              <li>Violar derechos de propiedad intelectual</li>
            </ul>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">4. Cuenta y registro</h2>
            <p>
              Para usar ciertos Servicios, debes crear una cuenta. Eres responsable de mantener la confidencialidad de tu información de inicio de sesión y de todas las actividades que ocurran bajo tu cuenta.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">5. Privacidad y datos</h2>
            <p>
              Tu privacidad es importante para nosotros. Nuestra Política de Privacidad describe cómo recopilamos, usamos y protegemos tu información. Al usar nuestros Servicios, aceptas las prácticas descritas en nuestra Política de Privacidad.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">6. Limitaciones de responsabilidad</h2>
            <p>
              <strong>NO SOMOS RESPONSABLES DE:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Decisiones médicas basadas en información de nuestros Servicios</li>
              <li>Retrasos o interrupciones en el servicio</li>
              <li>Pérdida de datos o información</li>
              <li>Daños indirectos o consecuentes</li>
            </ul>
            <p>
              Nuestra responsabilidad total está limitada al monto que hayas pagado por nuestros Servicios en los 12 meses anteriores al evento que dio lugar a la responsabilidad.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">7. Descargo de responsabilidad médica</h2>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
              <p className="text-red-700 font-medium">
                <strong>IMPORTANTE:</strong> Los Servicios de CareAI NO son un sustituto de la atención médica profesional. Siempre consulta con un proveedor de atención médica calificado para:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>Diagnósticos médicos</li>
                <li>Tratamientos médicos</li>
                <li>Decisiones de medicamentos</li>
                <li>Emergencias médicas</li>
              </ul>
              <p className="mt-2">
                En caso de emergencia médica, llama inmediatamente a los servicios de emergencia locales.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">8. Propiedad intelectual</h2>
            <p>
              Todos los derechos, títulos e intereses en nuestros Servicios, incluyendo software, contenido y marcas comerciales, son propiedad de CareAI o nuestros licenciantes. No tienes derecho a usar, copiar, modificar o distribuir nuestro contenido sin permiso.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">9. Terminación</h2>
            <p>
              Podemos terminar o suspender tu acceso a nuestros Servicios en cualquier momento, con o sin causa, con o sin previo aviso. También puedes terminar tu cuenta en cualquier momento contactándonos.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">10. Modificaciones</h2>
            <p>
              Nos reservamos el derecho de modificar estos Términos en cualquier momento. Te notificaremos cambios significativos por correo electrónico o a través de nuestros Servicios. Tu uso continuado después de los cambios constituye aceptación de los términos modificados.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">11. Ley aplicable</h2>
            <p>
              Estos Términos se rigen por las leyes del estado de [Estado], sin considerar conflictos de leyes. Cualquier disputa será resuelta en los tribunales del condado de [Condado], [Estado].
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">12. Contacto</h2>
            <p>
              Si tienes preguntas sobre estos Términos, contáctanos en:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Email:</strong> legal@careai.com</li>
              <li><strong>Dirección:</strong> CareAI Co., [Dirección]</li>
            </ul>
          </div>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
