import styled from "styled-components";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GiMountainClimbing } from "react-icons/gi";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  box-shadow: inset -0.5px -10.5px 13.5px -6px rgba(0, 0, 0, 0.43);
  @media (max-width: 480px) {
    padding: 15px 20px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const NavItem = styled.li`
  text-shadow: 0 -6px 18px rgba(0, 0, 0, 0.35);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    text-decoration: none;
    transform: scale(1.05);
    color: #c4d600;
  }
`;

export const NavLinkLogo = styled.a`
  font-weight: 900;
  font-size: 24px;
  line-height: 1.36;
  max-width: 585px;
  text-align: center;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-decoration: none;
  color: #000;
  text-shadow: 0 -6px 18px rgba(0, 0, 0, 0.35);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  animation: tracking-in-contract-bck 1s cubic-bezier(0.215, 0.61, 0.355, 1)
    both;

  &:hover {
    text-decoration: none;
    transform: scale(1.05);
    color: #c4d600;
  }

  @media (max-width: 580px) {
    display: none;
  }

  @keyframes tracking-in-contract-bck {
    0% {
      letter-spacing: 1em;
      -webkit-transform: translateZ(400px);
      transform: translateZ(400px);
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      opacity: 1;
    }
  }
`;
export const NavLink = styled.a`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.88;
  letter-spacing: 0.06em;
  text-decoration: none;
  color: #000;
  text-shadow: 0 -6px 18px rgba(0, 0, 0, 0.35);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    text-decoration: none;
    color: #c4d600;
  }

  @media (max-width: 480px) {
    font-weight: 600;
    font-size: 12px;
    line-height: 1.88;
  }
`;

export const NavLogo = styled.p`
  display: flex;
  align-items: center;
  margin-right: 30px;
  @media (max-width: 580px) {
    margin-right: 5px;
  }
`;

export const NavLogoIcon = styled(GiMountainClimbing)`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

export const NavButton = styled.button`
  display: block;
  font-family: inherit;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.88;
  letter-spacing: 0.06em;
  color: #fff;
  cursor: pointer;
  background-color: #000;
  border: 0px;
  border-radius: 4px;
  padding: 10px 30px;
  box-shadow: 0 18px 28px 2px rgba(0, 0, 0, 0.43);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #c4d600;
    color: #000;
    transform: scale(1.03);
    box-shadow: 0 18px 28px 2px rgba(0, 0, 0, 0.53);
  }
  @media (max-width: 480px) {
    display: none;
  }
`;

export const ContactIcon = styled(BsFillTelephoneFill)`
  display: none;
  @media (max-width: 480px) {
    display: block;
    width: 25px;
    height: 25px;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
      transform: scale(1.03);
      fill: #c4d600;
    }
  }
`;
