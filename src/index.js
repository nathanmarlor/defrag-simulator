import p5 from 'p5';
import config from './config';

const sketch = (p) => {
  let blocks = [];
  let currentIndex = 0;
  let lastUpdate = 0;

  p.setup = function() {
    p.createCanvas(
      config.grid.cols * 30,
      config.grid.rows * 30
    );
    p.textSize(20);
    initializeBlocks();
  };

  p.draw = function() {
    p.background(config.colors.background);
    p.fill(config.colors.foreground);
    p.noStroke();

    for (let block of blocks) {
      p.text(config.blockChar, block.x * 30, (block.y + 1) * 30);
    }

    if (p.millis() - lastUpdate > config.simulationSpeed) {
      lastUpdate = p.millis();
      if (currentIndex < blocks.length) {
        // Simulate defrag moving blocks
        let block = blocks[currentIndex];
        block.y = (block.y + 1) % config.grid.rows;
        currentIndex++;
      } else {
        currentIndex = 0;
      }
    }
  };

  function initializeBlocks() {
    blocks = [];
    for (let y = 0; y < config.grid.rows; y++) {
      for (let x = 0; x < config.grid.cols; x++) {
        if (p.random() > 0.7) {
          blocks.push({ x, y });
        }
      }
    }
  }
};

new p5(sketch);
