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
    <HeaderWrapper>
      <Nav>
        <NavLogo>
          <NavLogoIcon />
          <NavLinkLogo href="#">Apex</NavLinkLogo>
        </NavLogo>
        <NavList>
          <NavItem>
            <NavLink href="#">Про нас</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Послуги</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Галерея</NavLink>
          </NavItem>
        </NavList>
      </Nav>
      <NavButton onClick={handleOpenModal}>Контакт</NavButton>
      {showModal && <Modal onClose={handleCloseModal} />}
      <ContactIcon />
    </HeaderWrapper>
  );
};

export default Header;
