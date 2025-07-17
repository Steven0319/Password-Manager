import { Dispatch, SetStateAction } from "react";

export type PasswordGeneratorProps = {
  setLengthPassword: Dispatch<SetStateAction<number>>;
  lengthPassword: number;
  isUppercaseSelected: boolean;
  setIsUppercaseSelected: Dispatch<SetStateAction<boolean>>;
  isLowercaseSelected: boolean;
  setIsLowercaseSelected: Dispatch<SetStateAction<boolean>>;
  isSpecialCharactersSelected: boolean;
  setIsSpecialCharactersSelected: Dispatch<SetStateAction<boolean>>;
  isNumberSelected: boolean;
  setIsNumberSelected: Dispatch<SetStateAction<boolean>>;
};