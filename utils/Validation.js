import { Alert } from 'react-native';

  const validateEmail = (email) => {
    // Expresión regular para validar el correo electrónico
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^((?=.*[a-zA-Z])(?=.*\d)).{8,}$/;
    return passwordRegex.test(password)
  };

  const isEmptyText = (value) => {
    return value == '';
  }

const Validations = {
  validateEmail,
  validatePassword,
  isEmptyText
};


export default Validations;