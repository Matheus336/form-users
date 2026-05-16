## CONTROLLED vs UNCONTROLLED

### <u>Controlled:</u>

React é quem controla o valor via estado (**useState**)

```jsx
export function Form() {
  const [name, setName] = useState("");

  return (
    <input value={name} onChange={(event) => setName(event.target.value)} />
  );
}
```

Toda vez que o usuário digita algo, uma função de callback (como _onChange_) atualiza esse estado, forçando o componente a re-renderizar com o novo valor.

#### Vantagens:

- **_Validação em tempo real:_** É muito fácil validar o campo a cada caractere digitado (ex: desabilitar o botão de enviar se o campo estiver inválido).

- **_Formatação condicional:_** Você pode mascarar o input enquanto o usuário digita (ex: formatar CPF ou telefone automaticamente).

- **_Interface síncrona:_** Outros elementos da tela podem reagir instantaneamente ao que está sendo digitado.

#### Desvantagens:

- **_Perda de performance:_** Em formulários com muitos campos, atualizar o estado a cada caractere pode gerar muitos re-renders, impactando a performance.

- **_Excesso de código:_** É necessário um useState, value, onChange para cada campo

---

### <u> Uncontrolled: </u>

O próprio DOM gerencia o valor via referência (**useRef** ou **formData**).

```jsx
export function Form() {
  const inputRef = useRef < HTMLInputElement > null;

  function handleSubmit() {
    console.log(inputRef.current?.value);
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleSubmit}>Enviar</button>
    </>
  );
}
```

```jsx
export function Form() {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    console.log(formData.get("name"));
  }
}
```

Valor fica apenas no DOM. Você só busca o valor quando necessário (normalmente no momento de enviar o formulário).

#### Vantagens:

- **_Menos render / Mais performance:_** Como não há atualização de estado a cada caractere digitado, o componente não sofre re-renderizações constantes. Excelente para formulários com muitos campos.

- **_Código mais enxuto:_** Para formulários simples, não precisa criar um useState e uma função modificadora para cada campo.

#### Desvantagens:

- **_Difícil validar em tempo real:_** Como o valor não está no estado do React, perde-se a capacidade de fazer validações instantâneas.

- **_Perda da sincronia da UI:_** Se a interface do seu aplicativo precisa reagir ao que está acontecendo no formulário de forma condicional, o modelo não controlado falha em entregar isso

## Formik

Usa a abordagem <u>**controlled**</u> por baixo dos panos.
Gerencia estado, validação e submit de forma centralizada.

```jsx
const formik = useFormik({
  initialValues: { email: "" },
  onSubmit: (values) => console.log(values),
});

<input
  name="email"
  value={formik.values.email}
  onChange={formik.handleChange}
/>;
```

## React Hook Form

<u>**_Por padrão_**</u>, usa a abordagem <u>**_uncontrolled_**</u> (via ref).

```jsx
const { register, handleSubmit } = useForm();

<input {...register("email")} />;
```

O register injeta automaticamente o ref e as regras de validação no campo.

### <_Controller_> do React Hook Form

Como o RHF usa uncontrolled por padrão, ele tem um problema com componentes que não aceitam ref nativamente — como inputs de bibliotecas externas (Material UI, Chakra UI, React Select, etc.).

O <_Controller_> resolve isso, fazendo uma ponte entre o RHF e componentes controlled.

```jsx
function Form() {
  const { control, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(...)}>
      <Controller
        name="cidade"         // nome do campo
        control={control}     // passa o control do useForm
        rules={{ required: true }} // validações
        render={({ field }) => (
          <Select {...field} options={cidades} /> // repassa para o componente
        )}
      />
    </form>
  );
}
```

```jsx
render={({ field }) => (
  <Select
    value={field.value}      // RHF controla o valor
    onChange={field.onChange} // RHF atualiza quando muda
  />
)}
```
