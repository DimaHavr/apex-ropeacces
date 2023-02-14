import { useState } from 'react';
import Box from '../Box/Box';
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

const Service = () => {
  const [collapseState, setCollapseState] = useState([
    {
      title: 'Професійна мийка вікон',
      description:
        'qwertyuio  wqertyui edrtyui dfghj asdfghj sdfgh asdfgh sdfgh dfgh dsfgv Ми приділяємо велбезпеки. Усі працівники навчені процедурам безпеки та використанню вони дотримуються суворих протоколів',
      img: 'https://valiantsolutions.ca/wp-content/uploads/2020/11/Rope-Access-Valiant-Solutions-4-1200x650.jpg',
      alt: 'xxx',
      isOpen: false,
    },
    {
      title: 'Монтаж/демонтаж конструкцій',
      description: 'hhh',
      img: 'https://valiantsolutions.ca/wp-content/uploads/2020/11/Rope-Access-Valiant-Solutions-4-1200x650.jpg',
      alt: 'xxx',
      isOpen: false,
    },
    {
      title: 'Element 3',
      description: 'hhh',
      img: 'https://valiantsolutions.ca/wp-content/uploads/2020/11/Rope-Access-Valiant-Solutions-4-1200x650.jpg',
      alt: 'xxx',
      isOpen: false,
    },
  ]);

  const toggleCollapse = index => {
    const newCollapseState = [...collapseState];
    newCollapseState[index].isOpen = !newCollapseState[index].isOpen;
    setCollapseState(newCollapseState);
  };

  return (
    <SectionService>
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
                <ModalButton>Замовити послугу</ModalButton>
              </Box>
            </CollapseContent>
          </CollapseContainer>
        </CollapseWrapper>
      ))}
    </SectionService>
  );
};

export default Service;
