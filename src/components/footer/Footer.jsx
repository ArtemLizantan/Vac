import React from 'react';

import { Link } from 'react-router-dom';

import Logo from '../logo/Logo';

import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <Logo theme={'dark'} />
          <div className="footer__terms footer__terms_mobile">
            <Link to="/terms" className="footer__terms-item">
              Terms
            </Link>
            <Link to="/privacy" className="footer__terms-item">
              Privacy
            </Link>
          </div>
          <div className="footer__container">
            <div className="footer__terms">
              <Link to="/terms" className="footer__terms-item">
                Terms
              </Link>
              <Link to="/privacy" className="footer__terms-item">
                Privacy
              </Link>
            </div>
            <div className="footer__social">
              <a href="#" className="footer__social-item">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="30" height="30" rx="2" fill="white" />
                  <path
                    d="M14.8575 10.6955C12.5995 10.6955 10.7285 12.5342 10.7285 14.8245C10.7285 17.1149 12.5672 18.9536 14.8575 18.9536C17.1479 18.9536 18.9866 17.0826 18.9866 14.8245C18.9866 12.5665 17.1156 10.6955 14.8575 10.6955ZM14.8575 17.4697C13.4059 17.4697 12.2124 16.2762 12.2124 14.8245C12.2124 13.3729 13.4059 12.1794 14.8575 12.1794C16.3092 12.1794 17.5027 13.3729 17.5027 14.8245C17.5027 16.2762 16.3092 17.4697 14.8575 17.4697Z"
                    fill="#7481FF"
                  />
                  <path
                    d="M19.1503 11.5343C19.667 11.5343 20.0858 11.1154 20.0858 10.5988C20.0858 10.0821 19.667 9.66329 19.1503 9.66329C18.6337 9.66329 18.2148 10.0821 18.2148 10.5988C18.2148 11.1154 18.6337 11.5343 19.1503 11.5343Z"
                    fill="#7481FF"
                  />
                  <path
                    d="M21.5671 8.17972C20.7284 7.30875 19.5348 6.85714 18.18 6.85714H11.5348C8.72839 6.85714 6.85742 8.72811 6.85742 11.5346V18.1475C6.85742 19.5346 7.30903 20.7281 8.21226 21.5991C9.08323 22.4378 10.2445 22.8571 11.5671 22.8571H18.1477C19.5348 22.8571 20.6961 22.4055 21.5348 21.5991C22.4058 20.7604 22.8574 19.5668 22.8574 18.1797V11.5346C22.8574 10.1797 22.4058 9.01843 21.5671 8.17972ZM21.4381 18.1797C21.4381 19.1797 21.0832 19.9862 20.5026 20.5346C19.9219 21.0829 19.1155 21.3733 18.1477 21.3733H11.5671C10.5994 21.3733 9.79291 21.0829 9.21226 20.5346C8.63162 19.9539 8.34129 19.1475 8.34129 18.1475V11.5346C8.34129 10.5668 8.63162 9.76037 9.21226 9.17972C9.76065 8.63133 10.5994 8.34101 11.5671 8.34101H18.2123C19.18 8.34101 19.9865 8.63133 20.5671 9.21198C21.1155 9.79262 21.4381 10.5991 21.4381 11.5346V18.1797Z"
                    fill="#7481FF"
                  />
                </svg>
              </a>
              <a href="#" className="footer__social-item">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="30" height="30" rx="2" fill="white" />
                  <path
                    d="M17.9555 22.4946V15.608H20.2855L20.868 12.7386H17.9555V11.5909C17.9555 10.4431 18.5391 9.86926 19.703 9.86926H20.868V6.99986C20.2855 6.99986 19.5632 6.99986 18.538 6.99986C16.3973 6.99986 15.0429 8.65321 15.0429 11.017V12.7386H12.7129V15.608H15.0429V22.4946H17.9555Z"
                    fill="#7481FF"
                  />
                </svg>
              </a>
              <a href="#" className="footer__social-item">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="30" height="30" rx="2" fill="white" />
                  <path
                    d="M23.3847 11.2774C23.1902 10.5544 22.6203 9.98455 21.8974 9.78989C20.5769 9.42857 15.2947 9.42857 15.2947 9.42857C15.2947 9.42857 10.0127 9.42857 8.69221 9.77619C7.98328 9.97065 7.39939 10.5545 7.20493 11.2774C6.85742 12.5978 6.85742 15.3362 6.85742 15.3362C6.85742 15.3362 6.85742 18.0883 7.20493 19.3949C7.3996 20.1178 7.96938 20.6877 8.69231 20.8823C10.0266 21.2437 15.2949 21.2437 15.2949 21.2437C15.2949 21.2437 20.5769 21.2437 21.8974 20.8961C22.6204 20.7016 23.1902 20.1317 23.3849 19.4089C23.7323 18.0883 23.7323 15.3501 23.7323 15.3501C23.7323 15.3501 23.7462 12.5978 23.3847 11.2774ZM13.613 17.866V12.8064L18.0054 15.3362L13.613 17.866Z"
                    fill="#7481FF"
                  />
                </svg>
              </a>
            </div>
            <div className="footer__created">
              Created by
              <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.40826 0.966805C3.54996 2.25904 2.88358 4.77634 1.55082 9.81093L1.48941 10.0429C0.156645 15.0775 -0.509738 17.5948 0.461257 19.6544C0.609056 19.9679 0.782656 20.2686 0.980244 20.5533C2.27834 22.4241 4.79155 23.1057 9.81798 24.4689C14.8444 25.8322 17.3576 26.5138 19.4059 25.5507C19.7177 25.4041 20.0166 25.2315 20.2994 25.0348C21.3665 24.2928 22.0406 23.1468 22.6735 21.3522H21.2149C21.1078 21.3522 21.0211 21.2642 21.0211 21.1572C21.0211 20.9773 20.7854 20.881 20.6434 20.9913C20.1493 21.3752 19.5215 21.5672 18.7599 21.5672C17.7583 21.5672 16.9034 21.1782 16.1952 20.4002C15.487 19.612 15.1329 18.6498 15.1329 17.5135C15.1329 16.3773 15.487 15.4202 16.1952 14.6422C16.9034 13.854 17.7583 13.4599 18.7599 13.4599C19.5215 13.4599 20.1493 13.6518 20.6434 14.0358C20.7854 14.1461 21.0211 14.0532 21.0211 13.8734V10.7977C21.0211 10.6906 21.1078 10.6039 21.2149 10.6039H23.1036C23.2106 10.6039 23.2974 10.6906 23.2974 10.7977V19.3612C23.563 18.4341 23.8412 17.383 24.1569 16.1907L24.2183 15.9587L24.2183 15.9587C25.551 10.9241 26.2174 8.40682 25.2464 6.34724C25.0986 6.03374 24.925 5.73305 24.7274 5.44829C23.4293 3.57755 20.9161 2.89593 15.8897 1.53268C10.8633 0.169432 8.35006 -0.512192 6.30177 0.450954C5.98999 0.597558 5.69112 0.770109 5.40826 0.966805ZM12.7084 12.9992C13.0827 12.9992 13.4014 12.8662 13.6644 12.6C13.9376 12.3236 14.0742 11.9961 14.0742 11.6173C14.0742 11.2386 13.9376 10.9161 13.6644 10.6499C13.4014 10.3736 13.0827 10.2354 12.7084 10.2354C12.3341 10.2354 12.0103 10.3736 11.7371 10.6499C11.4741 10.9161 11.3426 11.2386 11.3426 11.6173C11.3426 11.9961 11.4741 12.3236 11.7371 12.6C12.0103 12.8662 12.3341 12.9992 12.7084 12.9992ZM11.5702 21.1584C11.5702 21.2655 11.657 21.3522 11.764 21.3522H13.6528C13.7598 21.3522 13.8466 21.2655 13.8466 21.1584V13.8686C13.8466 13.7616 13.7598 13.6748 13.6528 13.6748H11.764C11.657 13.6748 11.5702 13.7616 11.5702 13.8686V21.1584ZM19.2152 19.3868C18.679 19.3868 18.2439 19.2179 17.9101 18.8801C17.5762 18.5423 17.4093 18.0868 17.4093 17.5135C17.4093 16.9403 17.5762 16.4848 17.9101 16.147C18.2439 15.8092 18.679 15.6403 19.2152 15.6403C19.7514 15.6403 20.1864 15.8092 20.5203 16.147C20.8541 16.4848 21.0211 16.9403 21.0211 17.5135C21.0211 18.0868 20.8541 18.5423 20.5203 18.8801C20.1864 19.2179 19.7514 19.3868 19.2152 19.3868Z"
                  fill="white"
                />
                <path
                  d="M26.5712 21.3529C27.3612 21.3529 27.9978 20.7106 27.9978 19.9134C27.9978 19.1163 27.3612 18.4739 26.5712 18.4739C25.7813 18.4739 25.1523 19.1163 25.1523 19.9134C25.1523 20.7106 25.7813 21.3529 26.5712 21.3529Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="footer__copyright">©Copyright, 2020. Vehicle Approval</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
