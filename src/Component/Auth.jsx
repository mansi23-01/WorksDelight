import React from "react"

const AuthContext = React.createContext(null)

export default function Auth({ children }){
    const [user, setUser] = React.useState(null)

    const login = (user) => {
        // console.log(user.password);
        // if(user.email === '' || user.password === ''){
        //     alert("Please fill both Email and Password.")

        // }
        // else{
            setUser(user)
        // }

    }

    const logout = (user) => {
        setUser(null)
    }

    return(
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => {
    return React.useContext(AuthContext)
}