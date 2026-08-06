'use client';

import React from 'react';
import Link from 'next/link';
import { FloatingGlassHeader } from '@/components/ui/floating-glass-header';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-800 relative">
      {/* Floating Glass Header */}
      <FloatingGlassHeader />

      {/* Main Terms Content */}
      <article className="max-w-4xl mx-auto px-6 pt-32 pb-16">
        <div className="border-b border-slate-200 pb-8 mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
            Terms of Service
          </h1>
          <p className="text-slate-500 font-medium">Last updated March 1, 2024</p>
        </div>

        <div className="space-y-8 leading-relaxed text-slate-700 text-base">
          <p className="text-lg">
            Welcome to NoxyAI! Please carefully read the following Terms of Use (hereinafter referred to as the "Agreement"). This Agreement constitutes a legally binding agreement between You and NoxyAI regarding the access and use of the NoxyAI software applications, services, and websites (collectively referred to as the "Services").
          </p>

          <p>
            By accessing or using the Services in any way, You acknowledge that You have read, understood, and agreed to be bound by all the terms of this Agreement. If You do not agree to any part of this Agreement, You are not permitted to continue accessing or using the Services.
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Definitions</h2>
            <p>
              The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</li>
              <li><strong>Agreement</strong> means this Terms of Use Agreement.</li>
              <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to NoxyAI LLC.</li>
              <li><strong>Service</strong> means the NoxyAI software applications, services, and website.</li>
              <li><strong>You</strong> means the individual accessing or using the Services, or the company, or other legal entity on behalf of which such individual is accessing or using the Services, as applicable.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Our Services</h2>
            <p>
              NoxyAI provides a platform and interface that enables users to interact with artificial intelligence technologies, including but not limited to natural language processing models or content generation models developed independently or provided by third parties such as Google, Microsoft, OpenAI, and other commercial companies as well as open-source communities. The Service facilitates functions such as information retrieval, content creation, and automation through user interaction with AI systems. Additionally, it utilizes cloud technology to provide capabilities like data synchronization, vector data storage, server-side functionalities, etc., to enhance the interactive experience with AI models.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Eligibility</h2>
            <p>
              By accessing or using the Services, You represent and warrant to the Company that You: (1) Are of legal age (18 years and above). (2) Have legal capacity and agree to abide by these terms. (3) Will use the Services in accordance with this Agreement and all applicable laws. (4) Will not use the Services for any illegal, harmful, dangerous, or offensive purposes.
            </p>
            <p className="font-semibold text-slate-900">Examples of prohibited activities include but are not limited to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Illegal activities</li>
              <li>Infringement of intellectual property rights</li>
              <li>Generating harmful, unsafe, deceptive, or illegal content</li>
              <li>Impersonation, fraud</li>
            </ul>
            <p>
              If You do not comply with the usage conditions, We reserve the right to suspend or terminate Your account and refuse any and all current or future use of the Services (or any part thereof).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Account Registration</h2>
            <p>
              To access the Services, You must register an account by providing true, accurate, up-to-date, and complete information. You are solely responsible for all activities that occur under Your account, including maintaining the security of Your account and restricting access. You must immediately notify NoxyAI of any unauthorized account use or other security breaches.
            </p>
            <p>
              Please ensure to keep Your password secure and take responsibility for all use of Your account and password. If We deem the chosen username inappropriate, containing obscene content, or otherwise offensive, We reserve the right to delete, revoke, or modify that username.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Purchases and Payments</h2>
            <p>
              You agree to provide current, complete, and accurate purchase and account information for all purchases made using the Services. You also agree to promptly update Your account and payment information, including email address, payment method, and payment card expiration date, to allow us to complete Your transactions and contact You when necessary. Sales tax will be added to the purchase price as required by law.
            </p>
            <p>
              You agree to pay all charges at the current purchase price and authorize us to charge any such amounts to Your chosen payment provider at the time of purchase. If Your order requires recurring charges, You agree that We may charge Your payment method on a recurring basis at the specified intervals without obtaining prior approval for each recurring charge until the relevant order is canceled. We reserve the right to correct any errors or pricing errors even after payment has been requested or accepted.
            </p>
            <p>
              We may utilize third-party payment processing services (such as Stripe) for payment processing. You may use a valid card (credit or debit card) for payment, subject to verification and authorization by Your card issuer. We will not be liable for any delays or failure to provide Services resulting from payment failures due to authorization issues or any reasons related to third-party payment providers.
            </p>
            <p>
              We reserve the right to refuse or cancel Your order at any time for certain reasons, including but not limited to: (1) Service availability, (2) errors in Service description or pricing, (3) order errors, (4) suspected fraud or unauthorized or illegal transactions. We reserve the right, at our sole discretion, to limit or prohibit orders placed by dealers, resellers, or distributors.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Fee Changes</h2>
            <p>
              We reserve the right to adjust the Service fees at our discretion and at any time. Any changes in fees will take effect immediately upon the change. Services that have already been paid for and purchased will not be affected.
            </p>
            <p>
              If Your order requires recurring automatic billing, the revised price will take effect on the next billing cycle. We will notify You in advance of any fee adjustments so that You have the opportunity to cancel the order before the adjustment takes effect. If You do not cancel the order and continue to use the Services, You agree to pay the revised fee amount.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Refunds</h2>
            <p>
              For Services that have been purchased but not used, We support refunds within 30 days of payment. However, for Services that have been used or purchased for more than 30 days, We will not accept refund requests.
            </p>
            <p>
              For subscription-based Services where partial usage has occurred, Your refund request will be reviewed on a case-by-case basis, and the final decision on approving the refund will be at the Company's discretion.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Content</h2>
            <p>
              Our Services allows You to generate and publish content. You are responsible for the legality, reliability, and appropriateness of the content generated using the AI ability. We do not assume responsibility for user-generated content on the Services. You explicitly understand and agree that You are solely responsible for the content You post and all activities conducted under Your account, whether by Yourself or by third parties using Your account.
            </p>
            <p>
              By generating and publishing content in the Services, You grant us the rights and licenses necessary to use, modify, publicly perform, publicly display, copy, and distribute such content within the Services. You retain full ownership of all content created, published, or displayed within the Services and are responsible for maintaining these rights. You agree that this license includes the permission for us to provide Your content to other Service users for their use under these terms. Additionally, You declare and warrant that: (1) the content is owned by You or You have the legal right to use and authorize it to us under this agreement. (2) posting the shared information in the Services will not infringe upon the privacy rights, image rights, copyrights, contractual relationships, or other individual rights of others.
            </p>
            <p>
              All content generated by You is by default stored locally on the client-side, and You are responsible for the storage and backup of Your content.
            </p>
            <p>
              Additionally, We offer optional cloud sync content functionality. By using this feature, You agree that We may retain complete and accurate copies of any content in locations independent of the Services in our manner. However, We cannot guarantee that data will not be lost or damaged. Data or content loss or damage can occur due to various reasons, such as pre-existing damage before synchronization or changes during synchronization.
            </p>
            <p>
              We do not assume any responsibility for the security and integrity of content in the event of content damage or loss under any circumstances.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Intellectual Property Rights</h2>
            <p>
              NoxyAI reserves all rights to the technology, software, first-party content, and data within the Services, including but not limited to patents, trademarks, trade secrets, copyrights, and other intellectual property rights. Your permission to use the Services does not grant You any ownership or title. You are not permitted to copy, modify, adapt, translate, create derivative works, reverse engineer, disassemble, or decompile the Services or any part thereof. If You wish to participate in collaborative technical development, please engage through our GitHub open-source community and adhere to the relevant open-source licenses.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Privacy and Security</h2>
            <p>
              NoxyAI employs industry-standard technical, managerial, and physical security measures to protect the security, confidentiality, and integrity of Your data. However, We cannot guarantee that unauthorized access, hacking attacks, data loss, or other breaches will never occur. NoxyAI is not liable for any damages or liabilities related to security incidents. Please refer to our Privacy Policy for more detailed information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Termination of Services</h2>
            <p>
              You may close Your account and cease using the Services at any time. In the event of a violation of the terms of the agreement, NoxyAI may immediately suspend or terminate Your access to the Services. Upon termination, You will immediately lose the right to access or use the Services. NoxyAI will not be liable to You or any third party for the termination of the Services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Disclaimer of Warranties</h2>
            <p>
              The Services provided by NoxyAI are provided on an "as-is" basis, and without any form of guarantee. We explicitly disclaim all warranties, whether express, implied, statutory, or otherwise, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement. Your use of the Services is at Your own risk.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Limitation of Liability</h2>
            <p>
              In no event shall NoxyAI, its Affiliates, directors, employees, or agents be liable for any direct, indirect, punitive, incidental, special, or consequential damages arising from or related to Your use or inability to use the Services. This limitation applies regardless of the basis or form of action.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Modification of Terms</h2>
            <p>
              We may revise this agreement periodically, and the new version of the agreement will replace the previous version. We will indicate the "last updated" date at the beginning and provide notice within the Services to inform You of significant changes. It is Your responsibility to regularly review these legal terms to stay informed of any updates. By continuing to use the Services after the revised legal terms are posted, You will be deemed to have understood and accepted any changes to the revised legal terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Governing Law and Jurisdiction</h2>
            <p>
              This agreement shall be governed by the laws of the State of Delaware, and You agree to submit to the exclusive jurisdiction of the state and federal courts located in Delaware for the resolution of any disputes related to this agreement or the Services. You may also be required to comply with the laws of Your local jurisdiction, state, country, or international laws when using the Services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Conclusion</h2>
            <p>
              This agreement represents the entire agreement between You and NoxyAI regarding the use of the Services. It supersedes any prior agreements or understandings. The failure of NoxyAI to enforce any provision of this agreement does not constitute a waiver of its rights.
            </p>
            <p>
              By accessing or using the NoxyAI Services, You acknowledge that You have read, understood, and agreed to be bound by this agreement. If You have any questions regarding this agreement, please contact us at:
            </p>
            <p className="font-bold text-slate-900 text-lg">support@noxyai.com</p>
          </section>
        </div>
      </article>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-950 text-slate-400 border-t border-slate-800 text-center text-sm">
        <p>© 2023-2026 NoxyAI, LLC. All rights reserved.</p>
      </footer>
    </main>
  );
}
