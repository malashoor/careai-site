import Image from 'next/image';

type Item = {
  title: string;
  desc: string;
  image: string;
  fit?: 'cover' | 'contain';
};

const items: Item[] = [
  {
    title: 'Care Plans & Tasks',
    desc: 'Coordinate tasks, meds, and routines with real‑time updates for families and caregivers.',
    image: '/images/family_care.png',
    fit: 'cover',
  },
  {
    title: 'Predictive Insights',
    desc: 'AI surfaces trends and early warnings from daily notes and vitals history.',
    image: '/images/elderly_couple.png',
    fit: 'cover',
  },
  {
    title: 'AI Assistance',
    desc: 'Smart suggestions, reminders, and summaries that save time for caregivers.',
    image: '/images/AL_Assistance.png',
    fit: 'contain', // ← prevents head cropping
  },
];

export default function FeatureGrid({ locale = 'en' as 'en' | 'ar' | 'es' | 'fr' | 'de' | 'zh' | 'ja' | 'ko' | 'hi' | 'pt' }) {
  const t = {
    en: {
      heading: 'Key Features',
      sub: 'Comprehensive AI solutions that transform healthcare delivery.',
    },
    ar: {
      heading: 'المميزات الرئيسية',
      sub: 'حلول شاملة للذكاء الاصطناعي تُحوّل تقديم الرعاية الصحية.',
    },
    es: {
      heading: 'Características Principales',
      sub: 'Soluciones integrales de IA que transforman la prestación de atención médica.',
    },
    fr: {
      heading: 'Fonctionnalités Clés',
      sub: 'Des solutions d\'IA complètes qui transforment la prestation de soins de santé.',
    },
    de: {
      heading: 'Hauptfunktionen',
      sub: 'Umfassende KI-Lösungen, die die Gesundheitsversorgung transformieren.',
    },
    zh: {
      heading: '主要功能',
      sub: '全面的AI解决方案，改变医疗服务的提供方式。',
    },
    ja: {
      heading: '主要な機能',
      sub: '医療提供を変革する包括的なAIソリューション。',
    },
    ko: {
      heading: '주요 기능',
      sub: '의료 서비스 제공을 혁신하는 포괄적인 AI 솔루션.',
    },
    hi: {
      heading: 'मुख्य विशेषताएं',
      sub: 'व्यापक AI समाधान जो स्वास्थ्य सेवा वितरण को बदलते हैं।',
    },
    pt: {
      heading: 'Recursos Principais',
      sub: 'Soluções abrangentes de IA que transformam a prestação de cuidados de saúde.',
    },
  }[locale];

  // Localize items based on language
  const localizedItems = {
    en: items,
    ar: [
      { ...items[0], title: 'خطط الرعاية والمهام', desc: 'تنسيق المهام والأدوية والروتين مع تحديثات فورية للعائلات ومقدمي الرعاية.' },
      { ...items[1], title: 'الرؤى التنبؤية', desc: 'يستخلص الذكاء الاصطناعي الاتجاهات والتنبيهات المبكرة من الملاحظات اليومية وسجل المؤشرات الحيوية.' },
      { ...items[2], title: 'المساعد الذكي', desc: 'اقتراحات وتذكيرات وملخصات ذكية توفّر الوقت على مقدمي الرعاية.' },
    ],
    es: [
      { ...items[0], title: 'Planes de Cuidado y Tareas', desc: 'Coordina tareas, medicamentos y rutinas con actualizaciones en tiempo real para familias y cuidadores.' },
      { ...items[1], title: 'Perspectivas Predictivas', desc: 'La IA identifica tendencias y advertencias tempranas de notas diarias e historial de signos vitales.' },
      { ...items[2], title: 'Asistencia de IA', desc: 'Sugerencias inteligentes, recordatorios y resúmenes que ahorran tiempo a los cuidadores.' },
    ],
    fr: [
      { ...items[0], title: 'Plans de Soins et Tâches', desc: 'Coordonnez les tâches, médicaments et routines avec des mises à jour en temps réel pour les familles et soignants.' },
      { ...items[1], title: 'Aperçus Prédictifs', desc: 'L\'IA identifie les tendances et avertissements précoces des notes quotidiennes et de l\'historique des signes vitaux.' },
      { ...items[2], title: 'Assistance IA', desc: 'Suggestions intelligentes, rappels et résumés qui font gagner du temps aux soignants.' },
    ],
    de: [
      { ...items[0], title: 'Pflegepläne & Aufgaben', desc: 'Koordinieren Sie Aufgaben, Medikamente und Routinen mit Echtzeit-Updates für Familien und Pflegekräfte.' },
      { ...items[1], title: 'Prädiktive Einblicke', desc: 'KI identifiziert Trends und Frühwarnungen aus täglichen Notizen und Vitalwerte-Historie.' },
      { ...items[2], title: 'KI-Unterstützung', desc: 'Intelligente Vorschläge, Erinnerungen und Zusammenfassungen, die Pflegekräften Zeit sparen.' },
    ],
    zh: [
      { ...items[0], title: '护理计划和任务', desc: '协调任务、药物和日常活动，为家庭和护理人员提供实时更新。' },
      { ...items[1], title: '预测洞察', desc: 'AI从日常记录和生命体征历史中识别趋势和早期预警。' },
      { ...items[2], title: 'AI助手', desc: '智能建议、提醒和总结，为护理人员节省时间。' },
    ],
    ja: [
      { ...items[0], title: 'ケアプランとタスク', desc: '家族や介護者のためのリアルタイム更新でタスク、薬、ルーチンを調整します。' },
      { ...items[1], title: '予測的洞察', desc: 'AIが日々の記録とバイタル履歴からトレンドと早期警告を特定します。' },
      { ...items[2], title: 'AIアシスタント', desc: '介護者の時間を節約するスマートな提案、リマインダー、サマリー。' },
    ],
    ko: [
      { ...items[0], title: '케어 계획 및 작업', desc: '가족과 간병인을 위한 실시간 업데이트로 작업, 약물 및 루틴을 조정합니다.' },
      { ...items[1], title: '예측적 통찰', desc: 'AI가 일일 기록과 활력 징후 기록에서 트렌드와 조기 경고를 식별합니다.' },
      { ...items[2], title: 'AI 어시스턴트', desc: '간병인의 시간을 절약하는 스마트한 제안, 알림 및 요약.' },
    ],
    hi: [
      { ...items[0], title: 'देखभाल योजनाएं और कार्य', desc: 'परिवारों और देखभाल करने वालों के लिए वास्तविक समय अपडेट के साथ कार्य, दवाएं और दिनचर्या का समन्वय करें।' },
      { ...items[1], title: 'भविष्यवाणी अंतर्दृष्टि', desc: 'AI दैनिक नोट्स और महत्वपूर्ण संकेतों के इतिहास से प्रवृत्तियों और शीघ्र चेतावनियों की पहचान करता है।' },
      { ...items[2], title: 'AI सहायता', desc: 'स्मार्ट सुझाव, अनुस्मारक और सारांश जो देखभाल करने वालों का समय बचाते हैं।' },
    ],
    pt: [
      { ...items[0], title: 'Planos de Cuidado e Tarefas', desc: 'Coordene tarefas, medicamentos e rotinas com atualizações em tempo real para famílias e cuidadores.' },
      { ...items[1], title: 'Insights Preditivos', desc: 'A IA identifica tendências e alertas precoces de notas diárias e histórico de sinais vitais.' },
      { ...items[2], title: 'Assistência de IA', desc: 'Sugestões inteligentes, lembretes e resumos que economizam tempo para os cuidadores.' },
    ],
  };

  const localized = localizedItems[locale as keyof typeof localizedItems] || items;

  return (
    <section id="features" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{t.heading}</h2>
          <p className="mt-4 text-gray-600">{t.sub}</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {localized.map((it) => (
            <div key={it.title} className="group rounded-3xl border bg-white/70 backdrop-blur-sm p-6 shadow-sm hover:shadow-md transition">
              <div className={`aspect-[4/3] w-full overflow-hidden rounded-2xl ${it.fit === 'contain' ? 'bg-sky-50 p-3' : ''}`}>
                <Image
                  src={it.image}
                  alt={it.title}
                  width={640}
                  height={480}
                  sizes="(min-width:768px) 32vw, 92vw"
                  className={`h-full w-full ${it.fit === 'contain' ? 'object-contain' : 'object-cover'} group-hover:scale-[1.02] transition`}
                />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{it.title}</h3>
              <p className="mt-2 text-gray-600 leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
