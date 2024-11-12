export function generateTemperatures(size: number): {
  temperatures: number[];
  firstNegative: number | null;
} {
  const temperatures = Array.from(
    { length: size },
    () => Math.floor(Math.random() * 61) - 30
  );
  temperatures.sort((a, b) => b - a);
  const firstNegative = temperatures.find((temp) => temp < 0) ?? null;
  return { temperatures, firstNegative };
}
