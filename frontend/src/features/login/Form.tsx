"use client";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

const Form = () => {
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Não foi possível fazer login");
      }

      const { token } = await response.json();

      Cookies.set("nextauth.token", token, {
        expires: 1 / 24,
      });

      router.push("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form className="flex flex-col gap-6 w-2/4" onSubmit={handleSubmit}>
      <input
        className="text-white bg-secondary p-2 rounded"
        type="email"
        name="email"
        placeholder="Digite seu email"
        required
      />
      <input
        className=" text-white bg-secondary p-2 rounded"
        type="password"
        name="password"
        placeholder="*******"
        required
      />
      <button
        className="bg-terciary rounded text-white p-2 font-bold"
        type="submit"
      >
        Acessar
      </button>
    </form>
  );
};

export default Form;
