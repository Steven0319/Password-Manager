import { Folder, KeyRound } from "lucide-react";
import { DataHeaderMainItemProps } from "./HeaderMain.types";

export const dataHeaderMain: DataHeaderMainItemProps[] = [
  {
    icon: KeyRound,
    text: "Password",
    typeElement: "password",
  },
  {
    icon: Folder,
    text: "Folder",
    typeElement: "folder",
  },
];