import React from 'react';
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl';

const languageName: any = {
  pt: 'Português',
  en: 'English',
};

const Language = () => {
  return (
    <div>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }: any) =>
          languages.map((language: string) => (
            <a
              key={language}
              onClick={() => changeLocale(language)}
              style={{
                color: currentLocale === language ? `yellow` : `white`,
                margin: 10,
                textDecoration: `underline`,
                cursor: `pointer`,
              }}
            >
              {languageName[language]}
            </a>
          ))
        }
      </IntlContextConsumer>
    </div>
  );
};

export default Language;
