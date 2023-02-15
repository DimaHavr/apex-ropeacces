import { useState } from 'react';

import Modal from '../Modal/Modal';
import { SectionHero, Title, Text, Button } from './Hero.styled';

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <SectionHero>
      <Title>Висотні роботи в Івано-Франківську</Title>
      <Text>"Немає надто високої висоти, немає надто складного завдання"</Text>
      <Button onClick={handleOpenModal}>Замовити послуги</Button>
      {showModal && <Modal onClose={handleCloseModal} />}
    </SectionHero>
  );
};

export default Hero;
