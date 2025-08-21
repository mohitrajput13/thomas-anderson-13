import { useState } from "react";
import { useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  FileText, 
  PenTool, 
  Image, 
  Settings,
  ChevronRight
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AdminSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const sidebarItems = [
  {
    id: "dashboard",
    title: "Dashboard",
    icon: LayoutDashboard,
    description: "Overview & Analytics"
  },
  {
    id: "pages",
    title: "Pages",
    icon: FileText,
    description: "Manage Site Content"
  },
  {
    id: "blog",
    title: "Blog",
    icon: PenTool,
    description: "Blog Posts & Articles"
  },
  {
    id: "media",
    title: "Media",
    icon: Image,
    description: "Images & Files"
  },
  {
    id: "settings",
    title: "Settings",
    icon: Settings,
    description: "Site Configuration"
  }
];

export function AdminSidebar({ activeTab, onTabChange }: AdminSidebarProps) {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar 
      className={cn(
        "border-r border-border transition-all duration-300",
        isCollapsed ? "w-16" : "w-64"
      )}
      collapsible="icon"
    >
      <SidebarContent className="bg-sidebar">
        <div className="p-4 border-b border-sidebar-border">
          {!isCollapsed ? (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Settings className="w-4 h-4 text-primary-foreground" />
              </div>
              <div>
                <h2 className="font-semibold text-sidebar-foreground">Admin CMS</h2>
                <p className="text-xs text-sidebar-foreground/60">Content Management</p>
              </div>
            </div>
          ) : (
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mx-auto">
              <Settings className="w-4 h-4 text-primary-foreground" />
            </div>
          )}
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className={cn(isCollapsed && "sr-only")}>
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => onTabChange(item.id)}
                    className={cn(
                      "w-full justify-start px-3 py-2 rounded-lg transition-colors",
                      "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                      activeTab === item.id && "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                    )}
                  >
                    <item.icon className={cn(
                      "h-4 w-4 flex-shrink-0",
                      activeTab === item.id ? "text-primary" : "text-sidebar-foreground/60"
                    )} />
                    {!isCollapsed && (
                      <div className="flex-1 text-left ml-3">
                        <div className="text-sm font-medium">{item.title}</div>
                        <div className="text-xs text-sidebar-foreground/60">{item.description}</div>
                      </div>
                    )}
                    {!isCollapsed && activeTab === item.id && (
                      <ChevronRight className="h-4 w-4 text-primary" />
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}