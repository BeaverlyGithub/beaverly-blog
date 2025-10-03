import Head from "next/head";

interface SEOHeadProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
  keywords?: string;
}

export default function SEOHead({ title, description, url, image, keywords }: SEOHeadProps) {
  const siteName = "Beaverly Blog";
  const fullTitle = `${title} | ${siteName}`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content={siteName} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:image" content={image || "/default-cover.jpg"} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || "/default-cover.jpg"} />

      {/* Canonical */}
      {url && <link rel="canonical" href={url} />}
    </Head>
  );
}
