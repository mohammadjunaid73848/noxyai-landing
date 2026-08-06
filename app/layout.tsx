import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NoxyAI - Seamless Financial & Agentic Operations',
  description: 'Take control of your finances and workflows with NoxyAI: the next-generation AI-powered workspace built to simplify, automate, and elevate your operations.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased selection:bg-blue-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
