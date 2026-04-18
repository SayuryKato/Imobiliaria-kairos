import { AppSidebar } from "../_components/ui/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "../_components/ui/sidebar";
const PrivateLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />

      <main className="min-h-screen w-full bg-muted/20">
        <div className="border-b bg-background px-4 py-3">
          <SidebarTrigger />
        </div>

        <div className="p-6">{children}</div>
      </main>
    </SidebarProvider>
  );
};

export default PrivateLayout;
