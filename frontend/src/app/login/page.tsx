import StarterLink from "@/components/StarterLink";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Entrar | Barber Pro",
  description: "Login na plataforma Barber Pro",
};

const Login = () => {
  return (
    <div className="flex flex-col flex- bg-primary h-screen justify-center items-center gap-16">
      <Image src="logo.svg" alt="Login" width={274} height={117} />
      <form className="flex flex-col gap-6 w-2/4 ">
        <input
          className="text-white bg-secondary p-2 rounded"
          type="text"
          placeholder="Digite seu email"
        />
        <input
          className=" text-white bg-secondary p-2 rounded"
          type="password"
          placeholder="*******"
        />
        <button className="bg-terciary rounded text-white p-2" type="submit">
          Acessar
        </button>
      </form>
      <StarterLink
        href="/register"
        text="Não possui uma conta?"
        textLink="Clique Aqui."
      />
    </div>
  );
};

export default Login;
