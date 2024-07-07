import { FormButton } from "@/components/FormButton";
import { register } from "@/lib/actions";

export const Form = () => {
  return (
    <form className="flex flex-col gap-6 w-2/4" action={register}>
      <input
        className="text-white bg-secondary p-2 rounded"
        type="text"
        placeholder="Nome da barbearia"
        name="barberName"
        required
      />
      <input
        className="text-white bg-secondary p-2 rounded"
        type="text"
        placeholder="Digite seu email"
        name="email"
        required
      />
      <input
        className="text-white bg-secondary p-2 rounded"
        type="password"
        placeholder="*******"
        name="password"
        required
      />
      <FormButton />
    </form>
  );
};
