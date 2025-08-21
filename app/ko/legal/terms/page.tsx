import SiteHeaderUnified from '../../../components/SiteHeaderUnified';
import SiteFooter from '../../../components/SiteFooter';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "서비스 약관 — CareAI",
  description: "CareAI 서비스 약관 - 우리의 사용 약관을 읽어보세요.",
};

export default function TermsKo() {
  return (
    <>
      <SiteHeaderUnified locale="ko" />
      <main>
        <div className="mx-auto max-w-4xl px-4 py-16">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-ink-900 mb-8">CareAI 서비스 약관</h1>
            
            <div className="text-ink-600 mb-8">
              <p><strong>최종 업데이트:</strong> 2025년 8월 19일</p>
              <p>
                이 서비스 약관("약관")은 CareAI 서비스의 사용을 규제하며, 당사의 웹사이트, 모바일 애플리케이션 및 기타 관련 서비스(총칭하여 "서비스")를 포함합니다.
              </p>
            </div>

            <div className="bg-ink-50 border-l-4 border-brand-blue p-6 mb-8">
              <p className="text-ink-700 font-medium">
                <strong>중요한 요약:</strong> 당사의 서비스를 사용함으로써 귀하는 이 약관에 동의합니다. 서비스는 전문 의료의 대체가 아닙니다. 비상 상황의 경우 즉시 비상 서비스에 연락하세요.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">1. 약관 수락</h2>
            <p>
              당사의 서비스에 접근하거나 사용함으로써, 귀하는 이 약관에 구속되는 것에 동의합니다. 이 약관의 일부에 동의하지 않는 경우, 당사의 서비스를 사용해서는 안 됩니다.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">2. 서비스 설명</h2>
            <p>
              CareAI는 약물 알림, 건강 추적, 간병인과의 의사소통 및 일반적인 웰빙 지원을 돕기 위한 인공지능 도구를 제공합니다. 당사의 서비스는 전문 의료를 대체하지 않고 보완하도록 설계되었습니다.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">3. 허용 가능한 사용</h2>
            <p>귀하는 당사의 서비스를 합법적이고 적절한 목적으로만 사용할 것을 약속합니다. 다음을 해서는 안 됩니다:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>불법적이거나 사기적인 활동을 위해 서비스 사용</li>
              <li>당사의 시스템에 무단 접근 시도</li>
              <li>서비스 작동 방해</li>
              <li>거짓이거나 오해의 소지가 있는 정보 공유</li>
              <li>지적 재산권 침해</li>
            </ul>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">4. 계정 및 등록</h2>
            <p>
              특정 서비스를 사용하려면 계정을 생성해야 합니다. 귀하는 로그인 정보의 기밀성을 유지하고 계정 하에서 발생하는 모든 활동에 대한 책임이 있습니다.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">5. 개인정보 및 데이터</h2>
            <p>
              귀하의 개인정보는 당사에게 중요합니다. 당사의 개인정보처리방침은 당사가 정보를 어떻게 수집, 사용 및 보호하는지 설명합니다. 당사의 서비스를 사용함으로써, 귀하는 당사의 개인정보처리방침에 설명된 관행에 동의합니다.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">6. 책임 제한</h2>
            <p>
              <strong>당사는 다음에 대해 책임지지 않습니다:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>당사의 서비스 정보를 기반으로 한 의료 결정</li>
              <li>서비스 지연 또는 중단</li>
              <li>데이터 또는 정보 손실</li>
              <li>간접적 또는 결과적 손해</li>
            </ul>
            <p>
              당사의 총 책임은 책임을 발생시킨 사건 이전 12개월 동안 당사의 서비스에 대해 귀하가 지불한 금액으로 제한됩니다.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">7. 의료 면책 조항</h2>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
              <p className="text-red-700 font-medium">
                <strong>중요:</strong> CareAI 서비스는 전문 의료의 대체가 아닙니다. 다음 사항에 대해서는 항상 자격 있는 의료 제공자와 상담하세요:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>의료 진단</li>
                <li>의료 치료</li>
                <li>약물 결정</li>
                <li>의료 비상 상황</li>
              </ul>
              <p className="mt-2">
                의료 비상 상황의 경우 즉시 지역 비상 서비스에 전화하세요.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">8. 지적 재산권</h2>
            <p>
              당사의 서비스에 대한 모든 권리, 소유권 및 이익, 소프트웨어, 콘텐츠 및 상표를 포함하여, CareAI 또는 당사의 라이센서의 소유입니다. 귀하는 허가 없이 당사의 콘텐츠를 사용, 복사, 수정 또는 배포할 권리가 없습니다.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">9. 종료</h2>
            <p>
              당사는 사전 통지 유무에 관계없이 언제든지 귀하의 서비스 접근을 종료하거나 일시 중단할 수 있습니다. 또한 언제든지 당사에 연락하여 계정을 종료할 수도 있습니다.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">10. 수정</h2>
            <p>
              당사는 언제든지 이 약관을 수정할 권리를 보유합니다. 중요한 변경사항에 대해서는 이메일이나 당사의 서비스를 통해 귀하에게 알려드립니다. 변경 후 지속적인 사용은 수정된 약관에 대한 수락을 구성합니다.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">11. 적용 법률</h2>
            <p>
              이 약관은 [주]의 법률에 의해 규제되며, 법률 충돌을 고려하지 않습니다. 모든 분쟁은 [주] [카운티]의 법원에서 해결됩니다.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">12. 연락처</h2>
            <p>
              이 약관에 대한 질문이 있으시면 다음으로 연락해 주세요:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>이메일:</strong> legal@careai.com</li>
              <li><strong>주소:</strong> CareAI Co., [주소]</li>
            </ul>
          </div>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
