import React, { useState } from 'react'
import userContext from './userContext'

const userContextProvider = ({children}) => {
    const [user, setuser] = useState(null)
  return (
    <userContext.Provider value={{user,setuser }} >
        {children}
    </userContext.Provider>
  )
}

export default userContextProvider