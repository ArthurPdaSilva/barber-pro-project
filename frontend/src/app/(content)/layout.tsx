import { MenuSidebar } from "@/features/MenuSidebar";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="flex flex-col bg-primary h-screen sm:flex-row z-10">
      <MenuSidebar />
      {children}
    </div>
  );
};

export default Layout;
