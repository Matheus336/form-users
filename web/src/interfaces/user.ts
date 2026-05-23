export interface User {
  id: string;
  name: string;
  age: number;
  gender: string;
  email: string;
  status: "active" | "inactive";
}

export interface CreateUser extends Omit<User, "id"> {}
