'use client';

import React from 'react';
import Link from 'next/link';
import { FloatingGlassHeader } from '@/components/ui/floating-glass-header';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-800 relative">
      {/* Floating Glass Header */}
      <FloatingGlassHeader />

      {/* Main Privacy Content */}
      <article className="max-w-4xl mx-auto px-6 pt-32 pb-16">
        <div className="border-b border-slate-200 pb-8 mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
            Privacy Policy
          </h1>
          <p className="text-slate-500 font-medium">Last updated 2026-03-05</p>
        </div>

        <div className="space-y-8 leading-relaxed text-slate-700">
          <p className="text-lg">
            Welcome to NoxyAI! We are committed to protecting your personal information and your right to privacy. This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You. By using our Service, you agree to the collection and use of information in accordance with this policy.
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Definitions</h2>
            <p>
              The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</li>
              <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to NoxyAI LLC.</li>
              <li><strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</li>
              <li><strong>Service</strong> refers to NoxyAI's products, include open-source products like NoxyAI and commercial products like NoxyAI Cloud.</li>
              <li><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</li>
              <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Collecting of Your Personal Data</h2>
            <h3 className="text-xl font-semibold text-slate-900">Personal Data</h3>
            <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Email address</li>
              <li>Name or nickname</li>
              <li>Your location or address</li>
              <li>Other personal profile information voluntarily provided by You</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mt-6">Usage Data</h3>
            <p>Usage Data is collected automatically when using the Service.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Chat Logs:</strong> NoxyAI chat data is stored locally on the client-side by default. However, we offer cloud synchronization functionality. Upon enabling cloud synchronization, all commands and chat logs from your interactions with the AI agents will automatically sync to cloud servers and be recorded.</li>
              <li><strong>Settings Data:</strong> All personalized settings You use for the NoxyAI product, including but not limited to your account settings, language preferences, theme settings, and other customization options.</li>
              <li><strong>Behavioral Data:</strong> This encompasses your UI interaction behaviors while using our product service, including page navigation, button clicks, mouse scrolling, and other user behavioral data.</li>
              <li><strong>Device Information:</strong> Such as your device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</li>
              <li><strong>Mobile Device Information:</strong> When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Tracking Technologies and Cookies</h2>
            <p>
              We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Cookies or Browser Cookies:</strong> A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.</li>
              <li><strong>Web Beacons:</strong> Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics.</li>
            </ul>
            <p>Cookies can be "Persistent" or "Session" Cookies. We use both Session and Persistent Cookies for the purposes set out below:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Necessary / Essential Cookies:</strong> Type: Session Cookies. Administered by: Us. Purpose: Essential to provide You with services available through the Website.</li>
              <li><strong>Cookies Policy / Notice Acceptance Cookies:</strong> Type: Persistent Cookies. Administered by: Us. Purpose: Identifies if users have accepted the use of cookies.</li>
              <li><strong>Functionality Cookies:</strong> Type: Persistent Cookies. Administered by: Us. Purpose: Allows us to remember choices You make when You use the Website.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Use of Your Personal Data</h2>
            <p>We may use your Personal Data for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and maintain our Service, including to monitor the usage of our Service.</li>
              <li>To manage Your Account: to manage Your registration as a user of the Service.</li>
              <li>For the performance of a contract: the development, compliance and undertaking of the purchase contract.</li>
              <li>To contact You: To contact You by email or other equivalent forms of electronic communication.</li>
              <li>To provide You with news, special offers and general information about other goods.</li>
              <li>To manage Your requests: To attend and manage Your requests to Us.</li>
              <li>For product enhancement: We collect and analyze your usage data to improve user experience.</li>
              <li>For business transfers: We may use Your information to evaluate or conduct a merger or sale.</li>
              <li>For other purposes: Such as data analysis, identifying usage trends, and evaluating campaign effectiveness.</li>
            </ul>
            <p>We may share Your personal information with Service Providers, for business transfers, with Affiliates, with business partners, with other users, or with Your consent.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Google API Services User Data Policy</h2>
            <p>
              NoxyAI's use and transfer to any other app of information received from Google APIs will adhere to Google API Services User Data Policy, including the Limited Use requirements. We do not use Google user data for advertising purposes, nor do we sell it to third parties.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">AI Service Transparency</h2>
            <p>
              NoxyAI integrates with third-party AI services to power its AI assistant features, including but not limited to OpenAI (GPT-4) and Anthropic (Claude).
            </p>
            <p>
              All data processed through these services is handled via their enterprise API endpoints, which do not use customer data for model training.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Retention of Your Personal Data</h2>
            <p>
              We will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Transfer of Your Personal Data</h2>
            <p>
              Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Delete Your Personal Data</h2>
            <p>
              You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You. Our Service gives You the ability to delete certain information from within the Service or by contacting us.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Disclosure of Your Personal Data</h2>
            <p>
              Under business transactions, law enforcement, or legal requirements, the Company may disclose Your Personal Data in good faith belief that such action is necessary to comply with a legal obligation, protect rights, or prevent wrongdoing.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Security of Your Personal Data</h2>
            <p>
              The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Children's Privacy</h2>
            <p>
              Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Payments Informations</h2>
            <p>
              We may utilize third-party payment processing services (such as Stripe) for payment processing. Under no circumstances do we store or collect Your payment card details. Your payment information will be directly provided to the selected third-party payment processor, which complies with PCI-DSS standards.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Mobile App AI Data Sharing</h2>
            <p>When you use AI chat features in the NoxyAI Mobile app, we may transmit certain data to AI services to generate responses:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>What data is sent:</strong> Message content, uploaded files/images, conversation context, technical metadata.</li>
              <li><strong>Who receives the data:</strong> NoxyAI Cloud services or self-hosted endpoint, and selected third-party AI provider (OpenAI, Anthropic, Google).</li>
              <li><strong>When data is sent:</strong> Clear consent dialog requires agreement before the first AI request.</li>
              <li><strong>Why we send this data:</strong> To provide AI responses, maintain service reliability, and prevent abuse. Not used for advertising.</li>
              <li><strong>Model training:</strong> We do not use your chat content for model training.</li>
              <li><strong>Retention and deletion:</strong> Retained only as long as necessary. You may request deletion at support@noxyai.com.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Changes to this Privacy Policy</h2>
            <p>
              We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.
            </p>
          </section>

          <section className="space-y-4 border-t border-slate-200 pt-6">
            <h2 className="text-2xl font-bold text-slate-900">Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, You can contact us at:</p>
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
