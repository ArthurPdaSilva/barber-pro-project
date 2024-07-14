import { logout } from "@/lib/actions";

export const LogoutButton = () => {
  return (
    <form action={logout}>
      <button className="border-red-700 border hover:bg-red-500 rounded text-red-700 p-2 font-bold transition-colors duration-300 w-full">
        Sair da conta
      </button>
    </form>
  );
};
