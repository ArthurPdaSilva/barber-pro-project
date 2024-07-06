import { Title } from "@/components/Title";
import { List } from "@/features/haircuts/List";

const Haircuts = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 p-12">
      <Title title="Modelos de corte" link="haircuts/haircut" />
      <List />
    </div>
  );
};

export default Haircuts;
