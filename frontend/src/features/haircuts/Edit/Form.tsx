"use client";
import { FormButton } from "@/components/FormButton";
import { editHaircut } from "@/lib/actions";
import { HaircutType } from "@/types";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

type FormProps = {
  haircut: HaircutType;
};

export const Form = ({ haircut }: FormProps) => {
  const router = useRouter();

  async function clientEditHaircut(formData: FormData) {
    const response = await editHaircut(formData);
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
      action={clientEditHaircut}
    >
      <input type="hidden" name="haircutId" value={haircut.id} />
      <input
        className="text-white bg-primary p-4 rounded"
        type="text"
        placeholder="Nome do corte"
        name="name"
        defaultValue={haircut.name}
        required
      />
      <input
        className="text-white bg-primary p-4 rounded"
        type="text"
        placeholder="Preço por exemplo: 45,90"
        name="price"
        defaultValue={haircut.price}
        required
      />
      <FormButton text="Editar" />
    </form>
  );
};
