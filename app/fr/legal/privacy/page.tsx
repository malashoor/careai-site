import SiteHeaderUnified from '../../../components/SiteHeaderUnified';
import SiteFooter from '../../../components/SiteFooter';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité — CareAI",
  description: "Politique de Confidentialité de CareAI - Apprenez comment nous collectons, utilisons et protégeons vos informations.",
};

export default function PrivacyFr() {
  return (
    <>
      <SiteHeaderUnified locale="fr" />
      <main>
        <div className="mx-auto max-w-4xl px-4 py-16">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-ink-900 mb-8">Politique de Confidentialité de CareAI</h1>
            
            <div className="text-ink-600 mb-8">
              <p><strong>Dernière mise à jour :</strong> 19 août 2025</p>
              <p>
                Cette Politique de Confidentialité explique comment CareAI ("CareAI," "nous," "nos," ou "notre") collecte, utilise et partage les informations lorsque vous utilisez nos sites web, applications et services connexes (collectivement, les "Services").
              </p>
            </div>

            <div className="bg-ink-50 border-l-4 border-brand-blue p-6 mb-8">
              <p className="text-ink-700 font-medium">
                <strong>Résumé en langage simple</strong> (pas un substitut à la politique complète) : nous collectons des informations de compte, d'appareil et liées à la santé pour fournir les Services, maintenir les personnes en sécurité, améliorer la fiabilité et respecter les exigences légales. Vous contrôlez vos données et pouvez y accéder, les corriger, les exporter ou les supprimer.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">1. Qui nous sommes</h2>
            <p><strong>Responsable du traitement :</strong> CareAI Co.</p>
            <p><strong>Contact :</strong> privacy@careai.com.</p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">2. Portée</h2>
            <p>
              Cette politique s'applique aux Services et aux personnes qui les utilisent (patients, soignants, membres de la famille et cliniciens). Si vous utilisez CareAI par l'intermédiaire d'un fournisseur de soins de santé, nous pouvons traiter les données en tant que <strong>sous-traitant</strong> au nom du fournisseur sous réserve d'un Accord d'Associé Commercial (BAA) ou d'un Accord de Traitement des Données (DPA).
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">3. Informations que nous collectons</h2>
            <p>Nous collectons les informations <strong>que vous fournissez</strong>, les informations <strong>automatiquement</strong>, et les informations des <strong>intégrations</strong> que vous connectez.</p>

            <h3 className="text-xl font-bold text-ink-900 mt-8 mb-3">A) Ce que vous fournissez</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Profil et contact : nom, email, téléphone, langue préférée, contacts d'urgence.</li>
              <li>Informations de santé que vous saisissez ou nous autorisez à accéder : symptômes, médicaments, horaires, notes.</li>
              <li>Communications : messages, demandes de support, notes vocales enregistrées (si vous activez l'enregistrement).</li>
              <li>Détails de paiement et d'abonnement (traités par des fournisseurs de paiement tiers—CareAI ne stocke pas les numéros de carte complets).</li>
            </ul>

            <h3 className="text-xl font-bold text-ink-900 mt-8 mb-3">B) Collecté automatiquement</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Données d'appareil et d'application : modèle/OS d'appareil, version d'application, identifiants uniques, journaux de plantage, métriques de performance.</li>
              <li>Données d'utilisation : fonctionnalités utilisées, boutons cliqués, pages consultées, horodatages de session, localisation approximative dérivée de l'IP.</li>
            </ul>

            <h3 className="text-xl font-bold text-ink-900 mt-8 mb-3">C) Des intégrations que vous connectez</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Objets connectés / plateformes de santé (par exemple, HealthKit / Google Fit, appareils Bluetooth).</li>
              <li>Systèmes EHR/EMR ou logiciels de clinique (si votre organisation connecte ceux-ci).</li>
            </ul>
            <p>Nous n'accédons qu'aux données que vous autorisez explicitement.</p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">4. Pourquoi nous utilisons vos informations (finalités et bases légales)</h2>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Fournir et sécuriser les Services</strong> (exécuter le contrat ; intérêts légitimes).</li>
              <li><strong>Fonctionnalités de soins</strong> telles que rappels de médicaments, suivi de l'observance, alertes de chute, assistant vocal et partage avec des soignants approuvés (consentement ; intérêts vitaux ; intérêt public substantiel lorsque permis).</li>
              <li><strong>Recherche et amélioration du produit</strong> telles que analyses, débogage, tests A/B (intérêts légitimes ; consentement lorsque requis).</li>
              <li><strong>Communications</strong> comme messages de service, alertes de sécurité et—avec votre opt-in—marketing (consentement ; intérêts légitimes).</li>
              <li><strong>Conformité légale</strong> incluant répondre aux demandes légales et faire respecter les termes (obligation légale ; intérêts légitimes).</li>
            </ul>

            <div className="bg-ink-50 border-l-4 border-brand-blue p-6 mb-8">
              <p className="text-ink-700">
                <strong>Catégorie spéciale / données de santé (RGPD) :</strong> Nous traitons les données de santé uniquement avec votre <strong>consentement explicite</strong>, pour protéger les intérêts vitaux, ou comme permis sous un contrat avec votre fournisseur de soins de santé sous réserve de garanties appropriées (Art. 9 RGPD). Vous pouvez retirer le consentement à tout moment.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">5. Partage de vos informations</h2>
            <p>Nous partageons les informations uniquement avec :</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Vos contacts autorisés</strong> (famille, soignants, cliniciens) lorsque vous activez le partage.</li>
              <li><strong>Fournisseurs de services</strong> (hébergement cloud, analyses, rapports de plantage, support). Ils ne peuvent accéder aux données <strong>que</strong> pour effectuer des services pour nous sous contrat.</li>
              <li><strong>Services d'urgence</strong> si vous déclenchez SOS ou si nous croyons raisonnablement qu'il y a un risque imminent pour la vie ou la sécurité.</li>
              <li><strong>Légal et conformité</strong> lorsque requis par la loi, pour protéger les droits et la sécurité, ou dans une transaction d'entreprise (avec notification et garanties).</li>
            </ul>
            <p>Nous <strong>ne vendons pas</strong> vos informations personnelles et nous n'utilisons pas les données de santé sensibles pour la publicité ciblée.</p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">6. Transferts internationaux</h2>
            <p>
              Nous pouvons transférer des données vers des pays avec des lois de confidentialité différentes. Lorsque nous le faisons, nous utilisons des garanties telles que les <strong>Clauses Contractuelles Types (CCT)</strong> et, pour les transferts vers les États-Unis, la participation au <strong>Cadre de Confidentialité des Données UE-États-Unis (DPF)</strong> (si certifié). Les copies des garanties pertinentes sont disponibles sur demande.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">7. Sécurité</h2>
            <p>
              Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos informations, incluant le chiffrement, les contrôles d'accès, la surveillance de sécurité et la formation du personnel. Cependant, aucun système n'est complètement sécurisé.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">8. Vos droits</h2>
            <p>Selon votre emplacement, vous pouvez avoir des droits comme :</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Accès, correction, portabilité et suppression des données</li>
              <li>Restriction et objection au traitement</li>
              <li>Retrait du consentement</li>
              <li>Présentation de plaintes auprès des autorités de protection des données</li>
            </ul>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">9. Rétention des données</h2>
            <p>
              Nous conservons vos informations uniquement aussi longtemps que nécessaire pour les finalités décrites dans cette politique ou selon ce que requiert la loi. Les données sont supprimées ou anonymisées de manière sécurisée lorsqu'elles ne sont plus nécessaires.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">10. Modifications de cette politique</h2>
            <p>
              Nous pouvons mettre à jour cette politique occasionnellement. Nous vous notifierons les changements significatifs par email ou via l'application. Votre utilisation continue des Services après les changements constitue l'acceptation de la politique mise à jour.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">11. Contact</h2>
            <p>
              Si vous avez des questions sur cette politique ou souhaitez exercer vos droits, contactez-nous à :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Email :</strong> privacy@careai.com</li>
              <li><strong>Adresse :</strong> CareAI Co., [Adresse]</li>
            </ul>
          </div>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
