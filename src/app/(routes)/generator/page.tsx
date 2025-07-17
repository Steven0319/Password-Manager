import { FormGenerator } from "./FormGenerator/FormGenerator";
import { HeaderGenerator } from "./FormGenerator/HeaderGenerator";

export default function GeneratorPage() {
  return (
    <div>
      <HeaderGenerator />
      <FormGenerator />
    </div>
  );
}