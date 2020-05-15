let m = '';
const greeter = (name: string) => {
  m = name;
  return `Hello ${m}`;
};
const dissmiser = () => `Bye ${m}`;
export { greeter, dissmiser };
