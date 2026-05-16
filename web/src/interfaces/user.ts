export interface User {
  id: string;
  name: string;
  age: number;
  gender: string;
  email: string;
  active: Boolean;
}

export interface CreateUser extends Omit<User, "id"> {}
