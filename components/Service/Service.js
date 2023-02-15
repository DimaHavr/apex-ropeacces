import { useState } from 'react';
import Box from '../Box/Box';
import Modal from '../Modal/Modal';
import Image from 'next/image';

import {
  SectionService,
  SectionTitle,
  CollapseWrapper,
  CollapseContainer,
  CollapseContent,
  CollapseButton,
  Description,
  StyledImg,
  DescriptionBoxItem,
  SubTitle,
  CloseIcon,
  OpenIcon,
  ModalButton,
} from './Service.styled';

const serviceArray = [
  {
    title: 'Професійна мийка вікон',
    description:
      'qwertyuio  wqertyui edrtyui dfghj asdfghj sdfgh asdfgh sdfgh dfgh dsfgv Ми приділяємо велбезпеки. Усі працівники навчені процедурам безпеки та використанню вони дотримуються суворих протоколів',
    img: '/images/hero/heroBg.webp',
    alt: 'xxx',
    isOpen: false,
  },
  {
    title: 'Монтаж/демонтаж конструкцій',
    description: 'hhh',
    img: '/images/hero/heroBg.webp',
    alt: 'xxx',
    isOpen: false,
  },
  {
    title: 'Element 3',
    description: 'hhh',
    img: '/images/hero/heroBg.webp',
    alt: 'xxx',
    isOpen: false,
  },
];

const Service = () => {
  const [collapseState, setCollapseState] = useState(serviceArray);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const toggleCollapse = index => {
    const newCollapseState = [...collapseState];
    newCollapseState[index].isOpen = !newCollapseState[index].isOpen;
    setCollapseState(newCollapseState);
  };

  return (
    <SectionService id="service">
      <SectionTitle>Послуги</SectionTitle>
      {collapseState.map(({ title, description, img, alt, isOpen }, index) => (
        <CollapseWrapper key={index}>
          <CollapseButton onClick={() => toggleCollapse(index)}>
            <SubTitle> {title}</SubTitle>
            {isOpen ? <CloseIcon /> : <OpenIcon />}
          </CollapseButton>
          <CollapseContainer>
            <CollapseContent
              style={{
                transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
              }}
            >
              <Box
                style={{
                  display: isOpen ? 'flex' : 'none',
                }}
                display="flex"
                flexDirection="column"
              >
                <DescriptionBoxItem>
                  <Description>{description}</Description>
                  <StyledImg src={img} alt={alt} />
                </DescriptionBoxItem>
                <ModalButton onClick={handleOpenModal}>
                  Замовити послугу
                </ModalButton>
              </Box>
            </CollapseContent>
          </CollapseContainer>
        </CollapseWrapper>
      ))}
      {showModal && <Modal onClose={handleCloseModal} />}
    </SectionService>
  );
};

export default Service;
