"use client";
import { FormButton } from "@/components/FormButton";
import { addSchedule } from "@/lib/actions";
import { HaircutType } from "@/types";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

type FormProps = {
  data: HaircutType[];
};

export const Form = ({ data }: FormProps) => {
  const router = useRouter();

  async function clientAddSchedule(formData: FormData) {
    const response = await addSchedule(formData);
    if (!response.success) {
      toast.error(response.message);
      return;
    }
    toast.success(response.message);
    router.push("/");
  }

  return (
    <form
      className="flex flex-col gap-6 p-10 bg-secondary rounded"
      action={clientAddSchedule}
    >
      <input
        className="text-white bg-primary p-4 rounded"
        type="text"
        placeholder="Digite o nome do cliente"
        name="name"
        required
      />
      <select className="text-white bg-primary p-4 rounded" name="haircuts">
        {data.map((haircut: HaircutType) => (
          <option key={haircut.id} value={haircut.id}>
            {haircut.name}
          </option>
        ))}
      </select>
      <FormButton text="Registrar" />
    </form>
  );
};
