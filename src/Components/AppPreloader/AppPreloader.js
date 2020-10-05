import React from 'react'
import { AppLoader, Spinner, SpinnerBox } from './styles'

const AppPreloader = () => {
  return (
    <AppLoader>
      <SpinnerBox>
        <Spinner />
      </SpinnerBox>
    </AppLoader>
  )
}

export default AppPreloader