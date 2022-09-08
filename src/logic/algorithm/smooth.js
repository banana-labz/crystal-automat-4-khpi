/*
const cellSize = 20;
const PROBABILITY_OF_ALIVE_AT_START = 15;
const INTERVAL = 100;
const LAST_RECORDED_TIME = 0;

const DEAD = 0;
const DYING = 1;
const BIRTH = 2;
const ALIVE = 3;

const ACTIVE_COLOR = color(0, 200, 0);
const BIRTH_COLOR = color(0, 100, 0);
const DYING_COLOR = color(30, 30, 30);
const DEAD_COLOR = color(0);

// Array of cells
const cells = []; 
// Buffer to record the state of the cells and use this while changing the others in the interations
const cellsBuffer = [];

// Pause
const pause = false;

class Cell {
  let xpos;
  let ypos;
  let state;
  let diameter;
  Cell (int x, int y, int s) {
    xpos = x;
    ypos = y;
    state = s;
    diameter = cellSize;
  }
  void draw() {
    switch (state) {
      case DEAD:
        fill(DEAD_COLOR);
        break;
      case DYING:
        fill(DYING_COLOR);
        break;
      case BIRTH:
        fill(BIRTH_COLOR);
        break;
      case ALIVE:
        fill(ACTIVE_COLOR);
        break;
      }
      ellipse(xpos*cellSize+cellSize/2, ypos*cellSize+cellSize/2, diameter, diameter); 
  }
}

void setup() {
  size (1280, 720);

  Ani.init(this);
  Ani.setDefaultEasing(Ani.BACK_IN_OUT);

  // Instantiate arrays 
  cells = new Cell[width / cellSize][height / cellSize];
  cellsBuffer = new Cell[width / cellSize][height / cellSize];

  // This stroke will draw the background grid
  stroke(48);
  smooth();

  // Initialization of cells
  for (int x=0; x<width / cellSize; x++) {
    for (int y=0; y<height / cellSize; y++) {
      float state = random (100);
      //cells[x][y] = (state > PROBABILITY_OF_ALIVE_AT_START) ? DEAD : ALIVE;
      cells[x][y] = new Cell(x, y, (state > PROBABILITY_OF_ALIVE_AT_START) ? DEAD : ALIVE);
      cellsBuffer[x][y] = new Cell(x, y, DEAD);
    }
  } 
  background(0); // Fill in black in case cells don't cover all the windows
}


void draw() {
  for (int x=0; x<width / cellSize; x++) {
    for (int y=0; y<height / cellSize; y++) {
      cells[x][y].draw();
    }
  }
  // Iterate if timer ticks
  if (millis() - LAST_RECORDED_TIME > INTERVAL) {
    if (!pause) {
      iteration();
      LAST_RECORDED_TIME = millis();
    }
  }

  // Create  new cells manually on pause
  if (pause && mousePressed) {
    // Map and avoid out of bound errors
    int xCellOver = int(map(mouseX, 0, width, 0, width / cellSize));
    xCellOver = constrain(xCellOver, 0, width / cellSize-1);
    int yCellOver = int(map(mouseY, 0, height, 0, height / cellSize));
    yCellOver = constrain(yCellOver, 0, height / cellSize-1);

    // Check against cells in buffer
    if (cellsBuffer[xCellOver][yCellOver].state >= BIRTH) { // Cell is alive
      cells[xCellOver][yCellOver].state =DEAD; // Kill
      fill(DEAD_COLOR); // Fill with kill color
    } else { // Cell is dead
      cells[xCellOver][yCellOver].state = ALIVE; // Make alive
      fill(ACTIVE_COLOR); // Fill alive color
    }
  } 
  else if (pause && !mousePressed) { // And then save to buffer once mouse goes up
    // Save cells to buffer (so we opeate with one array keeping the other intact)
    for (int x=0; x<width / cellSize; x++) {
      for (int y=0; y<height / cellSize; y++) {
        cellsBuffer[x][y].state = cells[x][y].state;
      }
    }
  }
}

void iteration() { // When the clock ticks
  // Save cells to buffer (so we opeate with one array keeping the other intact)
  for (int x=0; x<width / cellSize; x++) {
    for (int y=0; y<height / cellSize; y++) {
      cellsBuffer[x][y].state = cells[x][y].state;
    }
  }

  // Visit each cell:
  for (int x=0; x<width / cellSize; x++) {
    for (int y=0; y<height / cellSize; y++) {
      // And visit all the neighbours of each cell
      int neighbours = 0; // We'll count the neighbours
      for (int xx=x-1; xx<=x+1;xx++) {
        for (int yy=y-1; yy<=y+1;yy++) {  
          if (((xx>=0)&&(xx<width / cellSize))&&((yy>=0)&&(yy<height / cellSize))) { // Make sure you are not out of bounds
            if (!((xx==x)&&(yy==y))) { // Make sure to to check against self
              if (cellsBuffer[xx][yy].state >= BIRTH){
                neighbours ++; // Check alive neighbours and count them
              }
            } // End of if
          } // End of if
        } // End of yy loop
      } //End of xx loop
      // We've checked the neigbours: apply rules!
      if (cellsBuffer[x][y].state >=BIRTH) { // The cell is alive: kill it if necessary
        if (neighbours < 2 || neighbours > 3) {
          cells[x][y].state = DYING; // Die unless it has 2 or 3 neighbours
        } else {
          cells[x][y].state = ALIVE; // upgrade birthed cells to fully alive
        }
      } 
      else { // The cell is dying or dead: make it live if necessary      
        if (neighbours == 3 ) {
          cells[x][y].state = BIRTH; // Only if it has 3 neighbours
        } else {
          cells[x][y].state = DEAD; // upgrade dying cells to fully dead
        }
      } // End of if
    } // End of y loop
  } // End of x loop
  
/*  
  for (int x=0; x<width / cellSize; x++) {
    for (int y=0; y<height / cellSize; y++) {
      if (cells[x][y].state >= BIRTH) {
        Ani.to(cells[x][y], INTERVAL/2, "diameter", cellSize);
      } else {
        Ani.from(cells[x][y], INTERVAL/2, "diameter", 0);   
      }     
    }
  }
*/
/*
} // End of function

void keyPressed() {
  if (key=='r' || key == 'R') {
    // Restart: reinitialization of cells
    for (int x=0; x<width / cellSize; x++) {
      for (int y=0; y<height / cellSize; y++) {
        float state = random (100);
        cells[x][y].state = (state > PROBABILITY_OF_ALIVE_AT_START) ? DEAD : ALIVE;
      }
    }
  }
  if (key==' ') { // On/off of pause
    pause = !pause;
  }
  if (key=='c' || key == 'C') { // Clear all
    for (int x=0; x<width / cellSize; x++) {
      for (int y=0; y<height / cellSize; y++) {
        cells[x][y].state = DEAD; // Save all to zero
      }
    }
  }
}
*/
export { }