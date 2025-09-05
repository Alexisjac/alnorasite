import "./globals.css";
import Head from "next/head";

export const metadata = {
  title: "Alnora — Nettoyage extérieur haut de gamme",
  description:
    "Alnora offre des services de nettoyage extérieur premium : lavage de bacs, lavage à pression, scellant d’asphalte et plus.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.png" />

        {/* Meta tags SEO */}
        <title>Alnora — Nettoyage extérieur haut de gamme</title>
        <meta
          name="description"
          content="Alnora offre des services de nettoyage extérieur premium : lavage de bacs, lavage à pression, scellant d’asphalte et plus."
        />

        {/* Open Graph (réseaux sociaux) */}
        <meta property="og:title" content="Alnora — Nettoyage extérieur haut de gamme" />
        <meta
          property="og:description"
          content="Services de nettoyage extérieur premium, efficaces et professionnels."
        />
        <meta property="og:image" content="/favicon.png" />

        {/* Couleur de thème pour mobile */}
        <meta name="theme-color" content="#00B140" />
      </Head>
      <body>{children}</body>
    </html>
  );
}