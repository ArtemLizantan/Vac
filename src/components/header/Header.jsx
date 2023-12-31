import React, { useState } from 'react';
import Logo from '../logo/Logo';
const Modal = React.lazy(() => import('../modal/Modal'));

import LinkLiner from '../../UI/links/linkLiner/LinkLiner';
import LinkSolid from '../../UI/links/linkSolid/LinkSolid';

import './header.scss';

const Header = ({ inventory }) => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    if (!modal) {
      setModal(!modal);
    }
  };

  const closeModal = () => {
    if (modal) {
      setModal(!modal);
    }
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__container">
            <div className="header__logo">
              <Logo theme={'light'} />
              <div className="header__inventory" style={{ display: `${inventory ? 'block' : 'none'}` }}>
                Invenroty
              </div>
            </div>
            <div className="header__wrapper">
              <div className="header__links">
                <div style={{ display: `${inventory ? 'none' : 'block'}` }}>
                  <LinkLiner to={'/catalog'} wx={137}>
                    Inventory
                  </LinkLiner>
                </div>
                <LinkSolid to={'/quiz'} wx={200} wm={178} ws={130}>
                  Request a car
                </LinkSolid>
              </div>
              <div className="header__burger" style={{ opacity: `${modal ? '0' : '1'}` }} onClick={openModal}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Modal state={modal} onClick={closeModal} />
    </>
  );
};

export default Header;
