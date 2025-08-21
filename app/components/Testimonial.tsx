export default function Testimonial({ locale = 'en' as 'en' | 'ar' | 'es' | 'fr' | 'de' | 'zh' | 'ja' | 'ko' | 'hi' | 'pt' }) {
  const t = {
    en: {
      quote: "CareAI helped our family coordinate daily care without the chaos. Tasks, reminders, and health insights in one place.",
      author: "— A caregiver family"
    },
    ar: {
      quote: "ساعدت كيرAI عائلتنا في تنسيق الرعاية اليومية دون فوضى. المهام والتذكيرات ورؤى الصحة في مكان واحد.",
      author: "— عائلة مقدم رعاية"
    },
    es: {
      quote: "CareAI ayudó a nuestra familia a coordinar el cuidado diario sin caos. Tareas, recordatorios e información de salud en un solo lugar.",
      author: "— Una familia cuidadora"
    },
    fr: {
      quote: "CareAI a aidé notre famille à coordonner les soins quotidiens sans chaos. Tâches, rappels et informations de santé en un seul endroit.",
      author: "— Une famille soignante"
    },
    de: {
      quote: "CareAI hat unserer Familie geholfen, die tägliche Pflege ohne Chaos zu koordinieren. Aufgaben, Erinnerungen und Gesundheitserkenntnisse an einem Ort.",
      author: "— Eine Pflegefamilie"
    },
    zh: {
      quote: "CareAI帮助我们的家庭协调日常护理，避免混乱。任务、提醒和健康洞察都在一个地方。",
      author: "— 一个护理家庭"
    },
    ja: {
      quote: "CareAIは私たちの家族が日常のケアを混乱なく調整するのを助けました。タスク、リマインダー、健康の洞察が一箇所にあります。",
      author: "— 介護者家族"
    },
    ko: {
      quote: "CareAI는 우리 가족이 혼란 없이 일상적인 돌봄을 조정하는 데 도움을 주었습니다. 작업, 알림 및 건강 통찰력이 한 곳에 있습니다.",
      author: "— 돌봄 가족"
    },
    hi: {
      quote: "CareAI ने हमारे परिवार को अराजकता के बिना दैनिक देखभाल को समन्वयित करने में मदद की। कार्य, अनुस्मारक और स्वास्थ्य अंतर्दृष्टि एक जगह पर।",
      author: "— एक देखभाल करने वाला परिवार"
    },
    pt: {
      quote: "CareAI ajudou nossa família a coordenar o cuidado diário sem caos. Tarefas, lembretes e informações de saúde em um só lugar.",
      author: "— Uma família cuidadora"
    }
  }[locale] || t.en;

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8 md:p-12 ring-1 ring-black/5">
          <blockquote className="text-xl md:text-2xl leading-relaxed">
            "{t.quote}"
          </blockquote>
          <div className="mt-6 text-sm text-gray-600">
            {t.author}
          </div>
        </div>
      </div>
    </section>
  );
}
