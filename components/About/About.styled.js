import styled from 'styled-components';
import Image from 'next/image';

export const SectionAbout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  padding: 50px 15px 50px 15px;
`;

export const TextName = styled.p`
  text-align: center;
  font-weight: 900;
  font-size: 44px;
  line-height: 1.36;
  text-align: center;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #000;
  text-shadow: 0 -6px 18px rgba(0, 0, 0, 0.35);
  animation: focus-in-contract-bck 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @keyframes focus-in-contract-bck {
    0% {
      letter-spacing: 1em;
      -webkit-transform: translateZ(300px);
      transform: translateZ(300px);
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateZ(12px);
      transform: translateZ(12px);
      -webkit-filter: blur(0);
      filter: blur(0);
      opacity: 1;
    }
  }
`;

export const DescriptionBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
  gap: 20px;
`;

export const Description = styled.p`
  max-width: 500px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.62;
  text-align: center;
  letter-spacing: 0.06em;
  color: #000;
  text-align: inherit;
  @media (max-width: 1050px) {
    max-width: 350px;
    height: 300px;
  }
  @media (max-width: 768px) {
    max-width: 100%;
    height: auto;
  }
`;

export const DescriptionBoxItem = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const StyledImg = styled.img`
  width: 500px;
  height: 300;
  overflow: hidden;
  object-fit: cover;
  box-shadow: 1.5px 1px 27.5px 2px rgba(0, 0, 0, 0.4);
  @media (max-width: 1050px) {
    max-width: 350px;
    height: 300px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
