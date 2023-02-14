import {
  SectionAbout,
  TextName,
  Description,
  DescriptionBox,
  StyledImg,
  DescriptionBoxItem,
} from "./About.styled";

const About = () => {
  return (
    <SectionAbout>
      <TextName>Apex</TextName>
      <DescriptionBox>
        <DescriptionBoxItem>
          <Description>
            Apex - це компанія, яка спеціалізується на наданні послуг з роботи
            на висоті різним клієнтам. Команда висококваліфікованих і
            досвідчених техніків виконує широкий спектр робіт на висоті,
            включаючи встановлення, технічне обслуговування, перевірку та ремонт
            різного обладнання та інфраструктури на висоті.
          </Description>
          <StyledImg
            src="https://valiantsolutions.ca/wp-content/uploads/2020/11/Rope-Access-Valiant-Solutions-4-1200x650.jpg"
            alt="My Image"
          />
        </DescriptionBoxItem>
        <DescriptionBoxItem>
          <StyledImg
            src="https://valiantsolutions.ca/wp-content/uploads/2020/11/Rope-Access-Valiant-Solutions-4-1200x650.jpg"
            alt="My Image"
          />
          <Description>
            Ми приділяємо велику увагу безпеці та маємо комплексну програму
            безпеки. Усі працівники навчені процедурам безпеки та використанню
            спеціалізованого обладнання, і вони дотримуються суворих протоколів
            техніки безпеки, щоб забезпечити безпечне та ефективне виконання
            роботи.
          </Description>
        </DescriptionBoxItem>

        <DescriptionBoxItem>
          <Description>
            Надаємо послуги з роботи на висоті різноманітним клієнтам, включаючи
            приватну нерухомості, власників будівель, державних установ і
            промислових об’єктів. Компанія розташована у місті Івано-Франківськ
            та надає послуги по всій області...
          </Description>
          <StyledImg
            src="https://valiantsolutions.ca/wp-content/uploads/2020/11/Rope-Access-Valiant-Solutions-4-1200x650.jpg"
            alt="My Image"
          />
        </DescriptionBoxItem>
      </DescriptionBox>
    </SectionAbout>
  );
};

export default About;
