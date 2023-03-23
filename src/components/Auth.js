import {auth, provider} from "../firebase.js"
import { signInWithPopup } from "firebase/auth"

import Cookies from "universal-cookie"

const cookies = new Cookies()

export const Auth =(props) => {
    const {setIsAuth} = props
    const signInWithGoogle = async () => {
        try{
            const result = await signInWithPopup(auth, provider) 
            cookies.set("auth-token", result.user.refreshToken)
            setIsAuth(true)
        }catch(err){
            console.error(err)
        }
    }
    return( 
        <div className="auth">
            <p>Sign in With Google to continue</p>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
        </div>)
}