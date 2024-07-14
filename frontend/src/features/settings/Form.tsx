"use client";
import { FormButton } from "@/components/FormButton";
import { editUser } from "@/lib/actions";
import { User } from "@/types";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

type FormProps = {
  user: User;
};

export const Form = ({ user }: FormProps) => {
  const router = useRouter();

  async function clientEditUser(formData: FormData) {
    const response = await editUser(formData);
    if (!response.success) {
      toast.error(response.message);
      return;
    }
    toast.success(response.message);
    router.push("/");
  }

  return (
    <form className="flex flex-col gap-6" action={clientEditUser}>
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
    </form>
  );
};
