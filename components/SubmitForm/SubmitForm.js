import { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import {
  FormContainer,
  FormInput,
  FormButton,
  EmailIcon,
  InputContainer,
  ContactIcon,
  CommentIcon,
  UserIcon,
  CloseButton,
} from './SubmitForm.styled';

const SubmitForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [textArea, setTextArea] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();
    onClose();
    Notify.success('Заявка надіслана! Очікуйте на контакт з менеджером...');
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <InputContainer>
          <UserIcon />
          <FormInput
            type="name"
            placeholder="Ім'я"
            value={name}
            onChange={event => setName(event.target.value)}
            required
          />
        </InputContainer>
        <InputContainer>
          <EmailIcon />
          <FormInput
            type="email"
            placeholder="Email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <ContactIcon />
          <FormInput
            type="phone"
            placeholder="Номер телефону"
            value={phoneNumber}
            onChange={event => setPhoneNumber(event.target.value)}
            required
          />
        </InputContainer>
        <InputContainer>
          <CommentIcon />
          <FormInput
            type="text"
            placeholder="Комментар"
            value={textArea}
            onChange={event => setTextArea(event.target.value)}
          />
        </InputContainer>
        <FormButton type="submit">Надіслати</FormButton>
      </form>
      <CloseButton onClick={onClose} />
    </FormContainer>
  );
};

export default SubmitForm;
