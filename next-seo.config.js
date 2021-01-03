const title = "Fabricio Murillo's blog";
const description = 'Software engineer, math student, soccer and movies lover.';

const SEO = {
  title,
  description,
  canonical: 'https://fabricioism.com',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://fabricioism.com',
    title,
    description,
    images: [
      {
        url: 'https://fabricioism.com/static/images/banner.png',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  },
  twitter: {
    handle: '@fabricioism',
    site: '@fabricioism',
    cardType: 'summary_large_image'
  }
};

export default SEO;
