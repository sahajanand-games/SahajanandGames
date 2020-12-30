import React from 'react';

const ConsentFlag = 'SHJ_COOKIE_CONSENT';

interface ICookiesBannerState {
  visible: boolean;
}

class CookiesBanner extends React.Component<{}, ICookiesBannerState> {
  constructor(props) {
    super(props);
    this.state = {
      visible: typeof window !== 'undefined' && localStorage.getItem(ConsentFlag) !== 'yes',
    };
  }

  render() {
    if (!this.state.visible) {
      return null;
    }

    return (
      <div
        style={{
          alignItems: 'baseline',
          background: '#353535',
          color: 'white',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          left: '0',
          position: 'fixed',
          width: '100%',
          zIndex: 999,
          bottom: '0',
        }}
      >
        <div
          style={{
            flex: '1 0 300px',
            margin: '15px',
          }}
        >
          This website uses cookies to enhance the user experience. By continuing to use our website, you agree to the
          use of cookies.{' '}
          <span style={{ fontSize: '10px' }}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://sahajanand-games.com/docs/?path=/story/information-cookie-use--page"
              style={{ color: 'pink' }}
            >
              Read more
            </a>
          </span>
        </div>
        <div>
          <button
            key="acceptCookieButton"
            style={{
              background: '#43a047',
              border: '0',
              borderRadius: '0px',
              boxShadow: 'none',
              color: 'white',
              cursor: 'pointer',
              flex: '0 0 auto',
              padding: '8px 32px',
              margin: '15px',
              fontSize: '16px',
            }}
            aria-label="Accept Cookies"
            onClick={() => {
              if (typeof window !== 'undefined') {
                localStorage.setItem(ConsentFlag, 'yes');
                this.setState({ visible: false });
              }
            }}
          >
            Accept
          </button>
        </div>
      </div>
    );
  }
}

export default CookiesBanner;
