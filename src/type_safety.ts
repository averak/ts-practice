// null able
function getFormattedValue(value: number | null, unit = "pt") {
  if (value == null) return `--${unit}`;
  return `${value.toFixed(1)} ${unit}`;
}

console.log(getFormattedValue(0.1));
console.log(getFormattedValue(0));
console.log(getFormattedValue(100, "kg"));
console.log(getFormattedValue(null));

// 引数をオプションにする
function greet(name?: string | undefined) {
  if (name == undefined) return "Hello";
  return `Hello ${name.toUpperCase()}`;
}

console.log(greet());
console.log(greet("Taro"));

// オブジェクトの型安全
type User = {
  age?: number;
  name?: string;
};

function registerUser(user: User) {}
registerUser({})
