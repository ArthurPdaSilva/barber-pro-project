import { FormButton } from "@/components/FormButton";
import { editUser } from "@/lib/actions";
import { User } from "@/types";

type FormProps = {
  user: User;
};

export const Form = ({ user }: FormProps) => {
  return (
    <form className="flex flex-col gap-6" action={editUser}>
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
