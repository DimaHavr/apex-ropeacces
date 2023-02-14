import styled from "styled-components";

export const SectionHero = styled.div`
  max-width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  background-image: linear-gradient(#0000003e, rgba(0, 0, 0, 0.5)),
    url("https://www.equinoxaccess.com/site/assets/files/1107/20160109_145422.jpg");

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: 3px 3px 10px 7px rgba(0, 0, 0, 0.4);
`;

export const Title = styled.h1`
  display: flex;
  font-weight: 900;
  font-size: 44px;
  line-height: 1.36;
  max-width: 585px;
  text-align: center;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #fff;
  text-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);
  animation: text-focus-in 0.7s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;

  @keyframes text-focus-in {
    0% {
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }

  @media (max-width: 480px) {
    font-size: 26px;
    line-height: 1.62;
    max-width: 360px;
  }
`;

export const Text = styled.p`
  font-weight: 900;
  font-size: 16px;
  line-height: 1.62;
  text-align: center;
  letter-spacing: 0.06em;
  color: #fff;
  text-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);
  animation: text-focus-in 1.2s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;

  @keyframes text-focus-in {
    0% {
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }
`;

export const Button = styled.button`
  display: block;
  font-family: inherit;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.88;
  letter-spacing: 0.06em;
  color: #000;
  cursor: pointer;
  background-color: #fff;
  border: 0px;
  border-radius: 4px;
  padding: 10px 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #c4d600;
    color: #000;
    box-shadow: 0 18px 28px 2px rgba(0, 0, 0, 0.43);

    transform: scale(1.03);
  }

  animation: text-focus-in 1.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;

  @keyframes text-focus-in {
    0% {
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }
`;
