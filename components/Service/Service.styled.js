import styled from "styled-components";

export const SectionService = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 15px 50px 15px;
  background-color: #f4f4f4;
`;

export const SectionTitle = styled.h2`
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

export const CollapseWrapper = styled.div`
  width: 100%;
`;
export const CollapseContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
`;

export const CollapseContent = styled.div`
  flex: 1;
  transition: all 0.3s ease;
  width: 100%;
`;

export const CollapseButton = styled.button`
  width: 100%;
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
  padding: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
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
