"use client";

import Link from "next/link";
import { dictionary } from "@/lib/dictionary";

interface AboutPageProps {
  params: {
    locale: string;
  };
}

export default function AboutPage({ params }: AboutPageProps) {
  const { locale } = params;
  const i = dictionary[locale as keyof typeof dictionary];
  const isAR = locale === "ar";

  return (
    <main dir={isAR ? "rtl" : "ltr"} className="bg-gradient-subtle">
      <div className="pt-16 md:pt-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          {isAR ? "نبذة عن كيرAI" : "About CareAI"}
        </h1>
        <p className="mt-4 text-center text-muted-foreground max-w-3xl mx-auto">
          {isAR 
            ? "نحن شركة ناشئة في مرحلة مبكرة نبني حلول ذكاء اصطناعي آمنة ومفيدة لكبار السن ومقدمي الرعاية."
            : "We are an early-stage startup building safe and useful AI solutions for seniors and caregivers."
          }
        </p>
      </div>

      {/* Mission */}
      <div className="mt-16 md:mt-20 grid md:grid-cols-2 gap-10">
        <section>
          <h2 className="text-2xl font-semibold">
            {isAR ? "رسالتنا" : "Our Mission"}
          </h2>
          <p className="mt-3 leading-relaxed">
            {isAR 
              ? "نؤمن بأن لكل فريق رعاية الحق في أدوات بسيطة وميسورة التكلفة تحسّن السلامة وجودة الحياة. تجمع CareAI بين المحادثة الذكية وتدفقات عمل مقدمي الرعاية لتقليل التعقيد وزيادة الالتزام — دون ادعاء استبدال الحكم السريري."
              : "We believe every care team deserves simple, affordable tools that improve safety and quality of life. CareAI combines intelligent conversation with caregiver workflows to reduce complexity and increase adherence — without claiming to replace clinical judgment."
            }
          </p>
        </section>

        {/* Partners invite */}
        <section className="rounded-2xl border p-6 bg-muted/30">
          <h2 className="text-2xl font-semibold">
            {isAR ? "شراكات استراتيجية" : "Strategic Partnerships"}
          </h2>
          <p className="mt-3 leading-relaxed">
            {isAR 
              ? "نبحث عن شركاء لبرامج تجريبية: أطباء، دور رعاية، شركات تأمين وأنظمة صحية. إذا كنت مهتماً بتطوير المزايا أو قياس النتائج معنا، يسعدنا التواصل."
              : "We're looking for partners for pilot programs: doctors, care homes, insurance companies, and health systems. If you're interested in developing features or measuring outcomes with us, we'd love to connect."
            }
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href={`/${locale}/partners`} className="btn btn-primary rounded-2xl px-5 py-2">
              {isAR ? "المنظمات" : "Organizations"}
            </Link>
            <Link href={`/${locale}/contact`} className="btn rounded-2xl px-5 py-2 border">
              {isAR ? "اتصل بنا" : "Contact Us"}
            </Link>
          </div>
        </section>
      </div>

      {/* Vision */}
      <div className="mt-16 md:mt-20">
        <div className="rounded-2xl border p-6 md:p-8 bg-background">
          <h2 className="text-2xl font-semibold">
            {isAR ? "رؤيتنا" : "Our Vision"}
          </h2>
          <p className="mt-3 text-muted-foreground">
            {isAR 
              ? "نحن نرى مستقبلاً حيث يمتلك كل مسن معيار إلكتروني موثوق يساعده على العيش بشكل مستقل أطول، حيث تشعر العائلات بسلامة معرفتهن بأحبائهن، وحيث يمكن لشركاء الرعاية الصحية توسيع نطاقهم أثناء التركيز على الجانب البشري للرعاية."
              : "We see a future where every senior has a trusted digital companion helping them live independently longer, where families feel secure knowing their loved ones are safe, and where healthcare partners can scale while focusing on the human side of care."
            }
          </p>
        </div>
      </div>
    </main>
  );
}
