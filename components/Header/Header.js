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
} from "./Header.styled";
const Header = () => {
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
      <NavButton>Контакт</NavButton>
      <ContactIcon />
    </HeaderWrapper>
  );
};

export default Header;
