import SiteHeaderUnified from '../../../components/SiteHeaderUnified';
import SiteFooter from '../../../components/SiteFooter';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "隐私政策 — CareAI",
  description: "CareAI隐私政策 - 了解我们如何收集、使用和保护您的信息。",
};

export default function PrivacyZh() {
  return (
    <>
      <SiteHeaderUnified locale="zh" />
      <main>
        <div className="mx-auto max-w-4xl px-4 py-16">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-ink-900 mb-8">CareAI隐私政策</h1>
            
            <div className="text-ink-600 mb-8">
              <p><strong>最后更新：</strong> 2025年8月19日</p>
              <p>
                本隐私政策说明了CareAI（"CareAI"、"我们"、"我们的"）在您使用我们的网站、应用程序和相关服务（统称为"服务"）时如何收集、使用和共享信息。
              </p>
            </div>

            <div className="bg-ink-50 border-l-4 border-brand-blue p-6 mb-8">
              <p className="text-ink-700 font-medium">
                <strong>简单语言摘要</strong>（不是完整政策的替代品）：我们收集账户、设备和健康相关信息以提供服务、保持人员安全、提高可靠性并满足法律要求。您控制您的数据，可以访问、更正、导出或删除它们。
              </p>
            </div>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">1. 我们是谁</h2>
            <p><strong>数据控制者：</strong> CareAI Co.</p>
            <p><strong>联系方式：</strong> privacy@careai.com.</p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">2. 适用范围</h2>
            <p>
              本政策适用于服务以及使用这些服务的个人（患者、护理人员、家庭成员和临床医生）。如果您通过医疗保健提供者使用CareAI，我们可能会作为<strong>处理者</strong>代表提供者处理数据，但需遵守商业伙伴协议（BAA）或数据处理协议（DPA）。
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">3. 我们收集的信息</h2>
            <p>我们收集<strong>您提供</strong>的信息、<strong>自动收集</strong>的信息以及您连接的<strong>集成</strong>信息。</p>

            <h3 className="text-xl font-bold text-ink-900 mt-8 mb-3">A) 您提供的信息</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>个人资料和联系方式：姓名、电子邮件、电话、首选语言、紧急联系人。</li>
              <li>您输入或授权我们访问的健康信息：症状、药物、时间表、笔记。</li>
              <li>通信：消息、支持请求、录制的语音笔记（如果您启用录制）。</li>
              <li>付款和订阅详情（由第三方付款提供商处理—CareAI不存储完整的卡号）。</li>
            </ul>

            <h3 className="text-xl font-bold text-ink-900 mt-8 mb-3">B) 自动收集</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>设备和应用程序数据：设备型号/操作系统、应用程序版本、唯一标识符、崩溃日志、性能指标。</li>
              <li>使用数据：使用的功能、点击的按钮、查看的页面、会话时间戳、从IP派生的近似位置。</li>
            </ul>

            <h3 className="text-xl font-bold text-ink-900 mt-8 mb-3">C) 从您连接的集成</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>可穿戴设备/健康平台（例如，HealthKit / Google Fit、蓝牙设备）。</li>
              <li>EHR/EMR系统或诊所软件（如果您的组织连接这些）。</li>
            </ul>
            <p>我们只访问您明确授权的数据。</p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">4. 我们使用您信息的原因（目的和法律依据）</h2>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>提供和保护服务</strong>（履行合同；合法利益）。</li>
              <li><strong>护理功能</strong>如药物提醒、依从性跟踪、跌倒警报、语音助手以及与批准的护理人员共享（同意；重要利益；在允许的情况下实质性公共利益）。</li>
              <li><strong>研究和产品改进</strong>如分析、调试、A/B测试（合法利益；在需要时同意）。</li>
              <li><strong>通信</strong>如服务消息、安全警报和—在您选择加入的情况下—营销（同意；合法利益）。</li>
              <li><strong>法律合规</strong>包括回应合法请求和执行条款（法律义务；合法利益）。</li>
            </ul>

            <div className="bg-ink-50 border-l-4 border-brand-blue p-6 mb-8">
              <p className="text-ink-700">
                <strong>特殊类别/健康数据（GDPR）：</strong>我们仅在您<strong>明确同意</strong>的情况下处理健康数据，以保护重要利益，或根据与您的医疗保健提供者的合同允许，但需遵守适当的保障措施（GDPR第9条）。您可以随时撤回同意。
              </p>
            </div>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">5. 共享您的信息</h2>
            <p>我们仅与以下对象共享信息：</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>您授权的联系人</strong>（家庭、护理人员、临床医生）当您启用共享时。</li>
              <li><strong>服务提供商</strong>（云托管、分析、崩溃报告、支持）。他们只能访问数据<strong>为</strong>我们根据合同提供服务。</li>
              <li><strong>紧急服务</strong>如果您触发SOS或我们合理认为存在对生命或安全的迫在眉睫的风险。</li>
              <li><strong>法律和合规</strong>当法律要求时，为了保护权利和安全，或在企业交易中（有通知和保障措施）。</li>
            </ul>
            <p>我们<strong>不出售</strong>您的个人信息，也不使用敏感的健康数据进行定向广告。</p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">6. 国际传输</h2>
            <p>
              我们可能会将数据传输到具有不同隐私法律的国家。当我们这样做时，我们使用保障措施，如<strong>标准合同条款（SCCs）</strong>，对于向美国的传输，参与<strong>欧盟-美国数据隐私框架（DPF）</strong>（如果获得认证）。相关保障措施的副本可根据要求提供。
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">7. 安全</h2>
            <p>
              我们实施适当的技术和组织安全措施来保护您的信息，包括加密、访问控制、安全监控和人员培训。但是，没有任何系统是完全安全的。
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">8. 您的权利</h2>
            <p>根据您的位置，您可能拥有以下权利：</p>
            <ul className="list-disc pl-6 mb-4">
              <li>访问、更正、可携带性和删除数据</li>
              <li>限制和反对处理</li>
              <li>撤回同意</li>
              <li>向数据保护当局提出投诉</li>
            </ul>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">9. 数据保留</h2>
            <p>
              我们仅在实现本政策中描述的目的所必需的时间内或根据法律要求保留您的信息。当数据不再需要时，数据会被安全删除或匿名化。
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">10. 本政策的变更</h2>
            <p>
              我们可能会偶尔更新本政策。我们将通过电子邮件或应用程序通知您重大变更。您在变更后继续使用服务构成对更新政策的接受。
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">11. 联系我们</h2>
            <p>
              如果您对本政策有任何问题或想要行使您的权利，请通过以下方式联系我们：
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>电子邮件：</strong> privacy@careai.com</li>
              <li><strong>地址：</strong> CareAI Co., [地址]</li>
            </ul>
          </div>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
