"use client";
import { FormButton } from "@/components/FormButton";
import { addHaircut } from "@/lib/actions";

export const Form = () => {
  return (
    <form
      className="flex flex-col gap-6 p-10 bg-secondary rounded"
      action={addHaircut}
    >
      <input
        className="text-white bg-primary p-4 rounded"
        type="text"
        placeholder="Nome do corte"
        name="name"
        required
      />
      <input
        className="text-white bg-primary p-4 rounded"
        type="text"
        placeholder="Preço por exemplo: 45,90"
        name="price"
        required
      />
      <FormButton text="Cadastrar" />
    </form>
  );
};
