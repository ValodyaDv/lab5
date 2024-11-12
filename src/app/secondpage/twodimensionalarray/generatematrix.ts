export function generateMatrix(size: number): {
  matrix: number[][];
  text: string | null;
  max: number | null;
} {
  const matrix = Array.from({ length: size }, () =>
    Array.from({ length: size }, () => Math.floor(Math.random() * 100))
  );
  let text = null;
  let max = matrix[0][0];
  let maxRow = 0;
  let maxCol = 0;

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (matrix[i][j] > matrix[maxRow][maxCol]) {
        max = matrix[i][j];
        maxRow = i;
        maxCol = j;
      }
    }
  }

  if (maxRow === maxCol) {
    text = 'на лівій діагоналі';
  } else if (maxCol < maxRow) {
    text = 'лівіше від лівої діагоналі';
  } else {
    text = 'правіше від лівої діагоналі';
  }

  return { matrix, max, text };
}
