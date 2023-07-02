
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../Firebase/firebase";

const auth = getAuth(app);

function AuthLogin() {
    const signUp = () => {
        createUserWithEmailAndPassword(
            auth,
            "timjain600@gmail.com",
            "tim@1234"
        ).then((value) => console.log(value));
    };
    return (
        <div>
            <h1>Login with services</h1>
            <button onClick={signUp}>Google Login</button>
        </div>
    )
}

export default AuthLogin
