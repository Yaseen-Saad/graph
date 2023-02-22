




var xValues = [prompt('yor x values'), 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
var yValues = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [
      {
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(0,0,255,1.0)",
        borderColor: "rgba(0,0,255,0.1)",
        data: yValues,
      },
    ],
  },
  options: {
    legend: { display: false },
    scales: {
      yAxes: [{ ticks: { min: 6, max: 16 } }],
    },
  },
});
















// let X = Number(2); //prompt("enter your X"));
// let Y = Number(4); //prompt("enter your Y"));
// let graph = document.querySelector(".graph");
// let x_axis = document.querySelector(".x-axis");
// let y_axis = document.querySelector(".y-axis");
// let x = 16;
// let y = 16;
// for (let i = 1; i < x; i++) {
//   console.log((innerWidth / x) * i);
//   let num = document.createElement("div");
//   num.style.cssText = `width: calc(100% / ${x});`;
//   num.innerHTML = x / 2 - i;
//   x_axis.append(num);
// }

// for (let i = 1; i < y; i++) {
//   console.log((innerWidth / y) * i);
//   let num = document.createElement("div");
//   num.style.cssText = `height: calc(100% / ${y + 40});`;
//   num.innerHTML = y / 2 - i;
//   y_axis.append(num);
// }
// x_axis.style.cssText = `width:${
//   document.querySelector("body .graph .X").clientWidth / 2
// }grid-template-columns: repeat(${y},1fr);`;

// graph.style.cssText = `height:${
//   document.querySelector("body .graph .X").clientWidth
// }px;`;
