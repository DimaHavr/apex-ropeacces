import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';
import { BsPlusLg } from 'react-icons/bs';

export const OpenIcon = styled(BsPlusLg)`
  width: 25px;
  height: 25px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.03);
    fill: #c4d600;
  }
`;

export const CloseIcon = styled(GrClose)`
  width: 25px;
  height: 25px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.03);
    fill: red;
  }
`;

export const SectionService = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 15px 50px 15px;
  background-color: #f4f4f4;
`;

export const SectionTitle = styled.p`
  text-align: center;
  font-weight: 900;
  font-size: 44px;
  line-height: 1.36;
  text-align: center;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #000;
  margin-bottom: 30px;
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
export const SubTitle = styled.h2`
  text-align: center;
  font-family: inherit;
  font-weight: 900;
  font-size: 16px;
  line-height: 1.88;
  letter-spacing: 0.06em;
  color: #000;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
export const CollapseWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
export const CollapseContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
`;

export const CollapseContent = styled.div`
  flex: 1;
  transition: all 1s ease-in-out;
  width: 100%;
`;

export const CollapseButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #c4d600;
  }
`;

export const Description = styled.p`
  max-width: 500px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.62;

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
    text-align: center;
  }
`;

export const DescriptionBoxItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  gap: 20px;
  padding: 20px;
  animation: fade-in-left 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }

  @keyframes fade-in-left {
    0% {
      -webkit-transform: translateX(-50px);
      transform: translateX(-50px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

export const StyledImg = styled.img`
  max-width: 500px;
  height: auto;
  overflow: hidden;
  object-fit: cover;
  box-shadow: 1.5px 1px 27.5px 2px rgba(0, 0, 0, 0.4);
  @media (max-width: 1050px) {
    max-width: 350px;
    height: 300px;
  }
  @media (max-width: 768px) {
    max-width: 280px;
    box-shadow: 1.5px 1px 4.5px 1px rgba(0, 0, 0, 0.4);
    height: auto;
  }
`;

export const ModalButton = styled.button`
  display: block;
  font-family: inherit;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.88;
  letter-spacing: 0.06em;
  color: #000;
  cursor: pointer;
  background-color: #c4d600;
  border: 0px;
  border-radius: 4px;
  padding: 10px 30px;
  margin: 20px 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #000;
    border-radius: 4px;
    transform: scale(1.01);
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
