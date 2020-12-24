import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CookieConsent, { getCookieConsentValue } from 'react-cookie-consent';
import FbgLogo from './media/fbg_logo_white_48.png';
import Link from 'next/link';

interface FBGBarProps {
  FEATURE_FLAG_readyForDesktopView?: boolean;
  toolbarContent?: React.ReactNode;
}

const getCookiesBanner = () => {
  if (typeof window === 'undefined' || getCookieConsentValue('shjCookieConsent')) {
    return null;
  }

  return (
    <CookieConsent cookieName="shjCookieConsent" buttonText="Agree" buttonStyle={{ background: '#00e676' }}>
      This website uses cookies to enhance the user experience. By continuing to use our website, you agree to the use
      of cookies.{' '}
      <span style={{ fontSize: '10px' }}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.sahajanand-games.com/docs/"
          style={{ color: 'pink' }}
        >
          Read more
        </a>
      </span>
    </CookieConsent>
  );
};

class FreeBoardGamesBar extends React.Component<FBGBarProps, {}> {
  render() {
    const maxWidth = this.props.FEATURE_FLAG_readyForDesktopView ? '1200px' : '500px';

    return (
      <>
        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <AppBar position="sticky">
            <Toolbar>
              <Link href="/">
                <a style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                  <img style={{ marginRight: '8px', height: '48px' }} src={FbgLogo} alt="Sahajanand Games" />
                  <Typography component="h1" variant="h6" style={{ color: 'white' }}>
                    Sahajanand Games
                  </Typography>
                </a>
              </Link>
              {this.props.toolbarContent}
            </Toolbar>
          </AppBar>
        </div>
        <div
          style={{
            maxWidth,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
          data-testid={'childrenDiv'}
        >
          {this.props.children}
        </div>

        {getCookiesBanner()}
      </>
    );
  }
}

export default FreeBoardGamesBar;
