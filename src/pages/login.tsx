import { Box, Container, Grid } from '@mui/material'
import React, { ChangeEvent, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import Cookies from 'js-cookie'

//COMPONENT
import { BannerImage, FormComponents, Logo, StyledH1, StyledP } from '@/components'

//UTILS
import { jwtExpirationDateConverter, pxToRem } from '@/utils'



//HOOKS
import { useFormValidation, usePost } from '@/hooks'

//TYPES
import { DecodedJwt, MessageProps, LoginData, LoginPostData} from '@/types'

function Login() {
  const navigate = useNavigate()
  const inputs = [
    { type: 'email', placeholder: 'Email' },
    { type: 'password', placeholder: 'Senha' },
  ]
  const {data, loading, error, postData} = usePost<LoginData, LoginPostData>('/login')
  const { formValues, handleChange, formValid } = useFormValidation(inputs)
  const handleMessage = (): MessageProps => {
    if (!error) return {msg:'', type:'success'}
    switch (error) {
      case 401:
        return {msg:'Email ou senha incorretos', type:'error'}
      default:
        return {msg:'Erro ao logar', type:'error'}
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await postData({email: String(formValues[0]), password: String(formValues[1])});
  }
  useEffect(() => {
    if (data?.jwt_token) {
      const decoded: DecodedJwt = jwtDecode(data.jwt_token);
      Cookies.set('Authorization', data.jwt_token, {
        expires: jwtExpirationDateConverter(decoded.exp),
        secure: true,

      })
      
    }

    if (Cookies.get('Authorization')) navigate('/home');
  }, [data, navigate]);
  return (
    <>
      <Box>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{ display: 'flex', alignItems: 'center', height: '100vh' }}
          >
            <Container maxWidth="sm">
              <Box sx={{ marginBottom: pxToRem(24) }}>
                <Logo height={41} width={100} />
              </Box>
              <Box sx={{ marginBottom: pxToRem(24) }}>
                <StyledH1>Bem-vindo</StyledH1>
                <StyledP>Digite sua senha e email para logar</StyledP>
              </Box>
              <FormComponents
                inputs={inputs.map((input, index) => ({
                  type: input.type,
                  placeholder: input.placeholder,
                  value: formValues[index],
                  onChange: (e: ChangeEvent<HTMLInputElement>) =>
                    handleChange(index, (e.target as HTMLInputElement).value),
                }))}
                buttons={[
                  {
                    className: 'primary',
                    disabled: !formValid || loading,
                    type: 'submit',
                    onClick: handleSubmit,
                    children: loading ? 'Carregando...' : 'Login',
                  },
                ]}
                message={handleMessage()}
              />
            </Container>
          </Grid>
          <Grid item sm={6} sx={{ display: { xs: 'none', sm: 'block' } }}>
            <BannerImage />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Login
