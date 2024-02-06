import GoogleLogin from "../../components/forms/GoogleLogin"
import SignUpForm from "../../components/forms/SignUpForm"
import RegNavbar from "../../components/ui/RegNavbar"

function SignupPage() {
    return (
        <div>
            <RegNavbar />
            <SignUpForm />
            <GoogleLogin />
        </div>
        
    )
}

export default SignupPage