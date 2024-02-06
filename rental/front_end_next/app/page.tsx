import Image from 'next/image'
import SignUpForm from './components/forms/SignUpForm'
import SignupPage from './users/signup/page'
import HomePage from './users/homepage/page'

export default function Home() {
  return (
    <main>
      <HomePage />
    </main>
  )
}
