"use client";
import { FormButton } from "@/components/FormButton";
import { login } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export const Form = () => {
  const router = useRouter();

  async function clientLogin(formData: FormData) {
    const response = await login(formData);
    if (!response.success) {
      toast.error(response.message);
      return;
    }
    toast.success(response.message);
    router.push("/");
  }

  return (
    <form className="flex flex-col gap-6 w-2/4" action={clientLogin}>
      <input
        className="text-white bg-secondary p-2 rounded"
        type="email"
        name="email"
        placeholder="Digite seu email"
        minLength={6}
        required
      />
      <input
        className=" text-white bg-secondary p-2 rounded"
        type="password"
        name="password"
        minLength={6}
        placeholder="*******"
        required
      />
      <FormButton />
    </form>
  );
};
