import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="theme-color" content="#0404A9" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="author" content="Groupe Bazarette" />
        <meta property="og:site_name" content="Groupe Bazarette" />
        <meta property="og:site" content="www.groupebazarette.com" />
        <meta
          property="og:title"
          content="Groupe Opticiens Bazarette - Lunettes, lunettes de soleil et lentilles"
        />
        <meta
          property="og:description"
          content="Découvrez et essayez en ligne nos lunettes de soleil, nos lunettes de vue - Réservez vos lunettes et lentilles en ligne."
        />
        <meta property="og:image" content="/assets/opticien.jpeg" />
        <meta property="og:url" content="www.groupebazarette.com" />
        <meta property="og:type" content="article" />
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <body className="relative">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
