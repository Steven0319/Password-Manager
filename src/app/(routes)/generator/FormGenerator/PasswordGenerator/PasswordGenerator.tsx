import { Checkbox } from "@/components/ui/checkbox";
import { PasswordGeneratorProps } from "./PasswordGenerator.types";

export function PasswordGenerator(props: PasswordGeneratorProps) {
  const {
    isUppercaseSelected,
    isLowercaseSelected,
    isNumberSelected,
    isSpecialCharactersSelected,
    lengthPassword,
    setIsUppercaseSelected,
    setIsLowercaseSelected,
    setIsNumberSelected,
    setIsSpecialCharactersSelected,
    setLengthPassword,
  } = props;

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLengthPassword(Number(event.target.value));
  };

  return (
    <div>
      <>
        <div className="w-full p-4 bg-slate-100 rounded-md shadow-md flex gap-2 items-center">
          <label className="block text-sm font-medium text-gray-700 min-w-32">
            Length: {lengthPassword}
          </label>
          <input
            type="range"
            id="range"
            min="8"
            max="50"
            className="w-full h-2 bg-gray-200 rounded-md appearance-none cursor-pointer"
            value={lengthPassword}
            onChange={handleRangeChange}
          />
        </div>
        <div>
          <div className="flex items-center space-x-2 my-4 bg-slate-100 rounded-md shadow-md p-4">
            <Checkbox
              id="uppercase"
              checked={isUppercaseSelected}
              onCheckedChange={() => setIsUppercaseSelected((prev) => !prev)}
            />
            <label
              htmlFor="uppercase"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Uppercase A-Z
            </label>
          </div>
          <div className="flex items-center space-x-2 my-4 bg-slate-100 rounded-md shadow-md p-4">
            <Checkbox
              id="lowercase"
              checked={isLowercaseSelected}
              onCheckedChange={() => setIsLowercaseSelected((prev) => !prev)}
            />
            <label
              htmlFor="lowercase"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Lowercase a-z
            </label>
          </div>
          <div className="flex items-center space-x-2 my-4 bg-slate-100 rounded-md shadow-md p-4">
            <Checkbox
              id="numbers"
              checked={isNumberSelected}
              onCheckedChange={() => setIsNumberSelected((prev) => !prev)}
            />
            <label
              htmlFor="numbers"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Numbers 0-9
            </label>
          </div>
          <div className="flex items-center space-x-2 my-4 bg-slate-100 rounded-md shadow-md p-4">
            <Checkbox
              id="special"
              checked={isSpecialCharactersSelected}
              onCheckedChange={() =>
                setIsSpecialCharactersSelected((prev) => !prev)
              }
            />
            <label
              htmlFor="special"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Special characters: !@#$&%^*
            </label>
          </div>
        </div>
      </>
    </div>
  );
}
