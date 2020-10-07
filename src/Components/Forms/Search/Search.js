import React from 'react'
import { useSelector } from 'react-redux'
import { useForm, Controller } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { searchSelectors } from '../../../redux/ducks/search'
import { formatParams, parseParams } from '../../../shared/helpers'
import schema from './schema'
import TextInput from '../../_ui/TextInput'
import RadioGroup from '../../_ui/RadioGroup'
import Select from '../../_ui/Select'
import { FormWrapper, FormRow } from '../form-styles'

const Search = () => {
  const { inputs } = schema
  
  const isSubmitting = useSelector((state) => searchSelectors.selectIsPending(state))

  const formRef = React.useRef()

  const { handleSubmit, register, control } = useForm({
    defaultValues: parseParams()
  })

  const history = useHistory()

  const onSubmit = (data) => {
    const params = formatParams(data)
    history.replace(`/?${params}`)
  }

  const triggerSubmit = React.useCallback(() => {
    formRef.current.dispatchEvent(new Event('submit', { cancelable: true }))
  }, [])

  return (
    <FormWrapper borderColor={'transparent'}>
      <form ref={formRef} onSubmit={handleSubmit(onSubmit)} noValidate>
        <FormRow display='flex'>
          {inputs.map((input) => {
            return (
              <React.Fragment key={input.id}>
                {input.element === 'text-input' && (
                  <TextInput
                    name={input.name}
                    title={input.title}
                    type={input.type}
                    ref={register({ ...input.validators })}
                    style={{ marginRight: '20px' }}
                    onBlur={() => triggerSubmit()}
                  />
                )}
                {input.element === 'select' && (
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
                          onBlur={({ value }) => {
                            rest.onBlur(value)
                          }}
                          onChange={({ value }) => {
                            rest.onChange(value)
                            triggerSubmit()
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
                  onChange={triggerSubmit}
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
