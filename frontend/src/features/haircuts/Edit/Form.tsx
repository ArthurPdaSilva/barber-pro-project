"use client";
import { FormButton } from "@/components/FormButton";
import { HaircutType } from "@/types";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

type FormProps = {
  haircut: HaircutType;
};

export const Form = ({ haircut }: FormProps) => {
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const price = formData.get("price");

    try {
      const response = await fetch(
        `http://localhost:3001/edit-haircut/${haircut.id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, price }),
        }
      );

      if (!response.ok) {
        throw new Error("Não foi possível criar um novo corte de cabelo");
      }

      router.push("/haircuts");
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
        placeholder="Nome do corte"
        name="name"
        value={haircut.name}
        required
      />
      <input
        className="text-white bg-primary p-4 rounded"
        type="text"
        placeholder="Preço por exemplo: 45,90"
        name="price"
        value={haircut.price}
        required
      />
      <FormButton text="Cadastrar" />
    </form>
  );
};
