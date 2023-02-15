import styled from 'styled-components';

export const SectionGallery = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 15px 50px 15px;
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

export const GalleryContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const GalleryImg = styled.img`
  max-width: 800px;
  height: auto;
  object-fit: cover;
  cursor: grab;
  @media (max-width: 768px) {
    max-width: 400px;
  }
  @media (max-width: 480px) {
    max-width: 280px;
  }
`;
