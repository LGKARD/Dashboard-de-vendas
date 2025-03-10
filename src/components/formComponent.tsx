import { FormComponentsProps } from '@/types'

function FormComponents(props: FormComponentsProps) {
  const { inputs, buttons, message } = props
  return (
    <form>
      {inputs.map((inputProps, index) => (
        <input key={index} {...inputProps} />
      ))}
      {buttons.map((buttonProps, index) => (
        <button key={index} {...buttonProps} />
      ))}
      {message && (
        <div style={{ color: message.type === 'success' ? 'green' : 'red' }}>
          {message.msg}
        </div>
      )}
    </form>
  )
}

export default FormComponents