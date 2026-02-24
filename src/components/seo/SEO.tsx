import { Helmet } from "react-helmet-async";

const BASE_URL = "https://lakshaykapoor.in";
const DEFAULT_TITLE = "Lakshay Kapoor — Full Stack Engineer";
const DEFAULT_DESCRIPTION =
  "Full Stack Engineer building scalable systems from architecture to deployment. Specialized in React, Node.js, PostgreSQL, and AWS.";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  jsonLd?: object;
  noIndex?: boolean;
}

const SEO = ({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical = "/",
  jsonLd,
  noIndex = false,
}: SEOProps) => {
  const fullTitle = title ? `${title} | Lakshay Kapoor` : DEFAULT_TITLE;
  const url = canonical === "/" ? BASE_URL : `${BASE_URL}${canonical}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Lakshay Kapoor" />

      {/* Twitter */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
};

export default SEO;
