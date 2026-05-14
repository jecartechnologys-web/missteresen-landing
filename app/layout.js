import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  title: "Missteresen — Gestión de Alumnos con IA para Educación Especial",
  description:
    "Missteresen es la plataforma de gestión educativa que centraliza alumnos, sesiones, reportes PDF y análisis con inteligencia artificial. Diseñada para docentes, tutores y terapeutas. Prueba gratis.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Missteresen — Gestión Educativa con IA",
    description: "Gestiona a tus alumnos, genera informes con IA y comparte avances con tutores — desde tu celular.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Missteresen — Gestión Educativa con IA",
    description: "Gestiona a tus alumnos, genera informes con IA y comparte avances con tutores — desde tu celular.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Missteresen",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Android, iOS, Web",
    description:
      "Plataforma de gestión educativa con IA para docentes, tutores y terapeutas. Administra alumnos, genera reportes PDF y comparte avances en tiempo real.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <html lang="es">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-slate-800">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
