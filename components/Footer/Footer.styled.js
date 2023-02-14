import styled from "styled-components";
import { BsFacebook, BsTelegram } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

export const InstagramIcon = styled(AiFillInstagram)`
  width: 30px;
  height: 30px;
`;
export const FacebookIcon = styled(BsFacebook)`
  width: 25px;
  height: 25px;
`;
export const TelegramIcon = styled(BsTelegram)`
  width: 25px;
  height: 25px;
`;

export const SectionFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 15px 50px 15px;
  background-color: #2b2b2b;
`;
