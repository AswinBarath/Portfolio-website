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
        <meta
          name="description"
          content={description || 'Aswin Barath - Personal Portfolio Website'}
        />
        <meta property="og:url" content="https://aswinbarath.me/" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/AswinBarath/Portfolio-website/main/src/images/portfolio-website.png"
        />
        <meta
          property="og:video"
          content="https://raw.githubusercontent.com/AswinBarath/Portfolio-website/main/src/images/portfolio-website.mp4"
        />
        <meta
          name="twitter:card"
          content="https://raw.githubusercontent.com/AswinBarath/Portfolio-website/main/src/images/portfolio-website.png"
        />

        {/* <!--  Non-Essential, But Recommended --> */}
        <meta property="og:site_name" content="Blogfolio" />
        <meta name="twitter:image:alt" content="Blogfolio" />

        {/* <!--  Non-Essential, But Required for Analytics --> */}
        <meta property="fb:app_id" content="100011683902531" />
        <meta name="twitter:site" content="@AswinBarath2" />
      </Helmet>
      <App />
    </>
  );
};
