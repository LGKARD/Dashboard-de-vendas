import { StyledButton, StyledInput } from '@/components'
import { FormComponentsProps } from '@/types'
import { pxToRem } from '@/utils'
import styled from 'styled-components'

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: ${pxToRem(16)};
`

function FormComponents(props: FormComponentsProps) {
  const { inputs, buttons, message } = props
  return (
    <StyledForm>
      {inputs.map((inputProps, index) => (
        <StyledInput key={index} {...inputProps} />
      ))}
      {buttons.map((buttonProps, index) => (
        <StyledButton key={index} {...buttonProps} />
      ))}
      {message && (
        <div style={{ color: message.type === 'success' ? 'green' : 'red' }}>
          {message.msg}
        </div>
      )}
    </StyledForm>
  )
}

export default FormComponents