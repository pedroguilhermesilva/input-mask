import React, { useState, useCallback } from "react";

import Input from "./components/Input";

interface Usuario {
  cep: string;
  price: number;
}

const App: React.FC = () => {
  const [usuario, setUsuario] = useState<Usuario>({} as Usuario);

  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setUsuario({
        ...usuario,
        [e.currentTarget.name]: e.currentTarget.value,
      });
    },
    [usuario]
  );
  return (
    <div>
      <Input
        mask="cep"
        placeholder="99999-999"
        name="cep"
        onChange={handleChange}
      />
      <Input
        mask="currency"
        placeholder="R$"
        prefix="R$"
        name="price"
        onChange={handleChange}
      />
      <button onClick={() => console.log(usuario)}>Salvar</button>
    </div>
  );
};

export default App;
