import { StarterLink } from "@/components/StarterLink";
import { Form } from "@/features/register/Form";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Entrar | Barber Pro",
  description: "Login na plataforma Barber Pro",
};

const Register = () => {
  return (
    <div className="flex flex-col bg-primary h-screen justify-center items-center gap-16">
      <Image src="logo.svg" alt="Login" width={274} height={117} />
      <Form />
      <StarterLink
        href="/login"
        text="Já possui uma conta?"
        textLink="Fazer Login."
      />
    </div>
  );
};

export default Register;
