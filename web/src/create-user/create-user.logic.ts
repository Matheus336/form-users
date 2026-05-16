import { useState } from "react";
import { CreateUser } from "../interfaces/user";
import { createUser } from "../mutations/create-user";

export const useCreateUserLogic = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState<number>(0);
  const [gender, setGender] = useState<"male" | "female">("male");
  const [email, setEmail] = useState("");
  const [active, setActive] = useState(true);

  const resetForm = () => {
    setName("");
    setAge(0);
    setGender("male");
    setEmail("");
    setActive(true);
  };

  const handleCreateUser = async () => {
    const newUserData: CreateUser = {
      name,
      age,
      gender,
      email,
      active,
    };

    await createUser(newUserData);

    resetForm();
  };

  return {
    name,
    setName,
    age,
    setAge,
    gender,
    setGender,
    email,
    setEmail,
    active,
    setActive,
    handleCreateUser,
  };
};
