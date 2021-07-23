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
        <meta
          name="description"
          content={description || 'Aswin Barath Personal Portfolio Website'}
        />
        <meta property="og:title" content="Aswin Portfolio website" />
        <meta
          property="og:url"
          content="https://raw.githubusercontent.com/AswinBarath/Portfolio-website/main/src/images/portfolio-website.gif"
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/AswinBarath/Portfolio-website/main/src/images/portfolio-website.gif"
        />
      </Helmet>
      <App />
    </>
  );
};
