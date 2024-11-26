import type { Metadata } from "next";
import Head from "next/head";
import "../scss/reset.scss";
import localFont from "next/font/local";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SmartLog from "../components/Script/SmartLog";
import InquireLog from "../components/Script/InquireLog";

export const metadata: Metadata = {
  title: "스페이스디자인",
  description: "",
};

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <Head>
				<link rel="icon" href="/public/favicon.ico"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={`${pretendard.variable}`}>
        <Header />
        {children}
        <Footer />
        <InquireLog />
        <SmartLog />
      </body>
    </html>
  );
}
