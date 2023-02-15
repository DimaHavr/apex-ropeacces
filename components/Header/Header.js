import { useState } from 'react';

import Modal from '../Modal/Modal';
import {
  HeaderWrapper,
  Nav,
  NavList,
  NavItem,
  NavLink,
  NavLinkLogo,
  NavLogo,
  NavButton,
  ContactIcon,
  NavLogoIcon,
} from './Header.styled';
const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <HeaderWrapper id="header">
      <Nav>
        <NavLogo>
          <NavLogoIcon />
          <NavLinkLogo href="#">Apex</NavLinkLogo>
        </NavLogo>
        <NavList>
          <NavItem>
            <NavLink href="#about">Про нас</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#service">Послуги</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#gallery">Галерея</NavLink>
          </NavItem>
        </NavList>
      </Nav>
      <NavButton onClick={handleOpenModal}>Контакт</NavButton>
      {showModal && <Modal onClose={handleCloseModal} />}
      <ContactIcon onClick={handleOpenModal} />
    </HeaderWrapper>
  );
};

export default Header;
