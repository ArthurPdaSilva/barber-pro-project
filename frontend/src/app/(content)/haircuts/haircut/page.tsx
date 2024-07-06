import { Header } from "@/components/Header";
import { Form } from "@/features/haircuts/Add/Form";

const Haircut = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 p-12">
      <div className="flex gap-4 mt-16 flex-wrap flex-col ">
        <Header title="Novo corte" link="/haircuts" />
        <Form />
      </div>
    </div>
  );
};

export default Haircut;
