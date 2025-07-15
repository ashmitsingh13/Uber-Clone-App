import React, { createContext, useState } from 'react'
export const userDataContext = createContext()
const userContext = ({children}) => {
    const [user, setUser] = useState({email:"", fullname:{
        firstname:"",
        lastname:"",
    }})
  return ( 
    <>
    <userDataContext.Provider value={user}>
    {children}
    </userDataContext.Provider>
    </>
  )
}

export default userContext