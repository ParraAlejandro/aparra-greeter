//for test values globals inside module
let m = '';
//fnc
const greeter = (name: string) => {
  m = name;
  return `Hello ${m}`;
};
//fnc ..... ----
const dissmiser = () => `Bye ${m}`;
export { greeter, dissmiser };
