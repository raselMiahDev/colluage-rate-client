import { Helmet } from "react-helmet-async";
interface SEOProps {
  title: string;
  description?: string;
  url?: string;
  image?: string;
}

const SEO = ({ title, description, url, image }: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta
        name="description"
        content={description || "Default website description."}
      />
      <meta name="robots" content="index,follow" />
      <meta property="og:title" content={description} />
      <meta property="og:url" content={url || "https://website.com"} />
      <meta
        property="og:image"
        content={image || "https://website.com/default-image.jpg"}
      />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Favicon  */}
      <link rel="icon" href="/public/vite.svg" />
      <link rel="canonical" href={url || "https://website.com"} />
      <meta name="theme-color" content="#0F172A" />
    </Helmet>
  );
};

export default SEO;
