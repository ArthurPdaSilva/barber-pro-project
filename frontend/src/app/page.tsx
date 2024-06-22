import Image from "next/image";

const Home = () => {
  return (
    <div className="flex flex-col bg-primary h-screen ">
      <div></div>
      <div className="flex flex-col gap-4 p-12">
        <div className="flex gap-4 mt-16 ">
          <h1 className="text-white  font-semibold text-4xl">Agenda</h1>
          <button className="text-white p-2 bg-gray-800 hover:bg-gray-900 rounded font-semibold transition-colors duration-200 ">
            Registrar
          </button>
        </div>
        <ul className="flex flex-col gap-2 flex-1 ">
          <li className="bg-secondary flex text-white rounded p-4 justify-between items-center font-semibold">
            <p className="flex items-center gap-6 ml-5">
              <Image
                src="/person-sharp.svg"
                width={33}
                height={33}
                alt="User Icon"
              />{" "}
              Arthur Games
            </p>
            <p>Corte normal </p>
            <p className="mr-5">R$ 45.00</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
