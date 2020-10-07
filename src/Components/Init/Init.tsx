import React from 'react'
import AppPreloader from '../AppPreloader'

const Init: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [inited, setInited] = React.useState<boolean>(false)
  
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setInited(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return <>{inited ? children : <AppPreloader />}</>
}

export default Init