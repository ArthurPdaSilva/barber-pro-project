"use client";
import { FormButton } from "@/components/FormButton";
import { User } from "@/types";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

type FormProps = {
  user: User;
};

export const Form = ({ user }: FormProps) => {
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const barberName = formData.get("barberName");
    const address = formData.get("address");

    try {
      const response = await fetch(
        `http://localhost:3001/edit-user/${user.id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ barberName, address }),
        }
      );

      if (!response.ok) {
        throw new Error("Não foi possível editar ");
      }

      router.push("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form
      className="flex flex-col gap-6 p-10 bg-secondary rounded"
      onSubmit={handleSubmit}
    >
      <input
        className="text-white bg-primary p-4 rounded"
        type="text"
        placeholder="Nome da barbearia"
        name="barberName"
        defaultValue={user.barberName}
        required
      />
      <input
        className="text-white bg-primary p-4 rounded"
        type="text"
        placeholder="Endereço da barbearia"
        name="address"
        defaultValue={user.address}
        required
      />
      <FormButton text="Salvar" />
      <button
        className="border-red-700 border hover:bg-red-500 rounded text-red-700 p-2 font-bold transition-colors duration-300"
        type="submit"
      >
        Sair da conta
      </button>
    </form>
  );
};
