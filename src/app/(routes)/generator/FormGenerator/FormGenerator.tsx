"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { copyClipboard } from "@/lib/copyClipboard";
import { Copy, Shuffle } from "lucide-react";
import { useEffect, useState } from "react";
import { PasswordGenerator } from "./PasswordGenerator/PasswordGenerator";
import { UserGenerator } from "./UserGenerator";
import { generateCustomPassword } from "@/lib/generateCustomPassword";
import { generateRandomUsername } from "@/lib/generateRandomUser";
import { generateRandomEmail } from "@/lib/generateRandomEmail";

export function FormGenerator() {
  const [itemValueInput, setItemValueInput] = useState("");
  const [selectedValue, setSelectedValue] = useState<
    "password" | "user" | string
  >("password");

  const [userTypeSelected, setUserTypeSelected] = useState("username");

  const [lengthPassword, setLengthPassword] = useState(11);
  const [isUppercaseSelected, setIsUppercaseSelected] = useState(true);
  const [isLowercaseSelected, setIsLowercaseSelected] = useState(true);
  const [isNumberSelected, setIsNumberSelected] = useState(true);
  const [isSpecialCharactersSelected, setIsSpecialCharactersSelected] =
    useState(true);

  useEffect(() => {
    if (selectedValue === "password") {
      const newPassword = generateCustomPassword(
        lengthPassword,
        isUppercaseSelected,
        isLowercaseSelected,
        isNumberSelected,
        isSpecialCharactersSelected
      );
      setItemValueInput(newPassword);
    }
  }, [
    lengthPassword,
    isUppercaseSelected,
    isLowercaseSelected,
    isNumberSelected,
    isSpecialCharactersSelected,
    selectedValue,
  ]);

  useEffect(() => {
    if (selectedValue === "user") {
      const newUserGenerated = generateRandomUsername();
      setItemValueInput(newUserGenerated);
    }
    if (userTypeSelected === "email") {
      const newEmailGenerated = generateRandomEmail();
      setItemValueInput(newEmailGenerated);
    }
  }, [selectedValue, userTypeSelected]);

  const handleShuffleClick = () => {
    if (selectedValue === "password") {
      const password = generateCustomPassword(
        lengthPassword,
        isUppercaseSelected,
        isLowercaseSelected,
        isNumberSelected,
        isSpecialCharactersSelected
      );
      setItemValueInput(password);
    } else if (selectedValue === "user") {
      if (userTypeSelected === "email") {
        const email = generateRandomEmail();
        setItemValueInput(email);
      } else {
        const username = generateRandomUsername();
        setItemValueInput(username);
      }
    }
  };

  return (
    <div className="mt-5 max-w-2xl">
      <div className="relative w-full">
        <Input
          placeholder="Generated value..."
          value={itemValueInput}
          onChange={() => {}}
        />
        <Copy
          className="absolute top-3 right-12 cursor-pointer h-5 w-5"
          onClick={() => copyClipboard(itemValueInput)}
        />
        <Shuffle
          className="absolute top-3 right-2 cursor-pointer h-5 w-5"
          onClick={handleShuffleClick}
        />
      </div>
      <div className="bg-slate-100 rounded-md shadow-md my-4 p-4">
        <p className="mb-4 text-slate-500">What do you want to generate?</p>
        <RadioGroup
          defaultValue="password"
          onValueChange={(value) => setSelectedValue(value)}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="password" id="r1" />
            <Label htmlFor="r1">Password</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="user" id="r2" />
            <Label htmlFor="r2">User</Label>
          </div>
        </RadioGroup>
      </div>
      {selectedValue === "password" ? (
        <PasswordGenerator
          lengthPassword={lengthPassword}
          setLengthPassword={setLengthPassword}
          isUppercaseSelected={isUppercaseSelected}
          setIsUppercaseSelected={setIsUppercaseSelected}
          isLowercaseSelected={isLowercaseSelected}
          setIsLowercaseSelected={setIsLowercaseSelected}
          isNumberSelected={isNumberSelected}
          setIsNumberSelected={setIsNumberSelected}
          isSpecialCharactersSelected={isSpecialCharactersSelected}
          setIsSpecialCharactersSelected={setIsSpecialCharactersSelected}
        />
      ) : (
        <UserGenerator setUserTypeSelected={setUserTypeSelected} />
      )}
    </div>
  );
}
