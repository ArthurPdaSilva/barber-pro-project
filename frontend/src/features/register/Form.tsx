"use client";
import { FormButton } from "@/components/FormButton";
import { register } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export const Form = () => {
  const router = useRouter();

  async function clientRegister(formData: FormData) {
    const response = await register(formData);
    if (response.error) {
      toast.error(response.message);
      return;
    }
    toast.success(response.message);
    router.push("/");
  }

  return (
    <form className="flex flex-col gap-6 w-2/4" action={clientRegister}>
      <input
        className="text-white bg-secondary p-2 rounded"
        type="text"
        placeholder="Nome da barbearia"
        name="barberName"
        minLength={3}
        required
      />
      <input
        className="text-white bg-secondary p-2 rounded"
        type="email"
        placeholder="Digite seu email"
        name="email"
        required
      />
      <input
        className="text-white bg-secondary p-2 rounded"
        type="password"
        placeholder="*******"
        name="password"
        minLength={6}
        required
      />
      <FormButton />
    </form>
  );
};
