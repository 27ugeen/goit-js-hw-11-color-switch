'use strict';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// console.log(colors.length);

const refs = {
  body: document.body,
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};

const changeBodyColor = {
  isActive: false,

  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;

    this.colorId = setInterval(() => {
      const randomIdx = randomIntegerFromInterval(0, colors.length - 1);

      refs.body.style.backgroundColor = colors[randomIdx];
    }, 1000);
  },
  stop() {
    this.isActive = false;
    clearInterval(this.colorId);
    refs.body.removeAttribute('style');
  },
};

refs.startBtn.addEventListener(
  'click',
  changeBodyColor.start.bind(changeBodyColor),
);
refs.stopBtn.addEventListener(
  'click',
  changeBodyColor.stop.bind(changeBodyColor),
);

//======================================

// const refs = {
//   body: document.body,
//   startBtn: document.querySelector('button[data-action="start"]'),
//   stopBtn: document.querySelector('button[data-action="stop"]'),
// };

// function getRandomColor() {
//   const letters = '0123456789ABCDEF';
//   let color = '#';
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

// const changeBodyColor = {
//   isActive: false,

//   start() {
//     if (this.isActive) {
//       return;
//     }
//     this.isActive = true;

//     this.colorId = setInterval(() => {
//       // const randomColor = '#' + (((1 << 24) * Math.random()) | 0).toString(16);
//       //   const randomColor = Math.random().toString(16);
//       // let randomColor = getRandomColor();

//       // console.log(randomColor);
//       refs.body.style.backgroundColor = getRandomColor();
//     }, 1000);
//   },
//   stop() {
//     this.isActive = false;
//     clearInterval(this.colorId);
//     refs.body.removeAttribute('style');
//   },
// };

// refs.startBtn.addEventListener(
//   'click',
//   changeBodyColor.start.bind(changeBodyColor),
// );
// refs.stopBtn.addEventListener(
//   'click',
//   changeBodyColor.stop.bind(changeBodyColor),
// );
