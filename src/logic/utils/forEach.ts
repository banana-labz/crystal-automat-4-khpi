type ForEach = <ArrayElement>(
  arr: ArrayElement[][],
  callback: (element: ArrayElement, i: number, j: number) => boolean | undefined | null | void,
) => void

export const forEach: ForEach = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      const result = callback(arr[i][j], i, j)
      if (result) {
        return
      }
    }
  }
}