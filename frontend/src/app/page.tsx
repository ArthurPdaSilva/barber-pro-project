import List from "@/features/home/List";
import Title from "@/features/home/Title";

const Home = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 p-12">
      <Title />
      <List />
    </div>
  );
};

export default Home;
