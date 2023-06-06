import { Alert } from 'react-native';

  const validateEmail = (email) => {
    // Expresión regular para validar el correo electrónico
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePassword = () => {
    // Expresión regular para validar la contraseña
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (passwordRegex.test(password)) {
      // La contraseña es válida
      Alert.alert('Contraseña válida');
    } else {
      // La contraseña es inválida
      Alert.alert(
        'Contraseña inválida',
        'La contraseña debe contener al menos 8 caracteres, incluyendo una letra mayúscula, una letra minúscula, un carácter especial y un número.'
      );
    }
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