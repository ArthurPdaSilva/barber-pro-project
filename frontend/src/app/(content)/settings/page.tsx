import { Header } from "@/components/Header";
import { Form } from "@/features/settings/Form";
import { LogoutButton } from "@/features/settings/LogoutButton";

async function getUserById(id: number) {
  return {
    id: 1,
    barberName: "Léos Barbershop",
    address: "Rua dos Bobos, 0",
  };
}

const Settings = async () => {
  const user = await getUserById(1);
  return (
    <div className="flex flex-1 flex-col gap-4 p-12">
      <div className="flex gap-4 mt-16 flex-wrap flex-col ">
        <Header title="Minha conta" link="/" />
        <div className="flex flex-col gap-6 p-10 bg-secondary rounded">
          <Form user={user} />
          <LogoutButton />
        </div>
      </div>
    </div>
  );
};

export default Settings;
