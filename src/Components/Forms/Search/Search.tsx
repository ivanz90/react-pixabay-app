import React, { MutableRefObject } from 'react'
import { useSelector } from 'react-redux'
import { useForm, Controller } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { searchSelectors } from '../../../redux/ducks/search'
import { formatParams, parseParams } from '../../../shared/helpers'
import schema, { IInput } from './schema'
import TextInput from '../../_ui/TextInput'
import RadioGroup from '../../_ui/RadioGroup'
import Select from '../../_ui/Select'
import { FormWrapper, FormRow } from '../form-styles'

type FormData = {
  q: string
  image_type: string
  category: string
}

type FormElement = {
  current: MutableRefObject<HTMLFormElement> | object
}

const Search: React.FC = () => {
  const { inputs } = schema
  
  const isSubmitting = useSelector((state) => searchSelectors.selectIsPending(state))

  const formRef = React.useRef<HTMLFormElement>(null)

  const { handleSubmit, register, control } = useForm({
    defaultValues: parseParams()
  })

  const history = useHistory()

  const onSubmit = (data: FormData) => {
    const params = formatParams(data)
    history.replace(`/?${params}`)
  }

  const triggerSubmit = React.useCallback((f) => {
    f.dispatchEvent(new Event('submit', { cancelable: true }))
  }, [])

  return (
    <FormWrapper borderColor={'transparent'}>
      <form ref={formRef} onSubmit={handleSubmit(onSubmit)} noValidate>
        <FormRow display='flex'>
          {inputs.map((input: IInput) => {
            return (
              <React.Fragment key={input.id}>
                {input.element === 'text-input' && (
                  <TextInput
                    name={input.name}
                    title={input.title}
                    type={input.type}
                    ref={register({ ...input.validators })}
                    style={{ marginRight: '20px' }}
                    onBlur={() => triggerSubmit(formRef.current)}
                  />
                )}
                {input.element === 'select' && input.options && (
                  <Controller
                    control={control}
                    name={input.name}
                    rules={{ ...input.validators }}
                    defaultValue={input.options[0]}
                    render={({ value, ...rest }) => {
                      return (
                        <Select
                          options={input.options}
                          title={input.title}
                          defaultValue={value}
                          onBlur={rest.onBlur}
                          onChange={({ value }: any) => {
                            rest.onChange(value)
                            triggerSubmit(formRef.current)
                          }}
                        />
                      )
                    }}
                  />
                )}
              </React.Fragment>
            )
          })}
        </FormRow>
        <FormRow>
          {inputs
            .filter((input) => input.element === 'radio')
            .map((input) => {
              return (
                <RadioGroup
                  key={input.id}
                  name={input.name}
                  title={input.title}
                  register={register({ ...input.validators })}
                  options={input.options}
                  onChange={() => {triggerSubmit(formRef.current)}}
                />
              )
            })}
        </FormRow>
        <input type='submit' disabled={isSubmitting} style={{ display: 'none' }} />
      </form>
    </FormWrapper>
  )
}

export default Search


/*

temp 


onBlur={({ value }) => {
                            rest.onBlur(value)
                          }}


*/