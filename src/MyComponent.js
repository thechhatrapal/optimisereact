import React, { useCallback, useEffect, useMemo } from 'react'
import { value } from './value'

function MyComponent(props) {

    const genLength = () => {
        return value.length
    }
    const calculateLenght = useMemo(() => genLength(), [])
    const eventListenerFunction = useCallback( () => {
        console.log('loading')
      },[])
    
  
    useEffect(() => {
      window.addEventListener('load', eventListenerFunction)
  
      return () => {
        window.removeEventListener('load', eventListenerFunction)
      }
    }, [props.state, eventListenerFunction])
  return (
    <div>
        <h1>This is my componet</h1>
        <h3>Total - {calculateLenght}</h3>
        <p>my state- {props.state}</p>
    </div>
  )
}

export default MyComponent