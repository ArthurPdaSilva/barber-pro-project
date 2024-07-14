"use client";
import { FormButton } from "@/components/FormButton";
import { addHaircut } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export const Form = () => {
  const router = useRouter();

  async function clientAddHaircut(formData: FormData) {
    const response = await addHaircut(formData);
    if (!response.success) {
      toast.error(response.message);
      return;
    }
    toast.success(response.message);
    router.push("/haircuts");
  }

  return (
    <form
      className="flex flex-col gap-6 p-10 bg-secondary rounded"
      action={clientAddHaircut}
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
