import Image from "next/image";
import SignUpForm from "./components/forms/SignUpForm";
import SignupPage from "./users/signup/page";
import HomePage from "./users/homepage/page";
import PropertiesPage from "@/app/components/properties/page";
import AppFooter from "./components/ui/AppFooter";

export default function Home() {
  return (
    <main>
      <HomePage />
      <PropertiesPage />
    </main>
  );
}
