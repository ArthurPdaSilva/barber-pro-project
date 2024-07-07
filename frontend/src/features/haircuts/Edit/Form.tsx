import { FormButton } from "@/components/FormButton";
import { editHaircut } from "@/lib/actions";
import { HaircutType } from "@/types";

type FormProps = {
  haircut: HaircutType;
};

export const Form = ({ haircut }: FormProps) => {
  return (
    <form
      className="flex flex-col gap-6 p-10 bg-secondary rounded"
      action={editHaircut}
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
