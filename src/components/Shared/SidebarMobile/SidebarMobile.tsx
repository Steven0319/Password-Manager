"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import SidebarRoutes from "../SidebarRoutes/SidebarRoutes";
import { Button } from "@/components/ui/button";

const SidebarMobile = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-blue-800 text-white">
        <SheetHeader className="text-left mb-5">
          <SheetTitle className="text-white">StevenPassword</SheetTitle>
          <SheetDescription className="text-slate-100">
            Create and manage all of your passwords
          </SheetDescription>
        </SheetHeader>
        <SidebarRoutes />
      </SheetContent>
    </Sheet>
  );
};

export default SidebarMobile;
