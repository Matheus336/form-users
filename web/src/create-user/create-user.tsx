import { useCreateUserLogic } from "./create-user.logic";
import { Input } from "../components/input";
import { Select } from "../components/select";
import { RadioGroup } from "../components/radio-group";
import { RadioItem } from "../components/radio-item";

export function CreateUser() {
  const { register, handleCreateUser, errors, isSubmitting } =
    useCreateUserLogic();

  return (
    <form
      onSubmit={handleCreateUser}
      className="w-full flex flex-col gap-4 p-5 sm:p-6 bg-white rounded-2xl shadow-md border border-gray-100 lg:sticky lg:top-6"
    >
      <Input
        label="Nome"
        type="text"
        placeholder="Nome completo"
        {...register("name", {
          required: true,
        })}
      />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}

      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Idade"
          type="number"
          placeholder="Idade"
          {...register("age", { valueAsNumber: true })}
        />

        <Select label="Gênero" {...register("gender")}>
          <option value="male">Masculino</option>
          <option value="female">Feminino</option>
        </Select>
      </div>
      {errors.age && <p className="text-red-500">{errors.age.message}</p>}

      <Input
        label="Email"
        /*type="email"*/
        placeholder="seu@email.com"
        {...register("email")}
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      <RadioGroup label="Ativo">
        <RadioItem label="Sim" value="active" {...register("status")} />

        <RadioItem label="Não" value="inactive" {...register("status")} />
      </RadioGroup>

      <button
        type="submit"
        className={`w-full py-3 px-4 bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors font-semibold rounded-xl shadow-sm cursor-pointer disabled:opacity-40 disabled:hover:bg-blue-50 disabled:cursor-not-allowed ${
          isSubmitting ? "btn-loading" : ""
        }`}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
}
