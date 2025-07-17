export const generateCustomPassword = (
  length: number,
  useUppercase: boolean,
  useLowercase: boolean,
  useNumbers: boolean,
  useSpecialCharacters: boolean
): string => {
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const special = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  let charset = "";
  if (useUppercase) charset += uppercase;
  if (useLowercase) charset += lowercase;
  if (useNumbers) charset += numbers;
  if (useSpecialCharacters) charset += special;

  if (charset.length === 0) return ""; // fallback si no seleccionan nada

  let password = "";

  if (useUppercase)
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
  if (useLowercase)
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
  if (useNumbers)
    password += numbers[Math.floor(Math.random() * numbers.length)];
  if (useSpecialCharacters)
    password += special[Math.floor(Math.random() * special.length)];

  for (let i = password.length; i < length; i++) {
    password += charset[Math.floor(Math.random() * charset.length)];
  }

  return password
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
};