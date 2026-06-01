const config = {
  grid: {
    cols: parseInt(process.env.GRID_COLS, 10) || 16,
    rows: parseInt(process.env.GRID_ROWS, 10) || 8,
  },
  blockChar: process.env.BLOCK_CHAR || '\u2588',
  simulationSpeed: parseInt(process.env.SIMULATION_SPEED, 10) || 50,
  colors: {
    background: process.env.BG_COLOR || '#0000AA',
    foreground: process.env.FG_COLOR || '#FFFFFF',
  },
};

export default config;
