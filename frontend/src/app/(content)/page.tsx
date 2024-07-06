import { Title } from "@/components/Title";
import { List } from "@/features/home/List";

const Home = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 p-12">
      <Title title="Agenda" link="schedule" />
      <List />
    </div>
  );
};

export default Home;
