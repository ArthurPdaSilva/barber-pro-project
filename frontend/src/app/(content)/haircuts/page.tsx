import { Title } from "@/components/Title";
import { ListContainer } from "@/features/home/ListContainer";

const Haircuts = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 p-12">
      <Title title="Modelos de corte" link="haircuts/haircut" />
      <ListContainer />
    </div>
  );
};

export default Haircuts;
