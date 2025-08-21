import SiteHeaderUnified from '../../../components/SiteHeaderUnified';
import SiteFooter from '../../../components/SiteFooter';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー — CareAI",
  description: "CareAIプライバシーポリシー - 私たちがどのように情報を収集、使用、保護するかについて学びます。",
};

export default function PrivacyJa() {
  return (
    <>
      <SiteHeaderUnified locale="ja" />
      <main>
        <div className="mx-auto max-w-4xl px-4 py-16">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-ink-900 mb-8">CareAIプライバシーポリシー</h1>
            
            <div className="text-ink-600 mb-8">
              <p><strong>最終更新：</strong> 2025年8月19日</p>
              <p>
                このプライバシーポリシーは、CareAI（"CareAI"、"私たち"、"当社"）が、お客様が当社のウェブサイト、アプリケーション、および関連サービス（総称して"サービス"）を使用する際に、どのように情報を収集、使用、共有するかを説明しています。
              </p>
            </div>

            <div className="bg-ink-50 border-l-4 border-brand-blue p-6 mb-8">
              <p className="text-ink-700 font-medium">
                <strong>簡単な言語での要約</strong>（完全なポリシーの代替ではありません）：サービスを提供し、人々を安全に保ち、信頼性を向上させ、法的要件を満たすために、アカウント、デバイス、健康関連の情報を収集します。お客様がデータを制御し、アクセス、修正、エクスポート、または削除することができます。
              </p>
            </div>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">1. 私たちについて</h2>
            <p><strong>データ管理者：</strong> CareAI Co.</p>
            <p><strong>連絡先：</strong> privacy@careai.com.</p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">2. 適用範囲</h2>
            <p>
              このポリシーは、サービスおよびそれらを使用する個人（患者、介護者、家族、臨床医）に適用されます。医療提供者を通じてCareAIを使用する場合、当社はビジネスアソシエイト契約（BAA）またはデータ処理契約（DPA）の下で、提供者の代理として<strong>処理者</strong>としてデータを処理する場合があります。
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">3. 収集する情報</h2>
            <p>当社は、<strong>お客様が提供する</strong>情報、<strong>自動的に</strong>収集される情報、およびお客様が接続する<strong>統合</strong>からの情報を収集します。</p>

            <h3 className="text-xl font-bold text-ink-900 mt-8 mb-3">A) お客様が提供するもの</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>プロフィールと連絡先：名前、メール、電話、希望言語、緊急連絡先。</li>
              <li>お客様が入力または当社のアクセスを許可する健康情報：症状、薬物、スケジュール、メモ。</li>
              <li>通信：メッセージ、サポートリクエスト、録音された音声メモ（録音を有効にした場合）。</li>
              <li>支払いとサブスクリプションの詳細（第三者支払いプロバイダーによって処理—CareAIは完全なカード番号を保存しません）。</li>
            </ul>

            <h3 className="text-xl font-bold text-ink-900 mt-8 mb-3">B) 自動収集</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>デバイスとアプリのデータ：デバイスモデル/OS、アプリバージョン、一意の識別子、クラッシュログ、パフォーマンス指標。</li>
              <li>使用データ：使用された機能、クリックされたボタン、表示されたページ、セッションタイムスタンプ、IPから派生した概算位置。</li>
            </ul>

            <h3 className="text-xl font-bold text-ink-900 mt-8 mb-3">C) お客様が接続する統合から</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>ウェアラブル/健康プラットフォーム（例：HealthKit / Google Fit、Bluetoothデバイス）。</li>
              <li>EHR/EMRシステムまたはクリニックソフトウェア（お客様の組織がこれらを接続する場合）。</li>
            </ul>
            <p>当社は、お客様が明示的に許可したデータにのみアクセスします。</p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">4. お客様の情報を使用する理由（目的と法的根拠）</h2>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>サービスの提供と保護</strong>（契約の履行；正当な利益）。</li>
              <li><strong>ケア機能</strong>薬物リマインダー、コンプライアンス追跡、転倒アラート、音声アシスタント、承認された介護者との共有（同意；重要な利益；許可されている場合の実質的な公共利益）。</li>
              <li><strong>研究と製品改善</strong>分析、デバッグ、A/Bテスト（正当な利益；必要に応じて同意）。</li>
              <li><strong>通信</strong>サービスメッセージ、セキュリティアラート、および—お客様のオプトインで—マーケティング（同意；正当な利益）。</li>
              <li><strong>法的コンプライアンス</strong>法的な要求への対応と条件の執行を含む（法的義務；正当な利益）。</li>
            </ul>

            <div className="bg-ink-50 border-l-4 border-brand-blue p-6 mb-8">
              <p className="text-ink-700">
                <strong>特別カテゴリ/健康データ（GDPR）：</strong>当社は、お客様の<strong>明示的な同意</strong>がある場合、または重要な利益を保護するため、または適切な保護措置の下で医療提供者との契約で許可されている場合にのみ健康データを処理します（GDPR第9条）。お客様はいつでも同意を取り消すことができます。
              </p>
            </div>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">5. お客様の情報の共有</h2>
            <p>当社は、以下の場合にのみ情報を共有します：</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>お客様の承認された連絡先</strong>（家族、介護者、臨床医）共有を有効にした場合。</li>
              <li><strong>サービスプロバイダー</strong>（クラウドホスティング、分析、クラッシュレポート、サポート）。彼らは契約の下で当社のためにサービスを実行するために<strong>のみ</strong>データにアクセスできます。</li>
              <li><strong>緊急サービス</strong>お客様がSOSをトリガーした場合、または当社が生命または安全に対する差し迫ったリスクがあると合理的に信じる場合。</li>
              <li><strong>法的およびコンプライアンス</strong>法律で要求される場合、権利と安全を保護するため、または企業取引で（通知と保護措置付き）。</li>
            </ul>
            <p>当社は<strong>お客様の個人情報を販売しません</strong>、また機密性の高い健康データをターゲティング広告に使用しません。</p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">6. 国際転送</h2>
            <p>
              当社は、異なるプライバシー法を持つ国にデータを転送する場合があります。その場合、当社は<strong>標準契約条項（SCCs）</strong>などの保護措置を使用し、米国への転送については、<strong>EU-USデータプライバシーフレームワーク（DPF）</strong>への参加（認証されている場合）を使用します。関連する保護措置のコピーは要求に応じて利用可能です。
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">7. セキュリティ</h2>
            <p>
              当社は、お客様の情報を保護するために適切な技術的および組織的安全措置を実装しており、暗号化、アクセス制御、セキュリティ監視、スタッフトレーニングを含みます。ただし、どのシステムも完全に安全ではありません。
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">8. お客様の権利</h2>
            <p>お客様の場所に応じて、以下のような権利がある場合があります：</p>
            <ul className="list-disc pl-6 mb-4">
              <li>データへのアクセス、修正、可搬性、削除</li>
              <li>処理の制限と異議申し立て</li>
              <li>同意の撤回</li>
              <li>データ保護当局への苦情の提出</li>
            </ul>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">9. データ保持</h2>
            <p>
              当社は、このポリシーで説明されている目的に必要な期間、または法律で要求される期間のみお客様の情報を保持します。データが不要になった場合、データは安全に削除または匿名化されます。
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">10. このポリシーの変更</h2>
            <p>
              当社は、このポリシーを時々更新する場合があります。重要な変更については、メールまたはアプリケーションを通じてお客様に通知します。変更後のサービスの継続使用は、更新されたポリシーの受け入れを構成します。
            </p>

            <h2 className="text-2xl font-bold text-ink-900 mt-12 mb-4">11. お問い合わせ</h2>
            <p>
              このポリシーについてご質問がある場合、または権利を行使したい場合は、以下でお問い合わせください：
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>メール：</strong> privacy@careai.com</li>
              <li><strong>住所：</strong> CareAI Co., [住所]</li>
            </ul>
          </div>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
