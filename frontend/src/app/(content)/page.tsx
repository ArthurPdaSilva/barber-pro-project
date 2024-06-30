import { Title } from "@/components/Title";
import { ListContainer } from "@/features/home/ListContainer";

const Home = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 p-12">
      <Title title="Agenda" link="schedule" />
      <ListContainer />
    </div>
  );
};

export default Home;
