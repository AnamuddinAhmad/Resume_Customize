import Head from "next/head";

export default function Meta({ title, keywords, description }) {
  const homepage = "https://resume-maker-kappa.vercel.app/builder";
  const logo = "/assets/logo.png";
  const fevicon = "/assets/logo.png";
  function isiteJsonLd() {
    return {
      __html: `{
                "@context": "https://schema.org",
                "@type": "Organization",
                "url": ${homepage},
                "logo": ${logo},
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+91 1234567890",
                    "contactType": "customer service"
                },
                "image": ${logo},
                "description": ${description},
                "founder": "Anamuddin Ahmad",
                "foundingDate": "2024",
                "foundingLocation": "IN",
                "email": "xyz@gmail.com",
                "telephone": "+91 1234567890",
                "areaServed": "IN",
                "keywords": ${keywords},
                "mainEntityOfPage": ${homepage},
                "knowsAbout": ${keywords},
                "knowsLanguage": "English",
                "memberOf": "Oensource",
                "owns": "Anamuddin Ahmad",
                "publishingPrinciples": ${homepage},
                "slogan": "free resume creator for humanity"
            }`,
    };
  }

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href={fevicon} />
      <title>{title}</title>
      <meta type="copyright" content="Resume Maker" />
      <meta type="author" content="Anamuddin Ahmad" />
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={homepage} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={logo} />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={homepage} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={logo} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={isiteJsonLd()}
        key="isiteJsonLd"
      />
    </Head>
  );
}
