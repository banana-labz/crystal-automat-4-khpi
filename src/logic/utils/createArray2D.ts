export const createArray2D = <T>(size: number, filler: T): T[][] => (
  Array(size).fill(null).map(() => Array(size).fill(filler))
)