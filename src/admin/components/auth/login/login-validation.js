import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Geçerli bir email adresi giriniz..').required('Email adresinizi giriniz..'),
    password: Yup.string().required('Şifrenizi giriniz..'),
  });


  export default LoginSchema;