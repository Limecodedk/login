import { useState, createContext, useEffect } from "react";

export const LoginContext = createContext()

const LoginContextProvider = props => {

  //State der fortæller om der er logget ind (= user eller ej)
  const [user, setUser] = useState();

  //Tjek om der er en user i localstorage - og hvis der er så put i state
  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    setUser(storedUser); //Put i state fra localstorage
  }, [])

  //Login-metode (email kan evt være username)
  const signIn = (email, password) => {

    if (email === "admin@admin.dk" && password === "admin123") {
      //Gem bruger i state
      setUser(email)
      //Gem bruger i localstorage
      window.localStorage.setItem("user", email)

    } else {
      //Tøm state for en sikkerheds skyld hvis der logget forkert ind
      signOut()
    }
  }


  //Logud metode
  const signOut = () => {
    //Tøm state
    setUser()
    //tøm Localstorage
    window.localStorage.removeItem("user")
  }

  return (
    <LoginContext.Provider value={{ signIn, signOut, user }} >
      {props.children}
    </LoginContext.Provider>
  )

}

export default LoginContextProvider