export type Element = {
  id: string;
  name: string | null;
  typeElement: string;
  isFavourite: boolean;
  urlWebsite: string | null;
  username: string | null;
  password: string | null;
  notes: string | null;
  directory: string | null;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
};
