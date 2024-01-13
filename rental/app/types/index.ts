export type Account = {
  id: string;
  type: string;
  userid: string;
};

export type Property = {
  address?: string;
  details?: string;
  id?: string;
  image?: string;
  name?: string;
  price?: number;
  type?: string;
  userId?: string;
};

export type User = {
  id: string;
  name: string | null;
  email: string | null;
  status: boolean | null;
  image: string;
};
