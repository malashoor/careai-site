import { type Locale } from "@/lib/i18n";
import PartnerHero from "@/components/PartnerHero";
import ValueProps from "@/components/ValueProps";
import WorkflowDiagram from "@/components/WorkflowDiagram";
import CaseStudy from "@/components/CaseStudy";
import PartnerForm from "@/components/PartnerForm";

export default function CharitiesPage({ params }: { params: { locale: Locale } }) {
  return (
    <>
      <PartnerHero locale={params.locale} type="charities" />
      <ValueProps locale={params.locale} type="charities" />
      <WorkflowDiagram locale={params.locale} type="charities" />
      <CaseStudy locale={params.locale} />
      <PartnerForm locale={params.locale} type="charities" />
    </>
  );
}
