import GoogleLogin from "../../components/forms/GoogleLogin"
import LoginForm from "../../components/forms/LoginForm"
import RegNavbar from "../../components/ui/RegNavbar"


function LoginPage() {
    return (
        <div>
            <RegNavbar />
            <LoginForm />
            <GoogleLogin />
        </div>
        
    )
}

export default LoginPage