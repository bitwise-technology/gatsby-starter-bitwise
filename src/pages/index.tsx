import React from 'react';
import { Link } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';

import Layout from '../components/Layout';
import Image from '../components/Image';
import SEO from '../components/seo';

const IndexPage = () => {
  const intl = useIntl();
  return (
    <Layout>
      <SEO title="Home" />
      <h1>{intl.formatMessage({ id: 'title' })}</h1>
      <p>{intl.formatMessage({ id: 'description' })}</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
};

export default IndexPage;
