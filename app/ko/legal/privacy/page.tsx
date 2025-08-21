import SiteHeaderUnified from '../../../components/SiteHeaderUnified';
import SiteFooter from '../../../components/SiteFooter';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침 — CareAI",
  description: "CareAI 개인정보처리방침 - 우리가 정보를 수집, 사용 및 보호하는 방법을 알아보세요.",
};

export default function PrivacyKo() {
  return (
    <>
      <SiteHeaderUnified locale="ko" />
      <main>
        <div className="mx-auto max-w-4xl px-4 py-16">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-ink-900 mb-8">CareAI 개인정보처리방침</h1>
            
            <div className="text-ink-600 mb-8">
              <p><strong>최종 업데이트:</strong> 2025년 8월 19일</p>
              <p>
                이 개인정보처리방침은 CareAI("CareAI", "우리", "당사")가 웹사이트, 애플리케이션 및 관련 서비스(총칭하여 "서비스")를 사용할 때 정보를 어떻게 수집, 사용 및 공유하는지 설명합니다.
              </p>
            </div>

            <div className="bg-ink-50 border-l-4 border-brand-blue p-6 mb-8">
              <p className="text-ink-700 font-medium">
                <strong>간단한 언어 요약</strong> (전체 정책의 대체가 아님): 서비스를 제공하고, 사람들을 안전하게 유지하며, 신뢰성을 향상시키고, 법적 요구사항을 충족하기 위해 계정, 기기 및 건강 관련 정보를 수집합니다. 귀하는 데이터를 제어하고 접근, 수정, 내보내기 또는 삭제할 수 있습니다.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">1. 우리는 누구인가</h2>
            <p><strong>데이터 관리자:</strong> CareAI Co.</p>
            <p><strong>연락처:</strong> privacy@careai.com.</p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">2. 적용 범위</h2>
            <p>
              이 정책은 서비스와 이를 사용하는 개인(환자, 간병인, 가족, 임상의)에 적용됩니다. 의료 제공자를 통해 CareAI를 사용하는 경우, 당사는 비즈니스 어소시에이트 계약(BAA) 또는 데이터 처리 계약(DPA)에 따라 제공자의 대리인으로서 <strong>처리자</strong>로 데이터를 처리할 수 있습니다.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">3. 수집하는 정보</h2>
            <p>당사는 <strong>귀하가 제공하는</strong> 정보, <strong>자동으로</strong> 수집되는 정보, 그리고 귀하가 연결하는 <strong>통합</strong>에서 오는 정보를 수집합니다.</p>

            <h3 className="text-xl font-bold text-ink-900 mt-8 mb-3">A) 귀하가 제공하는 것</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>프로필 및 연락처: 이름, 이메일, 전화번호, 선호 언어, 비상 연락처.</li>
              <li>귀하가 입력하거나 당사가 접근하도록 승인한 건강 정보: 증상, 약물, 일정, 메모.</li>
              <li>통신: 메시지, 지원 요청, 녹음된 음성 메모(녹음을 활성화한 경우).</li>
              <li>결제 및 구독 세부사항(제3자 결제 제공업체가 처리—CareAI는 전체 카드 번호를 저장하지 않음).</li>
            </ul>

            <h3 className="text-xl font-bold text-ink-900 mt-8 mb-3">B) 자동 수집</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>기기 및 앱 데이터: 기기 모델/OS, 앱 버전, 고유 식별자, 크래시 로그, 성능 지표.</li>
              <li>사용 데이터: 사용된 기능, 클릭된 버튼, 보기 페이지, 세션 타임스탬프, IP에서 파생된 대략적인 위치.</li>
            </ul>

            <h3 className="text-xl font-bold text-ink-900 mt-8 mb-3">C) 귀하가 연결하는 통합에서</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>웨어러블/건강 플랫폼(예: HealthKit/Google Fit, 블루투스 기기).</li>
              <li>EHR/EMR 시스템 또는 클리닉 소프트웨어(귀하의 조직이 이를 연결하는 경우).</li>
            </ul>
            <p>당사는 귀하가 명시적으로 승인한 데이터에만 접근합니다.</p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">4. 귀하의 정보를 사용하는 이유(목적 및 법적 근거)</h2>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>서비스 제공 및 보안</strong> (계약 이행; 정당한 이익).</li>
              <li><strong>케어 기능</strong> 약물 알림, 순응도 추적, 낙상 경고, 음성 어시스턴트 및 승인된 간병인과의 공유(동의; 중요한 이익; 허용되는 경우 실질적인 공공 이익).</li>
              <li><strong>연구 및 제품 개선</strong> 분석, 디버깅, A/B 테스트(정당한 이익; 필요한 경우 동의).</li>
              <li><strong>통신</strong> 서비스 메시지, 보안 경고 및—귀하의 옵트인으로—마케팅(동의; 정당한 이익).</li>
              <li><strong>법적 준수</strong> 법적 요청에 응답하고 조건을 시행하는 것을 포함(법적 의무; 정당한 이익).</li>
            </ul>

            <div className="bg-ink-50 border-l-4 border-brand-blue p-6 mb-8">
              <p className="text-ink-700">
                <strong>특별 카테고리/건강 데이터(GDPR):</strong> 당사는 귀하의 <strong>명시적 동의</strong>가 있는 경우, 중요한 이익을 보호하기 위해, 또는 적절한 보호 조치 하에서 의료 제공자와의 계약으로 허용되는 경우에만 건강 데이터를 처리합니다(GDPR 제9조). 귀하는 언제든지 동의를 철회할 수 있습니다.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">5. 귀하의 정보 공유</h2>
            <p>당사는 다음의 경우에만 정보를 공유합니다:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>귀하의 승인된 연락처</strong> (가족, 간병인, 임상의) 공유를 활성화한 경우.</li>
              <li><strong>서비스 제공업체</strong> (클라우드 호스팅, 분석, 크래시 보고서, 지원). 그들은 계약에 따라 당사를 위해 서비스를 수행하기 위해 <strong>만</strong> 데이터에 접근할 수 있습니다.</li>
              <li><strong>비상 서비스</strong> 귀하가 SOS를 트리거하거나 당사가 생명이나 안전에 대한 즉각적인 위험이 있다고 합리적으로 믿는 경우.</li>
              <li><strong>법적 및 준수</strong> 법률에 의해 요구되는 경우, 권리와 안전을 보호하기 위해, 또는 기업 거래에서(통지 및 보호 조치와 함께).</li>
            </ul>
            <p>당사는 <strong>귀하의 개인 정보를 판매하지 않으며</strong> 민감한 건강 데이터를 타겟 광고에 사용하지 않습니다.</p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">6. 국제 전송</h2>
            <p>
              당사는 다른 개인정보 보호법을 가진 국가로 데이터를 전송할 수 있습니다. 그렇게 할 때, 당사는 <strong>표준 계약 조항(SCCs)</strong>과 같은 보호 조치를 사용하며, 미국으로의 전송에 대해서는 <strong>EU-US 데이터 개인정보 프레임워크(DPF)</strong> 참여(인증된 경우)를 사용합니다. 관련 보호 조치의 사본은 요청 시 제공됩니다.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">7. 보안</h2>
            <p>
              당사는 암호화, 접근 제어, 보안 모니터링 및 직원 교육을 포함하여 귀하의 정보를 보호하기 위한 적절한 기술적 및 조직적 보안 조치를 구현합니다. 그러나 어떤 시스템도 완전히 안전하지는 않습니다.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">8. 귀하의 권리</h2>
            <p>귀하의 위치에 따라 다음과 같은 권리가 있을 수 있습니다:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>데이터에 대한 접근, 수정, 이전성 및 삭제</li>
              <li>처리에 대한 제한 및 이의</li>
              <li>동의 철회</li>
              <li>데이터 보호 당국에 대한 불만 제기</li>
            </ul>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">9. 데이터 보존</h2>
            <p>
              당사는 이 정책에 설명된 목적에 필요한 기간 동안 또는 법률에 의해 요구되는 기간 동안만 귀하의 정보를 보존합니다. 데이터가 더 이상 필요하지 않을 때 데이터는 안전하게 삭제되거나 익명화됩니다.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">10. 이 정책의 변경</h2>
            <p>
              당사는 이 정책을 가끔 업데이트할 수 있습니다. 중요한 변경사항에 대해서는 이메일이나 애플리케이션을 통해 귀하에게 알려드립니다. 변경 후 서비스의 지속적인 사용은 업데이트된 정책에 대한 수락을 구성합니다.
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">11. 연락처</h2>
            <p>
              이 정책에 대한 질문이 있거나 권리를 행사하고 싶으시면 다음으로 연락해 주세요:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>이메일:</strong> privacy@careai.com</li>
              <li><strong>주소:</strong> CareAI Co., [주소]</li>
            </ul>
          </div>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
