export const renderIteration = (
  context: CanvasRenderingContext2D,
  cellSize: number,
  iteration: number,
  padding: number = 16,
) => {
  const fontSize = 4 * cellSize

  context.font = `${fontSize}px Ubuntu, sans-serif`
  context.textAlign = "end"
  context.strokeStyle = "black"
  context.lineWidth = 4
  context.strokeText(`${iteration}`, context.canvas.width - padding, padding + fontSize)
  context.fillStyle = "white"
  context.fillText(`${iteration}`, context.canvas.width - padding, padding + fontSize)
}