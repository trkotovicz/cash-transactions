export const saveUser = (data: object) => localStorage.setItem('user', JSON.stringify(data));

export const removeUser = () => localStorage.removeItem('user');

const isValid = (value: string | null): value is string => [null, undefined, ""].includes(value)

export const getUser = () => {
  const { user: value }: Storage = localStorage;
  if (!isValid(value)) return undefined;
  return JSON.parse(value);
};
