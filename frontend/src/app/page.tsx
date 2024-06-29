import List from "@/features/home/List";
import MenuSidebar from "@/features/home/MenuSidebar";
import Title from "@/features/home/Title";

const Home = () => {
  return (
    <div className="flex flex-col bg-primary h-screen sm:flex-row z-10">
      <MenuSidebar />
      <div className="flex flex-1 flex-col gap-4 p-12">
        <Title />
        <List />
      </div>
    </div>
  );
};

export default Home;
