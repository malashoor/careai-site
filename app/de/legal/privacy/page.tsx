import SiteHeaderUnified from '../../../components/SiteHeaderUnified';
import SiteFooter from '../../../components/SiteFooter';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzrichtlinie — CareAI",
  description: "CareAI Datenschutzrichtlinie - Erfahren Sie, wie wir Ihre Informationen sammeln, verwenden und schützen.",
};

export default function PrivacyDe() {
  return (
    <>
      <SiteHeaderUnified locale="de" />
      <main>
        <div className="mx-auto max-w-4xl px-4 py-16">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-ink-900 mb-8">CareAI Datenschutzrichtlinie</h1>
            
            <div className="text-ink-600 mb-8">
              <p><strong>Zuletzt aktualisiert:</strong> 19. August 2025</p>
              <p>
                Diese Datenschutzrichtlinie erklärt, wie CareAI ("CareAI," "wir," "uns," oder "unser") Informationen sammelt, verwendet und teilt, wenn Sie unsere Websites, Anwendungen und verwandte Dienste (gemeinsam die "Dienste") nutzen.
              </p>
            </div>

            <div className="bg-ink-50 border-l-4 border-brand-blue p-6 mb-8">
              <p className="text-ink-700 font-medium">
                <strong>Zusammenfassung in einfacher Sprache</strong> (kein Ersatz für die vollständige Richtlinie): Wir sammeln Kontodaten, Gerätedaten und gesundheitsbezogene Informationen, um die Dienste bereitzustellen, Menschen sicher zu halten, die Zuverlässigkeit zu verbessern und rechtliche Anforderungen zu erfüllen. Sie kontrollieren Ihre Daten und können darauf zugreifen, sie korrigieren, exportieren oder löschen.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">1. Wer wir sind</h2>
            <p><strong>Datenverantwortlicher:</strong> CareAI Co.</p>
            <p><strong>Kontakt:</strong> privacy@careai.com.</p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">2. Umfang</h2>
            <p>
              Diese Richtlinie gilt für die Dienste und für Personen, die sie nutzen (Patienten, Pflegekräfte, Familienmitglieder und Kliniker). Wenn Sie CareAI über einen Gesundheitsdienstleister nutzen, können wir Daten als <strong>Auftragsverarbeiter</strong> im Namen des Anbieters verarbeiten, vorbehaltlich einer Business Associate Agreement (BAA) oder Data Processing Agreement (DPA).
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">3. Informationen, die wir sammeln</h2>
            <p>Wir sammeln Informationen, <strong>die Sie bereitstellen</strong>, Informationen, die <strong>automatisch</strong> gesammelt werden, und Informationen von <strong>Integrationen</strong>, die Sie verbinden.</p>

            <h3 className="text-xl font-bold text-ink-900 mt-8 mb-3">A) Was Sie bereitstellen</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Profil und Kontakt: Name, E-Mail, Telefon, bevorzugte Sprache, Notfallkontakte.</li>
              <li>Gesundheitsinformationen, die Sie eingeben oder uns den Zugriff erlauben: Symptome, Medikamente, Zeitpläne, Notizen.</li>
              <li>Kommunikation: Nachrichten, Support-Anfragen, aufgezeichnete Sprachnotizen (falls Sie die Aufzeichnung aktivieren).</li>
              <li>Zahlungs- und Abonnementdetails (verarbeitet von Drittanbietern—CareAI speichert keine vollständigen Kartennummern).</li>
            </ul>

            <h3 className="text-xl font-bold text-ink-900 mt-8 mb-3">B) Automatisch gesammelt</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Geräte- und App-Daten: Gerätemodell/OS, App-Version, eindeutige Kennungen, Absturzprotokolle, Leistungsmetriken.</li>
              <li>Nutzungsdaten: verwendete Funktionen, geklickte Schaltflächen, angesehene Seiten, Sitzungszeitstempel, ungefähre Standortbestimmung abgeleitet von IP.</li>
            </ul>

            <h3 className="text-xl font-bold text-ink-900 mt-8 mb-3">C) Von Integrationen, die Sie verbinden</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Wearables / Gesundheitsplattformen (z.B. HealthKit / Google Fit, Bluetooth-Geräte).</li>
              <li>EHR/EMR-Systeme oder Kliniksoftware (falls Ihre Organisation diese verbindet).</li>
            </ul>
            <p>Wir greifen nur auf Daten zu, die Sie ausdrücklich autorisieren.</p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">4. Warum wir Ihre Informationen verwenden (Zwecke und rechtliche Grundlagen)</h2>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Bereitstellung und Sicherung der Dienste</strong> (Vertragserfüllung; berechtigte Interessen).</li>
              <li><strong>Pflegefunktionen</strong> wie Medikamentenerinnerungen, Adhärenzverfolgung, Sturzalarme, Sprachassistent und Teilen mit genehmigten Pflegekräften (Einwilligung; lebenswichtige Interessen; erhebliches öffentliches Interesse, wo erlaubt).</li>
              <li><strong>Forschung und Produktverbesserung</strong> wie Analysen, Debugging, A/B-Tests (berechtigte Interessen; Einwilligung, wo erforderlich).</li>
              <li><strong>Kommunikation</strong> wie Servicenachrichten, Sicherheitswarnungen und—mit Ihrer Opt-in—Marketing (Einwilligung; berechtigte Interessen).</li>
              <li><strong>Rechtliche Compliance</strong> einschließlich der Beantwortung rechtmäßiger Anfragen und der Durchsetzung von Bedingungen (rechtliche Verpflichtung; berechtigte Interessen).</li>
            </ul>

            <div className="bg-ink-50 border-l-4 border-brand-blue p-6 mb-8">
              <p className="text-ink-700">
                <strong>Besondere Kategorie / Gesundheitsdaten (DSGVO):</strong> Wir verarbeiten Gesundheitsdaten nur mit Ihrer <strong>ausdrücklichen Einwilligung</strong>, zum Schutz lebenswichtiger Interessen oder wie unter einem Vertrag mit Ihrem Gesundheitsdienstleister erlaubt, vorbehaltlich angemessener Schutzmaßnahmen (Art. 9 DSGVO). Sie können die Einwilligung jederzeit widerrufen.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">5. Teilen Ihrer Informationen</h2>
            <p>Wir teilen Informationen nur mit:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Ihren autorisierten Kontakten</strong> (Familie, Pflegekräfte, Kliniker), wenn Sie das Teilen aktivieren.</li>
              <li><strong>Dienstleistern</strong> (Cloud-Hosting, Analysen, Absturzberichte, Support). Sie können nur auf Daten zugreifen, <strong>um</strong> Dienstleistungen für uns unter Vertrag zu erbringen.</li>
              <li><strong>Notdiensten</strong>, wenn Sie SOS auslösen oder wir vernünftigerweise glauben, dass eine unmittelbare Gefahr für Leben oder Sicherheit besteht.</li>
              <li><strong>Recht und Compliance</strong>, wenn gesetzlich erforderlich, zum Schutz von Rechten und Sicherheit oder bei einer Unternehmensübertragung (mit Benachrichtigung und Schutzmaßnahmen).</li>
            </ul>
            <p>Wir <strong>verkaufen nicht</strong> Ihre persönlichen Informationen und verwenden keine sensiblen Gesundheitsdaten für zielgerichtete Werbung.</p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">6. Internationale Übertragungen</h2>
            <p>
              Wir können Daten in Länder mit unterschiedlichen Datenschutzgesetzen übertragen. Wo wir das tun, verwenden wir Schutzmaßnahmen wie <strong>Standardvertragsklauseln (SCCs)</strong> und für Übertragungen in die USA die Teilnahme am <strong>EU-US-Datenschutzrahmen (DPF)</strong> (falls zertifiziert). Kopien der relevanten Schutzmaßnahmen sind auf Anfrage verfügbar.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">7. Sicherheit</h2>
            <p>
              Wir implementieren angemessene technische und organisatorische Sicherheitsmaßnahmen zum Schutz Ihrer Informationen, einschließlich Verschlüsselung, Zugangskontrollen, Sicherheitsüberwachung und Personalausbildung. Kein System ist jedoch vollständig sicher.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">8. Ihre Rechte</h2>
            <p>Je nach Ihrem Standort können Sie Rechte haben wie:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Zugang, Berichtigung, Übertragbarkeit und Löschung von Daten</li>
              <li>Einschränkung und Widerspruch gegen die Verarbeitung</li>
              <li>Widerruf der Einwilligung</li>
              <li>Einreichung von Beschwerden bei Datenschutzbehörden</li>
            </ul>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">9. Datenaufbewahrung</h2>
            <p>
              Wir behalten Ihre Informationen nur so lange, wie es für die in dieser Richtlinie beschriebenen Zwecke erforderlich ist oder wie es das Gesetz vorschreibt. Daten werden sicher gelöscht oder anonymisiert, wenn sie nicht mehr benötigt werden.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">10. Änderungen dieser Richtlinie</h2>
            <p>
              Wir können diese Richtlinie gelegentlich aktualisieren. Wir werden Sie über wesentliche Änderungen per E-Mail oder über die Anwendung benachrichtigen. Ihre fortgesetzte Nutzung der Dienste nach den Änderungen stellt die Annahme der aktualisierten Richtlinie dar.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">11. Kontakt</h2>
            <p>
              Wenn Sie Fragen zu dieser Richtlinie haben oder Ihre Rechte ausüben möchten, kontaktieren Sie uns unter:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>E-Mail:</strong> privacy@careai.com</li>
              <li><strong>Adresse:</strong> CareAI Co., [Adresse]</li>
            </ul>
          </div>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
