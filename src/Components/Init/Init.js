import React, { useCallback, useEffect, useState } from 'react'
import AppPreloader from '../AppPreloader'

const Init = ({ children }) => {
  const [inited, setInited] = useState(false)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setInited(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return <>{inited ? children : <AppPreloader />}</>
}

export default Init