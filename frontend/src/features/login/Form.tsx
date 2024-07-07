import { FormButton } from "@/components/FormButton";
import { login } from "@/lib/actions";

export const Form = () => {
  return (
    <form className="flex flex-col gap-6 w-2/4" action={login}>
      <input
        className="text-white bg-secondary p-2 rounded"
        type="email"
        name="email"
        placeholder="Digite seu email"
        required
      />
      <input
        className=" text-white bg-secondary p-2 rounded"
        type="password"
        name="password"
        placeholder="*******"
        required
      />
      <FormButton />
    </form>
  );
};
