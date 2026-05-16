import { useCreateUserLogic } from "./create-user.logic";
import { Input } from "../components/input";
import { Select } from "../components/select";
import { RadioGroup } from "../components/radio-group";
import { RadioItem } from "../components/radio-item";

export function CreateUser() {
  const {
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
  } = useCreateUserLogic();

  return (
    <form
      action={handleCreateUser}
      className="w-full flex flex-col gap-4 p-5 sm:p-6 bg-white rounded-2xl shadow-md border border-gray-100 lg:sticky lg:top-6"
    >
      <Input
        label="Nome"
        type="text"
        id="name"
        name="name"
        placeholder="Nome completo"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Idade"
          type="number"
          id="age"
          name="age"
          placeholder="Idade"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
          required
        />

        <Select
          label="Gênero"
          id="gender"
          name="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value as "male" | "female")}
          required
        >
          <option value="male">Masculino</option>
          <option value="female">Feminino</option>
        </Select>
      </div>

      <Input
        label="Email"
        type="email"
        id="email"
        name="email"
        placeholder="seu@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <RadioGroup label="Ativo">
        <RadioItem
          label="Sim"
          id="active-yes"
          name="active"
          value="true"
          checked={active}
          onChange={() => setActive(true)}
        />

        <RadioItem
          label="Não"
          id="active-no"
          name="active"
          value="false"
          checked={!active}
          onChange={() => setActive(false)}
        />
      </RadioGroup>
      <button
        type="submit"
        className="w-full py-3 px-4 bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors font-semibold rounded-xl shadow-sm cursor-pointer"
      >
        Enviar
      </button>
    </form>
  );
}
