"use client";
import SignUpForm from "@/app/components/forms/SignUpForm";
import Modal from "@/app/components/modals/ModalFunc";
import RegNavbar from "@/app/components/ui/RegNavbar";
import React, { useState } from "react";
import SignupPage from "../signup/page";
import LoginPage from "../login/page";

function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <RegNavbar onShow={() => setIsOpen(true)} />
      <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
        {/* <><LoginPage /></> */}
        <>
          <SignupPage />
        </>
      </Modal>
    </>
  );
}

export default HomePage;
