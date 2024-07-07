import { MenuSidebar } from "@/features/MenuSidebar";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="flex flex-col bg-primary sm:flex-row z-10 h-full min-h-screen">
      <MenuSidebar />
      {children}
    </div>
  );
};

export default Layout;
