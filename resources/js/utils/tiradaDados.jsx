export function tiradaDados(count = 1, sides = 6) {
  const rolls = Array.from({ length: count }, () =>
    Math.floor(Math.random() * sides) + 1
  );

  return {
    rolls,
    total: rolls.reduce((a, b) => a + b, 0),
  };
}
