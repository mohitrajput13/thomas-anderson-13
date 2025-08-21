import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminTopbar } from "@/components/admin/AdminTopbar";
import { AdminContent } from "@/components/admin/AdminContent";
import { useToast } from "@/hooks/use-toast";

const Admin = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleSave = () => {
    toast({
      title: "Content Saved",
      description: "All changes have been saved successfully.",
    });
  };

  return (
    <>
      <Helmet>
        <title>Admin Panel - Content Management</title>
        <meta name="description" content="Admin panel for managing website content" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <SidebarProvider>
        <div className="min-h-screen flex w-full bg-background">
          <AdminSidebar activeTab={activeTab} onTabChange={setActiveTab} />
          
          <div className="flex-1 flex flex-col">
            <AdminTopbar onSave={handleSave} />
            
            <main className="flex-1 overflow-auto p-6">
              <AdminContent activeTab={activeTab} />
            </main>
          </div>
        </div>
      </SidebarProvider>
    </>
  );
};

export default Admin;