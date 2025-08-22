"use client";

import Link from 'next/link';
import { useLocale } from '../../lib/hooks/useLocale';

export default function SiteFooter() {
  const locale = useLocale();
  
  // Footer text dictionary
  const footerText = {
    en: {
      tagline: "AI‑powered tools for families and caregivers.",
      product: "Product",
      features: "Features",
      company: "Company",
      about: "About",
      contact: "Contact",
      privacy: "Privacy",
      terms: "Terms",
      rights: "All rights reserved."
    },
    ar: {
      tagline: "أدوات مدعومة بالذكاء الاصطناعي للأسر ومقدمي الرعاية.",
      product: "المنتج",
      features: "المميزات",
      company: "الشركة",
      about: "حول",
      contact: "اتصل بنا",
      privacy: "الخصوصية",
      terms: "الشروط",
      rights: "جميع الحقوق محفوظة."
    },
    es: {
      tagline: "Herramientas impulsadas por IA para familias y cuidadores.",
      product: "Producto",
      features: "Características",
      company: "Empresa",
      about: "Acerca de",
      contact: "Contacto",
      privacy: "Privacidad",
      terms: "Términos",
      rights: "Todos los derechos reservados."
    },
    fr: {
      tagline: "Outils alimentés par l'IA pour les familles et les soignants.",
      product: "Produit",
      features: "Fonctionnalités",
      company: "Entreprise",
      about: "À propos",
      contact: "Contact",
      privacy: "Confidentialité",
      terms: "Conditions",
      rights: "Tous droits réservés."
    },
    de: {
      tagline: "KI-gestützte Tools für Familien und Pflegekräfte.",
      product: "Produkt",
      features: "Funktionen",
      company: "Unternehmen",
      about: "Über uns",
      contact: "Kontakt",
      privacy: "Datenschutz",
      terms: "Bedingungen",
      rights: "Alle Rechte vorbehalten."
    },
    zh: {
      tagline: "为家庭和护理人员提供AI驱动的工具。",
      product: "产品",
      features: "功能",
      company: "公司",
      about: "关于",
      contact: "联系",
      privacy: "隐私",
      terms: "条款",
      rights: "版权所有。"
    },
    ja: {
      tagline: "家族と介護者向けのAI駆動ツール。",
      product: "製品",
      features: "機能",
      company: "会社",
      about: "会社概要",
      contact: "お問い合わせ",
      privacy: "プライバシー",
      terms: "利用規約",
      rights: "全著作権所有。"
    },
    ko: {
      tagline: "가족과 간병인을 위한 AI 기반 도구.",
      product: "제품",
      features: "기능",
      company: "회사",
      about: "회사 소개",
      contact: "연락처",
      privacy: "개인정보처리방침",
      terms: "이용약관",
      rights: "모든 권리 보유."
    },
    hi: {
      tagline: "परिवारों और देखभाल करने वालों के लिए AI-संचालित उपकरण।",
      product: "उत्पाद",
      features: "सुविधाएं",
      company: "कंपनी",
      about: "हमारे बारे में",
      contact: "संपर्क",
      privacy: "गोपनीयता",
      terms: "शर्तें",
      rights: "सर्वाधिकार सुरक्षित।"
    },
    pt: {
      tagline: "Ferramentas alimentadas por IA para famílias e cuidadores.",
      product: "Produto",
      features: "Recursos",
      company: "Empresa",
      about: "Sobre",
      contact: "Contato",
      privacy: "Privacidade",
      terms: "Termos",
      rights: "Todos os direitos reservados."
    }
  };
  
  const t = footerText[locale] || footerText.en;
  
  // Generate localized legal links
  const legalLinks = {
    privacy: locale === 'en' ? '/legal/privacy' : `/${locale}/legal/privacy`,
    terms: locale === 'en' ? '/legal/terms' : `/${locale}/legal/terms`
  };

  return (
    <footer className="mt-16 border-t">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
                          <div className="space-y-2">
                    <div className="font-semibold">CareAI</div>
                    <p className="text-gray-600">{t.tagline}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="font-semibold">{t.product}</div>
                    <ul className="space-y-1">
                      <li><Link href="/#features" className="text-gray-600 hover:text-gray-900">{t.features}</Link></li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <div className="font-semibold">{t.company}</div>
                    <ul className="space-y-1">
                      <li><Link href={locale === 'en' ? '/about' : `/${locale}/about`} className="text-gray-600 hover:text-gray-900">{t.about}</Link></li>
                      <li><Link href={locale === 'en' ? '/contact' : `/${locale}/contact`} className="text-gray-600 hover:text-gray-900">{t.contact}</Link></li>
                      <li><Link href={legalLinks.privacy} className="text-gray-600 hover:text-gray-900">{t.privacy}</Link></li>
                      <li><Link href={legalLinks.terms} className="text-gray-600 hover:text-gray-900">{t.terms}</Link></li>
                    </ul>
                  </div>
      </div>
                        <div className="px-6 lg:px-8 pb-8 text-xs text-gray-500 text-center">
                    © {new Date().getFullYear()} CareAI. {t.rights}
                  </div>
    </footer>
  );
}
