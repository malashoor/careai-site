#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Language configurations
const languages = [
  {
    code: 'fr',
    name: 'Français',
    privacy: {
      title: 'Politique de Confidentialité — CareAI',
      description: 'Politique de Confidentialité de CareAI - Apprenez comment nous collectons, utilisons et protégeons vos informations.',
      h1: 'Politique de Confidentialité de CareAI',
      lastUpdated: 'Dernière mise à jour',
      summary: 'Résumé en langage simple',
      whoWeAre: 'Qui nous sommes',
      scope: 'Portée',
      infoCollected: 'Informations que nous collectons',
      youProvide: 'Ce que vous fournissez',
      autoCollected: 'Collecté automatiquement',
      integrations: 'Des intégrations que vous connectez',
      whyWeUse: 'Pourquoi nous utilisons vos informations',
      sharing: 'Partage de vos informations',
      international: 'Transferts internationaux',
      security: 'Sécurité',
      yourRights: 'Vos droits',
      retention: 'Rétention des données',
      changes: 'Modifications de cette politique',
      contact: 'Contact'
    },
    terms: {
      title: 'Conditions de Service — CareAI',
      description: 'Conditions de Service de CareAI - Lisez nos termes et conditions d\'utilisation.',
      h1: 'Conditions de Service de CareAI',
      lastUpdated: 'Dernière mise à jour',
      summary: 'Résumé important',
      acceptance: 'Acceptation des conditions',
      description: 'Description des services',
      acceptableUse: 'Utilisation acceptable',
      account: 'Compte et enregistrement',
      privacy: 'Confidentialité et données',
      liability: 'Limitations de responsabilité',
      medicalDisclaimer: 'Avertissement médical',
      intellectualProperty: 'Propriété intellectuelle',
      termination: 'Résiliation',
      modifications: 'Modifications',
      applicableLaw: 'Loi applicable',
      contact: 'Contact'
    }
  },
  {
    code: 'de',
    name: 'Deutsch',
    privacy: {
      title: 'Datenschutzrichtlinie — CareAI',
      description: 'CareAI Datenschutzrichtlinie - Erfahren Sie, wie wir Ihre Informationen sammeln, verwenden und schützen.',
      h1: 'CareAI Datenschutzrichtlinie',
      lastUpdated: 'Zuletzt aktualisiert',
      summary: 'Zusammenfassung in einfacher Sprache',
      whoWeAre: 'Wer wir sind',
      scope: 'Umfang',
      infoCollected: 'Informationen, die wir sammeln',
      youProvide: 'Was Sie bereitstellen',
      autoCollected: 'Automatisch gesammelt',
      integrations: 'Von Integrationen, die Sie verbinden',
      whyWeUse: 'Warum wir Ihre Informationen verwenden',
      sharing: 'Teilen Ihrer Informationen',
      international: 'Internationale Übertragungen',
      security: 'Sicherheit',
      yourRights: 'Ihre Rechte',
      retention: 'Datenaufbewahrung',
      changes: 'Änderungen dieser Richtlinie',
      contact: 'Kontakt'
    },
    terms: {
      title: 'Nutzungsbedingungen — CareAI',
      description: 'CareAI Nutzungsbedingungen - Lesen Sie unsere Nutzungsbedingungen.',
      h1: 'CareAI Nutzungsbedingungen',
      lastUpdated: 'Zuletzt aktualisiert',
      summary: 'Wichtige Zusammenfassung',
      acceptance: 'Annahme der Bedingungen',
      description: 'Beschreibung der Dienste',
      acceptableUse: 'Akzeptable Nutzung',
      account: 'Konto und Registrierung',
      privacy: 'Datenschutz und Daten',
      liability: 'Haftungsbeschränkungen',
      medicalDisclaimer: 'Medizinischer Haftungsausschluss',
      intellectualProperty: 'Geistiges Eigentum',
      termination: 'Kündigung',
      modifications: 'Änderungen',
      applicableLaw: 'Anwendbares Recht',
      contact: 'Kontakt'
    }
  },
  {
    code: 'zh',
    name: '中文',
    privacy: {
      title: '隐私政策 — CareAI',
      description: 'CareAI隐私政策 - 了解我们如何收集、使用和保护您的信息。',
      h1: 'CareAI隐私政策',
      lastUpdated: '最后更新',
      summary: '简单语言摘要',
      whoWeAre: '我们是谁',
      scope: '适用范围',
      infoCollected: '我们收集的信息',
      youProvide: '您提供的信息',
      autoCollected: '自动收集的信息',
      integrations: '您连接的集成',
      whyWeUse: '我们使用您信息的原因',
      sharing: '分享您的信息',
      international: '国际传输',
      security: '安全',
      yourRights: '您的权利',
      retention: '数据保留',
      changes: '本政策变更',
      contact: '联系我们'
    },
    terms: {
      title: '服务条款 — CareAI',
      description: 'CareAI服务条款 - 阅读我们的使用条款和条件。',
      h1: 'CareAI服务条款',
      lastUpdated: '最后更新',
      summary: '重要摘要',
      acceptance: '接受条款',
      description: '服务描述',
      acceptableUse: '可接受使用',
      account: '账户和注册',
      privacy: '隐私和数据',
      liability: '责任限制',
      medicalDisclaimer: '医疗免责声明',
      intellectualProperty: '知识产权',
      termination: '终止',
      modifications: '修改',
      applicableLaw: '适用法律',
      contact: '联系我们'
    }
  },
  {
    code: 'ja',
    name: '日本語',
    privacy: {
      title: 'プライバシーポリシー — CareAI',
      description: 'CareAIプライバシーポリシー - 私たちがどのように情報を収集、使用、保護するかについて学びます。',
      h1: 'CareAIプライバシーポリシー',
      lastUpdated: '最終更新',
      summary: '簡単な言語での要約',
      whoWeAre: '私たちについて',
      scope: '適用範囲',
      infoCollected: '収集する情報',
      youProvide: 'あなたが提供するもの',
      autoCollected: '自動収集',
      integrations: 'あなたが接続する統合',
      whyWeUse: '情報を使用する理由',
      sharing: '情報の共有',
      international: '国際転送',
      security: 'セキュリティ',
      yourRights: 'あなたの権利',
      retention: 'データ保持',
      changes: 'このポリシーの変更',
      contact: 'お問い合わせ'
    },
    terms: {
      title: '利用規約 — CareAI',
      description: 'CareAI利用規約 - 私たちの利用規約をお読みください。',
      h1: 'CareAI利用規約',
      lastUpdated: '最終更新',
      summary: '重要な要約',
      acceptance: '規約の承諾',
      description: 'サービスの説明',
      acceptableUse: '適切な使用',
      account: 'アカウントと登録',
      privacy: 'プライバシーとデータ',
      liability: '責任の制限',
      medicalDisclaimer: '医療免責事項',
      intellectualProperty: '知的財産',
      termination: '終了',
      modifications: '変更',
      applicableLaw: '準拠法',
      contact: 'お問い合わせ'
    }
  },
  {
    code: 'ko',
    name: '한국어',
    privacy: {
      title: '개인정보처리방침 — CareAI',
      description: 'CareAI 개인정보처리방침 - 우리가 정보를 수집, 사용 및 보호하는 방법을 알아보세요.',
      h1: 'CareAI 개인정보처리방침',
      lastUpdated: '최종 업데이트',
      summary: '간단한 언어 요약',
      whoWeAre: '우리는 누구인가',
      scope: '적용 범위',
      infoCollected: '수집하는 정보',
      youProvide: '제공하는 정보',
      autoCollected: '자동 수집',
      integrations: '연결하는 통합',
      whyWeUse: '정보를 사용하는 이유',
      sharing: '정보 공유',
      international: '국제 전송',
      security: '보안',
      yourRights: '귀하의 권리',
      retention: '데이터 보존',
      changes: '이 정책의 변경',
      contact: '연락처'
    },
    terms: {
      title: '서비스 약관 — CareAI',
      description: 'CareAI 서비스 약관 - 우리의 사용 약관을 읽어보세요.',
      h1: 'CareAI 서비스 약관',
      lastUpdated: '최종 업데이트',
      summary: '중요한 요약',
      acceptance: '약관 수락',
      description: '서비스 설명',
      acceptableUse: '허용 가능한 사용',
      account: '계정 및 등록',
      privacy: '개인정보 및 데이터',
      liability: '책임 제한',
      medicalDisclaimer: '의료 면책 조항',
      intellectualProperty: '지적 재산권',
      termination: '종료',
      modifications: '수정',
      applicableLaw: '적용 법률',
      contact: '연락처'
    }
  },
  {
    code: 'hi',
    name: 'हिन्दी',
    privacy: {
      title: 'गोपनीयता नीति — CareAI',
      description: 'CareAI गोपनीयता नीति - जानें कि हम आपकी जानकारी को कैसे एकत्र, उपयोग और सुरक्षित करते हैं।',
      h1: 'CareAI गोपनीयता नीति',
      lastUpdated: 'अंतिम अपडेट',
      summary: 'सरल भाषा में सारांश',
      whoWeAre: 'हम कौन हैं',
      scope: 'दायरा',
      infoCollected: 'जानकारी जो हम एकत्र करते हैं',
      youProvide: 'आप जो प्रदान करते हैं',
      autoCollected: 'स्वचालित रूप से एकत्र',
      integrations: 'आप जो एकीकरण जोड़ते हैं',
      whyWeUse: 'हम आपकी जानकारी का उपयोग क्यों करते हैं',
      sharing: 'आपकी जानकारी साझा करना',
      international: 'अंतर्राष्ट्रीय स्थानांतरण',
      security: 'सुरक्षा',
      yourRights: 'आपके अधिकार',
      retention: 'डेटा प्रतिधारण',
      changes: 'इस नीति में परिवर्तन',
      contact: 'संपर्क'
    },
    terms: {
      title: 'सेवा की शर्तें — CareAI',
      description: 'CareAI सेवा की शर्तें - हमारी उपयोग की शर्तें पढ़ें।',
      h1: 'CareAI सेवा की शर्तें',
      lastUpdated: 'अंतिम अपडेट',
      summary: 'महत्वपूर्ण सारांश',
      acceptance: 'शर्तों की स्वीकृति',
      description: 'सेवाओं का विवरण',
      acceptableUse: 'स्वीकार्य उपयोग',
      account: 'खाता और पंजीकरण',
      privacy: 'गोपनीयता और डेटा',
      liability: 'दायित्व की सीमाएं',
      medicalDisclaimer: 'चिकित्सा अस्वीकरण',
      intellectualProperty: 'बौद्धिक संपदा',
      termination: 'समाप्ति',
      modifications: 'संशोधन',
      applicableLaw: 'लागू कानून',
      contact: 'संपर्क'
    }
  },
  {
    code: 'pt',
    name: 'Português',
    privacy: {
      title: 'Política de Privacidade — CareAI',
      description: 'Política de Privacidade da CareAI - Aprenda como coletamos, usamos e protegemos suas informações.',
      h1: 'Política de Privacidade da CareAI',
      lastUpdated: 'Última atualização',
      summary: 'Resumo em linguagem simples',
      whoWeAre: 'Quem somos',
      scope: 'Escopo',
      infoCollected: 'Informações que coletamos',
      youProvide: 'O que você fornece',
      autoCollected: 'Coletado automaticamente',
      integrations: 'De integrações que você conecta',
      whyWeUse: 'Por que usamos suas informações',
      sharing: 'Compartilhando suas informações',
      international: 'Transferências internacionais',
      security: 'Segurança',
      yourRights: 'Seus direitos',
      retention: 'Retenção de dados',
      changes: 'Mudanças nesta política',
      contact: 'Contato'
    },
    terms: {
      title: 'Termos de Serviço — CareAI',
      description: 'Termos de Serviço da CareAI - Leia nossos termos e condições de uso.',
      h1: 'Termos de Serviço da CareAI',
      lastUpdated: 'Última atualização',
      summary: 'Resumo importante',
      acceptance: 'Aceitação dos termos',
      description: 'Descrição dos serviços',
      acceptableUse: 'Uso aceitável',
      account: 'Conta e registro',
      privacy: 'Privacidade e dados',
      liability: 'Limitações de responsabilidade',
      medicalDisclaimer: 'Aviso médico',
      intellectualProperty: 'Propriedade intelectual',
      termination: 'Rescisão',
      modifications: 'Modificações',
      applicableLaw: 'Lei aplicável',
      contact: 'Contato'
    }
  }
];

// Privacy Policy template
function generatePrivacyPage(lang) {
  return `import SiteHeaderUnified from '../../../components/SiteHeaderUnified';
import SiteFooter from '../../../components/SiteFooter';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "${lang.privacy.title}",
  description: "${lang.privacy.description}",
};

export default function Privacy${lang.code.toUpperCase()}() {
  return (
    <>
      <SiteHeaderUnified locale="${lang.code}" />
      <main>
        <div className="mx-auto max-w-4xl px-4 py-16">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-ink-900 mb-8">${lang.privacy.h1}</h1>
            
            <div className="text-ink-600 mb-8">
              <p><strong>${lang.privacy.lastUpdated}:</strong> 19 de agosto de 2025</p>
              <p>
                Esta Política de Privacidad explica cómo CareAI ("CareAI," "nosotros," "nos," o "nuestro") recopila, usa y comparte información cuando utilizas nuestros sitios web, aplicaciones y servicios relacionados (colectivamente, los "Servicios").
              </p>
            </div>

            <div className="bg-ink-50 border-l-4 border-brand-blue p-6 mb-8">
              <p className="text-ink-700 font-medium">
                <strong>${lang.privacy.summary}</strong> (no es un sustituto de la política completa): recopilamos información de cuenta, dispositivo y relacionada con la salud para proporcionar los Servicios, mantener a las personas seguras, mejorar la confiabilidad y cumplir con los requisitos legales. Tú controlas tus datos y puedes acceder, corregir, exportar o eliminarlos.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">1. ${lang.privacy.whoWeAre}</h2>
            <p><strong>Controlador de datos:</strong> CareAI Co.</p>
            <p><strong>Contacto:</strong> privacy@careai.com.</p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">2. ${lang.privacy.scope}</h2>
            <p>
              Esta política se aplica a los Servicios y a las personas que los utilizan (pacientes, cuidadores, familiares y clínicos). Si utilizas CareAI a través de un proveedor de atención médica, podemos procesar datos como <strong>procesador</strong> en nombre del proveedor sujeto a un Acuerdo de Asociado Comercial (BAA) o Acuerdo de Procesamiento de Datos (DPA).
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">3. ${lang.privacy.infoCollected}</h2>
            <p>Recopilamos información <strong>que proporcionas</strong>, información <strong>automáticamente</strong>, e información de <strong>integraciones</strong> que conectas.</p>

            <h3 className="text-xl font-bold text-ink-900 mt-8 mb-3">A) ${lang.privacy.youProvide}</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Perfil y contacto: nombre, correo electrónico, teléfono, idioma preferido, contactos de emergencia.</li>
              <li>Información de salud que ingresas o nos autorizas a acceder: síntomas, medicamentos, horarios, notas.</li>
              <li>Comunicaciones: mensajes, solicitudes de soporte, notas de voz grabadas (si habilitas la grabación).</li>
              <li>Detalles de pago y suscripción (procesados por proveedores de pago de terceros—CareAI no almacena números completos de tarjeta).</li>
            </ul>

            <h3 className="text-xl font-bold text-ink-900 mt-8 mb-3">B) ${lang.privacy.autoCollected}</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Datos del dispositivo y la aplicación: modelo/OS del dispositivo, versión de la aplicación, identificadores únicos, registros de fallas, métricas de rendimiento.</li>
              <li>Datos de uso: funciones utilizadas, botones clickeados, páginas vistas, marcas de tiempo de sesión, ubicación aproximada derivada de IP.</li>
            </ul>

            <h3 className="text-xl font-bold text-ink-900 mt-8 mb-3">C) ${lang.privacy.integrations}</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Dispositivos portátiles / plataformas de salud (por ejemplo, HealthKit / Google Fit, dispositivos Bluetooth).</li>
              <li>Sistemas EHR/EMR o software clínico (si tu organización conecta estos).</li>
            </ul>
            <p>Solo accedemos a datos que autorizas explícitamente.</p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">4. ${lang.privacy.whyWeUse}</h2>
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

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">5. ${lang.privacy.sharing}</h2>
            <p>Compartimos información solo con:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Tus contactos autorizados</strong> (familia, cuidadores, clínicos) cuando habilitas el compartir.</li>
              <li><strong>Proveedores de servicios</strong> (alojamiento en la nube, análisis, reportes de fallas, soporte). Solo pueden acceder a datos <strong>para</strong> realizar servicios para nosotros bajo contrato.</li>
              <li><strong>Servicios de emergencia</strong> si activas SOS o creemos razonablemente que hay riesgo inminente para la vida o seguridad.</li>
              <li><strong>Legal y cumplimiento</strong> cuando lo requiera la ley, para proteger derechos y seguridad, o en una transacción corporativa (con notificación y salvaguardas).</li>
            </ul>
            <p><strong>No vendemos</strong> tu información personal y no usamos datos sensibles de salud para publicidad dirigida.</p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">6. ${lang.privacy.international}</h2>
            <p>
              Podemos transferir datos a países con diferentes leyes de privacidad. Donde lo hacemos, usamos salvaguardas como <strong>Cláusulas Contractuales Estándar (SCCs)</strong> y, para transferencias a los EE.UU., participación en el <strong>Marco de Privacidad de Datos UE-EE.UU. (DPF)</strong> (si está certificado). Las copias de las salvaguardas relevantes están disponibles bajo solicitud.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">7. ${lang.privacy.security}</h2>
            <p>
              Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger tu información, incluyendo encriptación, controles de acceso, monitoreo de seguridad y capacitación del personal. Sin embargo, ningún sistema es completamente seguro.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">8. ${lang.privacy.yourRights}</h2>
            <p>Dependiendo de tu ubicación, puedes tener derechos como:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Acceso, corrección, portabilidad y eliminación de datos</li>
              <li>Restricción y objeción al procesamiento</li>
              <li>Retiro del consentimiento</li>
              <li>Presentación de quejas ante autoridades de protección de datos</li>
            </ul>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">9. ${lang.privacy.retention}</h2>
            <p>
              Retenemos tu información solo mientras sea necesaria para los propósitos descritos en esta política o según lo requiera la ley. Los datos se eliminan o anonimizan de forma segura cuando ya no son necesarios.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">10. ${lang.privacy.changes}</h2>
            <p>
              Podemos actualizar esta política ocasionalmente. Te notificaremos cambios significativos por correo electrónico o a través de la aplicación. Tu uso continuado de los Servicios después de los cambios constituye aceptación de la política actualizada.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">11. ${lang.privacy.contact}</h2>
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
}`;
}

// Terms of Service template
function generateTermsPage(lang) {
  return `import SiteHeaderUnified from '../../../components/SiteHeaderUnified';
import SiteFooter from '../../../components/SiteFooter';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "${lang.terms.title}",
  description: "${lang.terms.description}",
};

export default function Terms${lang.code.toUpperCase()}() {
  return (
    <>
      <SiteHeaderUnified locale="${lang.code}" />
      <main>
        <div className="mx-auto max-w-4xl px-4 py-16">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-ink-900 mb-8">${lang.terms.h1}</h1>
            
            <div className="text-ink-600 mb-8">
              <p><strong>${lang.terms.lastUpdated}:</strong> 19 de agosto de 2025</p>
              <p>
                Estos Términos de Servicio ("Términos") rigen tu uso de los servicios de CareAI, incluyendo nuestro sitio web, aplicaciones móviles y cualquier otro servicio relacionado (colectivamente, los "Servicios").
              </p>
            </div>

            <div className="bg-ink-50 border-l-4 border-brand-blue p-6 mb-8">
              <p className="text-ink-700 font-medium">
                <strong>${lang.terms.summary}:</strong> Al usar nuestros Servicios, aceptas estos términos. Los Servicios no son un sustituto de la atención médica profesional. En caso de emergencia, contacta servicios de emergencia inmediatamente.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">1. ${lang.terms.acceptance}</h2>
            <p>
              Al acceder o usar nuestros Servicios, aceptas estar sujeto a estos Términos. Si no estás de acuerdo con alguna parte de estos términos, no debes usar nuestros Servicios.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">2. ${lang.terms.description}</h2>
            <p>
              CareAI proporciona herramientas de inteligencia artificial para ayudar con recordatorios de medicamentos, seguimiento de salud, comunicación con cuidadores y asistencia general de bienestar. Nuestros Servicios están diseñados para complementar, no reemplazar, la atención médica profesional.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">3. ${lang.terms.acceptableUse}</h2>
            <p>Te comprometes a usar nuestros Servicios solo para fines legales y apropiados. No debes:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Usar los Servicios para actividades ilegales o fraudulentas</li>
              <li>Intentar acceder no autorizado a nuestros sistemas</li>
              <li>Interferir con el funcionamiento de los Servicios</li>
              <li>Compartir información falsa o engañosa</li>
              <li>Violar derechos de propiedad intelectual</li>
            </ul>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">4. ${lang.terms.account}</h2>
            <p>
              Para usar ciertos Servicios, debes crear una cuenta. Eres responsable de mantener la confidencialidad de tu información de inicio de sesión y de todas las actividades que ocurran bajo tu cuenta.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">5. ${lang.terms.privacy}</h2>
            <p>
              Tu privacidad es importante para nosotros. Nuestra Política de Privacidad describe cómo recopilamos, usamos y protegemos tu información. Al usar nuestros Servicios, aceptas las prácticas descritas en nuestra Política de Privacidad.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">6. ${lang.terms.liability}</h2>
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

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">7. ${lang.terms.medicalDisclaimer}</h2>
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

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">8. ${lang.terms.intellectualProperty}</h2>
            <p>
              Todos los derechos, títulos e intereses en nuestros Servicios, incluyendo software, contenido y marcas comerciales, son propiedad de CareAI o nuestros licenciantes. No tienes derecho a usar, copiar, modificar o distribuir nuestro contenido sin permiso.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">9. ${lang.terms.termination}</h2>
            <p>
              Podemos terminar o suspender tu acceso a nuestros Servicios en cualquier momento, con o sin causa, con o sin previo aviso. También puedes terminar tu cuenta en cualquier momento contactándonos.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">10. ${lang.terms.modifications}</h2>
            <p>
              Nos reservamos el derecho de modificar estos Términos en cualquier momento. Te notificaremos cambios significativos por correo electrónico o a través de nuestros Servicios. Tu uso continuado después de los cambios constituye aceptación de los términos modificados.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">11. ${lang.terms.applicableLaw}</h2>
            <p>
              Estos Términos se rigen por las leyes del estado de [Estado], sin considerar conflictos de leyes. Cualquier disputa será resuelta en los tribunales del condado de [Condado], [Estado].
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">12. ${lang.terms.contact}</h2>
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
}`;
}

// Create directories and files
function createLegalPages() {
  console.log('🌍 Creating legal pages for all languages...\n');

  languages.forEach(lang => {
    const langDir = path.join(__dirname, '..', 'app', lang.code, 'legal');
    
    // Create legal directory if it doesn't exist
    if (!fs.existsSync(langDir)) {
      fs.mkdirSync(langDir, { recursive: true });
    }

    // Create privacy subdirectory
    const privacyDir = path.join(langDir, 'privacy');
    if (!fs.existsSync(privacyDir)) {
      fs.mkdirSync(privacyDir, { recursive: true });
    }

    // Create terms subdirectory
    const termsDir = path.join(langDir, 'terms');
    if (!fs.existsSync(termsDir)) {
      fs.mkdirSync(termsDir, { recursive: true });
    }

    // Generate and write privacy page
    const privacyContent = generatePrivacyPage(lang);
    const privacyPath = path.join(privacyDir, 'page.tsx');
    fs.writeFileSync(privacyPath, privacyContent);
    console.log(`✅ Created: ${lang.code}/legal/privacy/page.tsx`);

    // Generate and write terms page
    const termsContent = generateTermsPage(lang);
    const termsPath = path.join(termsDir, 'page.tsx');
    fs.writeFileSync(termsPath, termsContent);
    console.log(`✅ Created: ${lang.code}/legal/terms/page.tsx`);
  });

  console.log('\n🎉 All legal pages created successfully!');
  console.log('\n📝 Note: These are template pages with Spanish content.');
  console.log('   You may want to translate the actual content to each language.');
}

// Run the script
if (require.main === module) {
  createLegalPages();
}

module.exports = { createLegalPages };
