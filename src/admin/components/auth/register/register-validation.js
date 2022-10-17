import * as Yup from 'yup';

const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().required('Ad boş bırakılamaz!'),
    lastName: Yup.string().required('Soyad boş bırakılamaz!'),
    email: Yup.string().email('Geçerli bir email adresi giriniz..').required('Email boş bırakılamaz!'),
    password: Yup.string().required('Şifre boş bırakılamaz!'),
    passwordConfirm: Yup.string().oneOf([Yup.ref('Password')],"Parolalar uyuşmuyor.").required("Şifre tekrar boş bırakılamaz!")
  });

  export default RegisterSchema;