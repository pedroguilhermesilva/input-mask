export function cep(e: React.FormEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 9;
  let value = e.currentTarget.value;
  // remove all that not a number and g to take all string
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{5})(\d)/, "$1-$2");
  e.currentTarget.value = value;
  return e;
}

export function currency(e: React.FormEvent<HTMLInputElement>) {
  let value = e.currentTarget.value;
  // remove all that not a number and g to take all string
  value = value.replace(/\D/g, "");
  /* ADD comma - 2 to take the 2 last numbers to add the virgula.
  '$' para definir que tem que terminar dessa forma que denfimos no \d{ 2 }
  */
  value = value.replace(/(\d)(\d{2})$/, "$1,$2");
  /**
   * ?= join occurrences
   * (\d{3}) through three by three
   * +(\D) join number with caracters
   * \B search all file and when find it put a comma
   */
  value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
  e.currentTarget.value = value;
  return e;
}
