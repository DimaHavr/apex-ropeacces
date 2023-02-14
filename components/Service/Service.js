import { useState } from "react";
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
} from "./Service.styled";

const Service = () => {
  const [collapseState, setCollapseState] = useState([
    {
      title: "Element 1",
      description: "hhh",
      img: "https://valiantsolutions.ca/wp-content/uploads/2020/11/Rope-Access-Valiant-Solutions-4-1200x650.jpg",
      alt: "xxx",
      isOpen: false,
    },
    {
      title: "Element 2",
      description: "hhh",
      img: "https://valiantsolutions.ca/wp-content/uploads/2020/11/Rope-Access-Valiant-Solutions-4-1200x650.jpg",
      alt: "xxx",
      isOpen: false,
    },
    {
      title: "Element 3",
      description: "hhh",
      img: "https://valiantsolutions.ca/wp-content/uploads/2020/11/Rope-Access-Valiant-Solutions-4-1200x650.jpg",
      alt: "xxx",
      isOpen: false,
    },
  ]);

  const toggleCollapse = (index) => {
    const newCollapseState = [...collapseState];
    newCollapseState[index].isOpen = !newCollapseState[index].isOpen;
    setCollapseState(newCollapseState);
  };

  return (
    <SectionService>
      <SectionTitle>Наші послуги</SectionTitle>
      {collapseState.map(({ title, description, img, alt, isOpen }, index) => (
        <CollapseWrapper key={index}>
          <CollapseButton onClick={() => toggleCollapse(index)}>
            {title}
            {isOpen ? " -" : " +"}
          </CollapseButton>
          <CollapseContainer>
            <CollapseContent
              style={{
                transform: isOpen ? "translateX(0)" : "translateX(-100%)",
                display: isOpen ? "block" : "none",
              }}
            >
              <DescriptionBoxItem>
                <Description>{description}</Description>
                <StyledImg src={img} alt={alt} />
              </DescriptionBoxItem>
            </CollapseContent>
          </CollapseContainer>
        </CollapseWrapper>
      ))}
    </SectionService>
  );
};

export default Service;
