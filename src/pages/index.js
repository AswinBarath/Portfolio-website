import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Aswin Portfolio website'}</title>
        <html lang={lang || 'en'} />
        {/* <!--  Essential META Tags --> */}
        <meta property="og:title" content="Aswin Portfolio website" />
        <meta name="description" content={description || 'Aswin Barath - Portfolio Website'} />
        <meta name="keywords" content="Aswin Barath, Software Engineer, Portfolio Website" />
        <meta name="author" content="Aswin Barath" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content="https://aswinbarath.me/" />
        <meta property="og:type" content="Portfolio Website" />
        <meta property="article:published_time" content="2021-07-26" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/AswinBarath/Portfolio-website/main/src/images/portfolio-website-sq.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://raw.githubusercontent.com/AswinBarath/Portfolio-website/main/src/images/portfolio-website-sq.jpg"
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1080" />
        <meta property="og:image:height" content="1080" />
        <meta property="og:image:alt" content="Aswin Barath - Portfolio Website" />
        <meta
          name="twitter:card"
          content="https://raw.githubusercontent.com/AswinBarath/Portfolio-website/main/src/images/portfolio-website-sq.jpg"
        />

        {/* <!--  Non-Essential, But Recommended --> */}
        <meta property="og:site_name" content="Aswin Portfolio" />
        <meta name="twitter:image:alt" content="Aswin Portfolio" />

        {/* <!--  Non-Essential, But Required for Analytics --> */}
        <meta property="fb:app_id" content="100011683902531" />
        <meta name="twitter:site" content="@AswinBarath2" />
      </Helmet>
      <App />
    </>
  );
};
