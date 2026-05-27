export interface User {
  id: string;
  name: string;
  age: number;
  gender: "male" | "female";
  email: string;
  status: "active" | "inactive";
}

export interface CreateUser extends Omit<User, "id"> {}
