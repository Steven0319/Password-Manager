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

export type User = {
  id: string;
  name: string | null;
  username: string | null;
  email: string | null;
  image: string | null;
  coverImage: string | null;
  profileImage: string | null;
  hashedPassword: string | null;
  createdAt: Date;
  updatedAt: Date;
};
