import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// @mui
import { Link, Stack, IconButton, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';

import { userLogin } from '../../../../contracts/admin-http-service';
// components
import Iconify from '../../common/Iconify';
import { FormProvider, RHFTextField } from '../../common/hook-form';
import LoginSchema from "./login-validation";
// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  

  const defaultValues = {
    email: '',
    password: ''
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  
  const onSubmit = async () => {
    // const Email = methods.getValues("email");
    // const Password = methods.getValues("password");
    // console.log( await userLogin({Email,Password}));
   
    const response = await userLogin(methods.getValues());    
    if(response.status === 200){
      navigate('/baselayout/home', { replace: true });
    }      
  };

  const navigateRegister = function() {
    navigate('/register', { replace: true });
  };

  const navigatePasswordReset = function() {
    navigate('/password-reset', { replace: true });
  }

  

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <RHFTextField name="email" label="Email"  />

        <RHFTextField
          name="password" 
          label="Şifre"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <Link component="button" variant="subtitle2" underline="hover" onClick={() => {navigateRegister()}} >
          Hesabınız yok mu? Kayıt ol!
        </Link>
        <Link component="button" variant="subtitle2" underline="hover" onClick={() => {navigatePasswordReset()}}>
          Parolanızı mı unuttunuz?
        </Link>
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting} >
        Giriş Yap
      </LoadingButton>
    </FormProvider>
  );
}
