import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { AppThemeContext } from '@/contexts/appThemeContext'

//COMPONENTS
import { Container, Grid } from '@mui/material'
import {
  Header,
  CardComponent,
  StyledButton,
  StyledH2,
  FormComponents,
} from '@/components'

//HOOKS
import { useFormValidation, useGet, usePut, useDelete } from '@/hooks'

//SERVICES
import { logout } from '@/services'

//TYPES
import {
  InputProps,
  ProfileData,
  ProfileEditableData,
  MessageProps,
} from '@/types'
import Cookies from 'js-cookie'

function Profile() {
  const themeContext = useContext(AppThemeContext)

  //HOOKS
  const [updateMessage, setUpdateMessage] =
    useState <MessageProps>({
      type: 'success',
      msg: '',
    })
  const clearMessage = () => {
    setTimeout(() => {
      setUpdateMessage({ type: 'success', msg: '' })
    }, 3000)
  }

  const {
    data: profileData,
    loading: profileLoading,
    error: profileError,
  } = useGet<ProfileData>('profile')

  const {
    data: profileUpdateData,
    putData: profilePutData,
    loading: profileUpdateLoading,
    error: profileUpdateError,
  } = usePut<ProfileEditableData>('profile/update')

  const {
    deleteData: profileDeleteData, 
    loading: profileDeleteLoading
  } = useDelete('profile/delete')

  useEffect(() => {
    if (profileData) {
      handleChange(0, profileData.name)
      handleChange(1, profileData.email)
      handleChange(2, profileData.phone)
    }
  }, [profileData])

  //FORM
  const inputs: InputProps[] = [
    {
      name: 'name',
      type: 'text',
      placeholder: 'Nome',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      disabled: true,
    },
    {
      name: 'phone',
      type: 'tel',
      placeholder: 'Telefone',
      required: true,
    },
  ]
  const { formValues, handleChange, formValid } = useFormValidation(inputs)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await profilePutData({
      name: String(formValues[0]),
      phone: String(formValues[2]),
    })
  }
  const handleDelete = async () => {
    if (confirm('Deseja realmente excluir sua conta? Delete seus leads antes.')) {
      try {
        await profileDeleteData()
        alert('Conta excluida com sucesso')
        Cookies.remove('Authorization')
        window.location.href = '/'
      } catch (e) {
        alert('Erro ao excluir conta')
      }
    }
  }

  useEffect(() => {
    if (profileUpdateData !== null) {
      setUpdateMessage({
        msg: 'Perfil atualizado com sucesso',
        type: 'success',
      })
    } else if (profileUpdateError) {
      setUpdateMessage({
        msg: 'Erro ao atualizar perfil',
        type: 'error',
      })
    } 
    clearMessage()
  }, [profileUpdateData, profileUpdateError])

  return (
    <>
      <Header />
      <Container className="mb-2" maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            {!profileError && (
              <CardComponent
                className={
                  profileLoading ? 'skeleton-loading skeleton-loading-mh-2' : ''
                }
              >
                {!profileLoading && profileData && (
                  <>
                    <StyledH2 className="mb-1">Seus Dados</StyledH2>
                    <FormComponents
                      inputs={inputs.map((input, index) => ({
                        ...input,
                        type: input.type,
                        placeholder: input.placeholder,
                        value: formValues[index],
                        onChange: (e: ChangeEvent<HTMLInputElement>) =>
                          handleChange(
                            index,
                            (e.target as HTMLInputElement).value
                          ),
                      }))}
                      buttons={[
                        {
                          className: 'primary',
                          disabled: !formValid || profileUpdateLoading,
                          type: 'submit',
                          onClick: handleSubmit,
                          children: profileUpdateLoading ? 'Carregando...' : 'Atualizar meu perfil',
                        },
                        {
                          className: 'alert',
                          disabled: profileDeleteLoading,
                          type: 'button',
                          onClick: handleDelete,
                          children: profileDeleteLoading ? 'Carregando...' : 'Excluir minha conta',
                        },
                      ]}
                      message={updateMessage}
                    />
                  </>
                )}
              </CardComponent>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <CardComponent>
              <StyledH2 className="mb-1">Definições de conta</StyledH2>
              <StyledButton
                className="primary mb-1"
                onClick={themeContext?.toggleTheme}
              >
                Trocar para tema{' '}
                {themeContext?.appTheme === 'light' ? 'escuro' : 'claro'}
              </StyledButton>
              <StyledButton className="alert" onClick={logout}>
                Sair
              </StyledButton>
            </CardComponent>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Profile
