import { Link } from 'gatsby';
import React from 'react';
import Language from '../Language';

interface HeaderProps {
  siteTitle: string;
}

const Header = ({ siteTitle }: HeaderProps) => (
  <header
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <div
        style={{
          margin: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <h1>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <div
          style={{
            float: `right`,
          }}
        >
          <Language />
        </div>
      </div>
    </div>
  </header>
);

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
