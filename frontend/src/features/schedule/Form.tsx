"use client";
import { FormButton } from "@/components/FormButton";
import { haircut } from "@/types";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

type FormProps = {
  data: haircut[];
};

export const Form = ({ data }: FormProps) => {
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const haircuts = formData.get("haircuts");

    try {
      const response = await fetch("http://localhost:3001/add-schedule", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, haircuts }),
      });

      if (!response.ok) {
        throw new Error("Não foi possível adicionar o agendamento");
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
        placeholder="Digite o nome do cliente"
        name="name"
        required
      />
      <select className="text-white bg-primary p-4 rounded" name="haircuts">
        {data.map((haircut: haircut) => (
          <option key={haircut.id} value={haircut.id}>
            {haircut.name}
          </option>
        ))}
      </select>
      <FormButton text="Registrar" />
    </form>
  );
};
