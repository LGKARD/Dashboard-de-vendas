import { BannerImage, FormComponents } from '@/components'
import { Box, Container, Grid } from '@mui/material'

function Login() {
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
              <h1>LOGIN</h1>
              <FormComponents
                inputs={[
                  { type: 'email', placeholder: 'Email' },
                  { type: 'password', placeholder: 'Senha' },
                ]}
                buttons={[
                  { className: 'primary', type: 'submit', children: 'Login'},
                ]}
                message={{
                  msg: 'Sucesso!!!',
                  type: 'success',
                }}
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
