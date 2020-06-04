import React, { useCallback, InputHTMLAttributes } from "react";

import { cep, currency } from "../../utils/mask";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  mask: "cep" | "currency";
  prefix?: string;
}

const Input: React.FC<InputProps> = ({ mask, prefix, ...props }) => {
  const handleKeyUp = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      if (mask === "cep") {
        cep(e);
      }
      if (mask === "currency") {
        currency(e);
      }
    },
    [mask]
  );
  return (
    <div>
      {prefix && <span>{prefix}</span>}
      <input {...props} onKeyUp={handleKeyUp} />
    </div>
  );
};

export default Input;
