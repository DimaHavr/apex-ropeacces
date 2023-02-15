import React from 'react';
import Head from 'next/head';

const Layout = props => {
  return (
    <div>
      <Head>
        <title>{props.pageTitle}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Apex - це компанія, яка спеціалізується на наданні послуг з роботи
            на висоті різним клієнтам в Івано-Франківську. Команда висококваліфікованих і
            досвідчених техніків виконує широкий спектр робіт на висоті,
            включаючи встановлення, технічне обслуговування, перевірку та ремонт
            різного обладнання та інфраструктури на висоті."
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <div>{props.children}</div>
    </div>
  );
};
export default Layout;
