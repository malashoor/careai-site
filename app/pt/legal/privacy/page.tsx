import SiteHeaderUnified from '../../../components/SiteHeaderUnified';
import SiteFooter from '../../../components/SiteFooter';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade — CareAI",
  description: "Política de Privacidade do CareAI - Saiba como coletamos, usamos e protegemos suas informações.",
};

export default function PrivacyPt() {
  return (
    <>
      <SiteHeaderUnified locale="pt" />
      <main>
        <div className="mx-auto max-w-4xl px-4 py-16">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-ink-900 mb-8">Política de Privacidade do CareAI</h1>
            
            <div className="text-ink-600 mb-8">
              <p><strong>Última atualização:</strong> 19 de agosto de 2025</p>
              <p>
                Esta Política de Privacidade descreve como o CareAI ("CareAI," "nós," "nosso," ou "nossa") coleta, usa e compartilha informações quando você usa nosso site, aplicativos e serviços relacionados (coletivamente, "Serviços").
              </p>
            </div>

            <div className="bg-ink-50 border-l-4 border-brand-blue p-6 mb-8">
              <p className="text-ink-700 font-medium">
                <strong>Resumo em linguagem simples</strong> (não é um substituto para a política completa): Coletamos informações de conta, dispositivo e saúde para fornecer serviços, manter as pessoas seguras, melhorar a confiabilidade e atender aos requisitos legais. Você controla seus dados e pode acessá-los, corrigi-los, exportá-los ou excluí-los.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">1. Quem somos</h2>
            <p><strong>Controlador de dados:</strong> CareAI Co.</p>
            <p><strong>Contato:</strong> privacy@careai.com.</p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">2. Escopo</h2>
            <p>
              Esta política se aplica aos Serviços e aos indivíduos que os utilizam (pacientes, cuidadores, membros da família e clínicos). Se você usar o CareAI através de um provedor de saúde, podemos processar dados como <strong>processador</strong> em nome do provedor, sujeito a um Acordo de Associado Comercial (BAA) ou Acordo de Processamento de Dados (DPA).
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">3. Informações que coletamos</h2>
            <p>Coletamos informações <strong>fornecidas por você</strong>, <strong>coletadas automaticamente</strong>, e de <strong>integrações</strong> que você conecta.</p>

            <h3 className="text-xl font-bold text-ink-900 mt-8 mb-3">A) Fornecidas por você</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Perfil e contato: nome, e-mail, telefone, idioma preferido, contatos de emergência.</li>
              <li>Informações de saúde que você insere ou nos autoriza a acessar: sintomas, medicamentos, cronogramas, notas.</li>
              <li>Comunicações: mensagens, solicitações de suporte, notas de voz gravadas (se você habilitar gravação).</li>
              <li>Detalhes de pagamento e assinatura (processados por provedores de pagamento terceiros—o CareAI não armazena números completos de cartão).</li>
            </ul>

            <h3 className="text-xl font-bold text-ink-900 mt-8 mb-3">B) Coletadas automaticamente</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Dados de dispositivo e aplicativo: modelo/OS do dispositivo, versão do aplicativo, identificadores únicos, logs de crash, métricas de desempenho.</li>
              <li>Dados de uso: recursos usados, botões clicados, páginas visualizadas, timestamps de sessão, localização aproximada derivada do IP.</li>
            </ul>

            <h3 className="text-xl font-bold text-ink-900 mt-8 mb-3">C) De integrações que você conecta</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Dispositivos vestíveis/plataformas de saúde (ex: HealthKit/Google Fit, dispositivos Bluetooth).</li>
              <li>Sistemas EHR/EMR ou software de clínica (se sua organização os conectar).</li>
            </ul>
            <p>Acessamos apenas dados que você autorizou explicitamente.</p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">4. Por que usamos suas informações (propósitos e bases legais)</h2>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Fornecer e proteger serviços</strong> (executar contrato; interesse legítimo).</li>
              <li><strong>Recursos de cuidados</strong> como lembretes de medicamentos, rastreamento de conformidade, alertas de queda, assistente de voz e compartilhamento com cuidadores aprovados (consentimento; interesse vital; interesse público substancial onde permitido).</li>
              <li><strong>Pesquisa e melhoria de produtos</strong> como análise, depuração, testes A/B (interesse legítimo; consentimento onde necessário).</li>
              <li><strong>Comunicações</strong> como mensagens de serviço, alertas de segurança e—com seu opt-in—marketing (consentimento; interesse legítimo).</li>
              <li><strong>Conformidade legal</strong> incluindo responder a solicitações legais e fazer cumprir termos (obrigação legal; interesse legítimo).</li>
            </ul>

            <div className="bg-ink-50 border-l-4 border-brand-blue p-6 mb-8">
              <p className="text-ink-700">
                <strong>Categorias especiais/Dados de saúde (GDPR):</strong> Processamos dados de saúde apenas com seu <strong>consentimento explícito</strong>, para proteger interesses vitais, ou conforme permitido por contrato com seu provedor de saúde, sujeito a salvaguardas apropriadas (Artigo 9 do GDPR). Você pode retirar o consentimento a qualquer momento.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">5. Compartilhando suas informações</h2>
            <p>Compartilhamos informações apenas com:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Seus contatos autorizados</strong> (família, cuidadores, clínicos) quando você habilita o compartilhamento.</li>
              <li><strong>Provedores de serviços</strong> (hospedagem em nuvem, análise, relatórios de crash, suporte). Eles só podem acessar dados <strong>para</strong> nos fornecer serviços sob contrato.</li>
              <li><strong>Serviços de emergência</strong> se você acionar SOS ou acreditarmos razoavelmente que há risco iminente para vida ou segurança.</li>
              <li><strong>Legal e conformidade</strong> quando exigido por lei, para proteger direitos e segurança, ou em transações corporativas (com notificação e salvaguardas).</li>
            </ul>
            <p>Não <strong>vendemos</strong> suas informações pessoais nem usamos dados de saúde sensíveis para publicidade direcionada.</p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">6. Transferências internacionais</h2>
            <p>
              Podemos transferir dados para países com diferentes leis de privacidade. Quando fazemos isso, usamos salvaguardas como <strong>Cláusulas Contratuais Padrão (SCCs)</strong>, e para transferências para os EUA, participação no <strong>EU-US Data Privacy Framework (DPF)</strong> (se certificado). Cópias das salvaguardas relevantes estão disponíveis mediante solicitação.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">7. Segurança</h2>
            <p>
              Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger suas informações, incluindo criptografia, controles de acesso, monitoramento de segurança e treinamento de pessoal. No entanto, nenhum sistema é completamente seguro.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">8. Seus direitos</h2>
            <p>Dependendo de sua localização, você pode ter os seguintes direitos:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Acesso, correção, portabilidade e exclusão de dados</li>
              <li>Restrição e objeção ao processamento</li>
              <li>Retirada de consentimento</li>
              <li>Apresentação de queixa às autoridades de proteção de dados</li>
            </ul>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">9. Retenção de dados</h2>
            <p>
              Retemos suas informações apenas pelo tempo necessário para cumprir os propósitos descritos nesta política ou conforme exigido por lei. Quando os dados não são mais necessários, são excluídos com segurança ou anonimizados.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">10. Mudanças nesta política</h2>
            <p>
              Podemos ocasionalmente atualizar esta política. Notificaremos você sobre mudanças significativas por e-mail ou através do aplicativo. O uso contínuo dos Serviços após as mudanças constitui aceitação da política atualizada.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">11. Entre em contato</h2>
            <p>
              Se você tiver dúvidas sobre esta política ou quiser exercer seus direitos, entre em contato conosco:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>E-mail:</strong> privacy@careai.com</li>
              <li><strong>Endereço:</strong> CareAI Co., [endereço]</li>
            </ul>
          </div>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
