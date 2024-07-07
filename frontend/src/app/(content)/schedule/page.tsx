import { Header } from "@/components/Header";
import { Form } from "@/features/schedule/Form";
import { getHaicuts } from "@/lib/actions";

const Schedule = async () => {
  const data = await getHaicuts();

  return (
    <div className="flex flex-1 flex-col gap-4 p-12">
      <div className="flex gap-4 mt-16 flex-wrap flex-col">
        <Header title="Novo Serviço" link="/" />
        <Form data={data.haircutTypes} />
      </div>
    </div>
  );
};

export default Schedule;
