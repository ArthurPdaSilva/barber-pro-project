import { Header } from "@/components/Header";
import { Form } from "@/features/haircuts/Edit/Form";

async function getHaircutById(id: number) {
  return {
    id: 1,
    name: "Moicano",
    price: 45.9,
  };
}

const Haircut = async ({ params }: { params: { slug: string } }) => {
  const haircut = await getHaircutById(parseInt(params.slug));

  return (
    <div className="flex flex-1 flex-col gap-4 p-12">
      <div className="flex gap-4 mt-16 flex-wrap flex-col ">
        <Header title="Editar corte" link="/haircuts" />
        <Form haircut={haircut} />
      </div>
    </div>
  );
};

export default Haircut;
