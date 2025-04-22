<script setup>
import { ref, reactive, onMounted } from 'vue';

const canvas1 = ref(null);
const canvas2 = ref(null);
const bgCanvas = ref(null);
const MAX_WIDTH = 500;

const colors = reactive({ bg: '', paint: '' });
const boxData = ref([]);
const config = reactive({
  contagious: { base: 0.1, samey: 0.2, samex: 0.2, diag: 0.4, quota: 200 },
  wave: { amp: 2, freq: 0.5, shift: 1 },
  sine: { A: 10, B: 0.2, C: 10, D: 50 },
});

const ALGO = ['random_box', 'contagious', 'random', 'wave', 'sine', 'compound'];

const getRandomColor = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0')}`;

const draw = (canvas, color, boxes) => {
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = color.bg;
  ctx.fillRect(0, 0, MAX_WIDTH, MAX_WIDTH);
  ctx.fillStyle = color.paint;
  boxes.forEach(b => ctx.fillRect(b.x, b.y, b.width, b.height));
};

const randomBox = () => Array.from({ length: Math.floor(Math.random() * MAX_WIDTH) }, () => ({
  x: Math.random() * MAX_WIDTH | 0,
  y: Math.random() * MAX_WIDTH | 0,
  width: Math.random() * 50 | 0,
  height: Math.random() * 50 | 0
}));

const random = (p = 0.5) => {
  const b = [];
  for (let x = 0; x < MAX_WIDTH; x++) {
    for (let y = 0; y < MAX_WIDTH; y++) {
      if (Math.random() < p) b.push({ x, y, width: 1, height: 1 });
    }
  }
  return b;
};

const contagious = () => {
  const { base, samey, samex, diag, quota } = config.contagious;
  const grid = Array(MAX_WIDTH).fill().map(() => Array(MAX_WIDTH).fill(0));
  const b = [], q = { val: quota };

  for (let x = 0; x < MAX_WIDTH; x++) {
    for (let y = 0; y < MAX_WIDTH; y++) {
      let p = 0;
      if (x > 0 && grid[x - 1][y]) p += samex;
      if (y > 0 && grid[x][y - 1]) p += samey;
      if (x > 0 && y > 0 && grid[x - 1][y - 1]) p += diag;
      if (!p && q.val > 0) p = base;

      if (Math.random() < p) {
        grid[x][y] = 1;
        b.push({ x, y, width: 1, height: 1 });
        if (!p && q.val > 0) q.val--;
      }
    }
  }
  return b;
};

const wave = () => {
  const { amp, freq, shift } = config.wave;
  const b = [];
  for (let x = 0; x < MAX_WIDTH; x += 4) {
    for (let y = 0; y < MAX_WIDTH; y += 4) {
      b.push({
        x: x + Math.sin(x * freq + Math.PI * shift) * amp,
        y: y + Math.cos(y * freq + Math.PI * shift) * amp,
        width: 4, height: 4
      });
    }
  }
  return b;
};

const sine = () => {
  const { A, B, C, D } = config.sine;
  return Array.from({ length: MAX_WIDTH }, (_, x) => ({
    x,
    y: A * Math.sin(B * x + C) + D,
    width: 4,
    height: 4
  }));
};

const compound = () => {
  const b = [], w = 30 + Math.random() * 50, h = w, ox = Math.random() * 40, oy = Math.random() * 40;
  for (let x = 0; x < MAX_WIDTH; x++) {
    for (let y = 0; y < MAX_WIDTH; y++) {
      if (x > ox && x < ox + w && y > oy && y < oy + h)
        b.push({ x, y, width: 1, height: 1 });
    }
  }
  return b;
};

const algorithmMap = {
  random_box: randomBox,
  contagious,
  random,
  wave,
  sine,
  compound
};


const randomDraw = () => {
  const algo = ALGO[Math.floor(Math.random() * ALGO.length)];
  colors.bg = getRandomColor(); colors.paint = getRandomColor();
  const boxes = algorithmMap[algo]();
  draw(canvas1.value, colors, boxes);
  draw(canvas2.value, { bg: colors.paint, paint: colors.bg }, boxes);

  const bg = bgCanvas.value;
  const ctx = bg.getContext('2d');

  const source1 = canvas1.value;
  const source2 = canvas2.value;

  // Set final canvas to full screen
  bg.width = window.innerWidth;
  bg.height = window.innerHeight;

  const tileW = source1.width;
  const tileH = source1.height;

  const cols = Math.ceil(window.innerWidth / tileW);
  const rows = Math.ceil(window.innerHeight / tileH);

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const source = Math.random() < 0.5 ? source1 : source2;
      ctx.drawImage(source, x * tileW, y * tileH);
    }
  }

};


onMounted(randomDraw);
</script>

<template>
    <button @click="randomDraw" class="bg-blue-400 px-4 py-2 rounded fixed bottom-0 m-4">Randomize Wallpaper</button>
    <div class="-z-10 fixed w-full h-full bg-red-200">
        <div id="bg" class="w-full h-full">
  <canvas ref="bgCanvas" class="fixed top-0 left-0 w-full h-full"></canvas>
  <canvas ref="canvas1" width="75" height="75" class="hidden" />
  <canvas ref="canvas2" width="75" height="75" class="hidden" />
</div>
    </div>
  </template>
  