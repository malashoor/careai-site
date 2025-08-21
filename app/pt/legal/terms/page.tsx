import SiteHeaderUnified from '../../../components/SiteHeaderUnified';
import SiteFooter from '../../../components/SiteFooter';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Serviço — CareAI",
  description: "Termos de Serviço do CareAI - Leia nossos termos de uso.",
};

export default function TermsPt() {
  return (
    <>
      <SiteHeaderUnified locale="pt" />
      <main>
        <div className="mx-auto max-w-4xl px-4 py-16">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-ink-900 mb-8">Termos de Serviço do CareAI</h1>
            
            <div className="text-ink-600 mb-8">
              <p><strong>Última atualização:</strong> 19 de agosto de 2025</p>
              <p>
                Estes Termos de Serviço ("Termos") regem o uso dos serviços do CareAI, incluindo nosso site, aplicativo móvel e outros serviços relacionados (coletivamente, "Serviços").
              </p>
            </div>

            <div className="bg-ink-50 border-l-4 border-brand-blue p-6 mb-8">
              <p className="text-ink-700 font-medium">
                <strong>Resumo importante:</strong> Ao usar nossos serviços, você concorda com estes termos. Os serviços não são um substituto para cuidados médicos profissionais. Em emergências médicas, entre em contato com serviços de emergência imediatamente.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar ou usar nossos serviços, você concorda em estar vinculado a estes termos. Se você não concordar com qualquer parte destes termos, não deve usar nossos serviços.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">2. Descrição dos Serviços</h2>
            <p>
              O CareAI fornece ferramentas de inteligência artificial para ajudar com lembretes de medicamentos, rastreamento de saúde, comunicação com cuidadores e suporte geral ao bem-estar. Nossos serviços são projetados para complementar, não substituir, cuidados médicos profissionais.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">3. Uso Aceitável</h2>
            <p>Você concorda em usar nossos serviços apenas para propósitos legais e apropriados. Você não deve:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Usar serviços para atividades ilegais ou fraudulentas</li>
              <li>Tentar acessar não autorizadamente nossos sistemas</li>
              <li>Interferir no funcionamento dos serviços</li>
              <li>Compartilhar informações falsas ou enganosas</li>
              <li>Violar direitos de propriedade intelectual</li>
            </ul>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">4. Conta e Registro</h2>
            <p>
              Para usar certos serviços, você pode precisar criar uma conta. Você é responsável por manter a confidencialidade de suas informações de login e por todas as atividades que ocorrem sob sua conta.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">5. Privacidade e Dados</h2>
            <p>
              Sua privacidade é importante para nós. Nossa Política de Privacidade descreve como coletamos, usamos e protegemos suas informações. Ao usar nossos serviços, você concorda com as práticas descritas em nossa Política de Privacidade.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">6. Limitação de Responsabilidade</h2>
            <p>
              <strong>Não somos responsáveis por:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Decisões médicas baseadas em informações de nossos serviços</li>
              <li>Atrasos ou interrupções nos serviços</li>
              <li>Perda de dados ou informações</li>
              <li>Danos indiretos ou consequenciais</li>
            </ul>
            <p>
              Nossa responsabilidade total é limitada ao valor que você pagou por nossos serviços nos 12 meses anteriores ao evento que deu origem à responsabilidade.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">7. Isenção Médica</h2>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
              <p className="text-red-700 font-medium">
                <strong>Importante:</strong> Os serviços do CareAI não são um substituto para cuidados médicos profissionais. Sempre consulte um provedor de saúde qualificado para:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>Diagnósticos médicos</li>
                <li>Tratamentos médicos</li>
                <li>Decisões sobre medicamentos</li>
                <li>Emergências médicas</li>
              </ul>
              <p className="mt-2">
                Em emergências médicas, ligue para serviços de emergência locais imediatamente.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">8. Propriedade Intelectual</h2>
            <p>
              Todos os direitos, propriedade e interesses em nossos serviços, incluindo software, conteúdo e marcas registradas, são de propriedade do CareAI ou de nossos licenciadores. Você não tem o direito de usar, copiar, modificar ou distribuir nosso conteúdo sem permissão.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">9. Rescisão</h2>
            <p>
              Podemos encerrar ou suspender seu acesso aos serviços a qualquer momento, com ou sem aviso prévio. Você também pode encerrar sua conta a qualquer momento entrando em contato conosco.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">10. Modificações</h2>
            <p>
              Reservamo-nos o direito de modificar estes termos a qualquer momento. Notificaremos você sobre mudanças significativas por e-mail ou através de nossos serviços. O uso contínuo após as mudanças constitui aceitação dos termos modificados.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">11. Lei Aplicável</h2>
            <p>
              Estes termos são regidos pelas leis de [Estado], sem consideração aos conflitos de leis. Todas as disputas serão resolvidas nos tribunais de [Estado], [Condado].
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">12. Contato</h2>
            <p>
              Se você tiver dúvidas sobre estes termos, entre em contato conosco:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>E-mail:</strong> legal@careai.com</li>
              <li><strong>Endereço:</strong> CareAI Co., [endereço]</li>
            </ul>
          </div>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
