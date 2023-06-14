import { MONTHS, randomInteger } from "./utils.js";

const labels = MONTHS.slice(0, 6);

const allCanvas = document.querySelectorAll("canvas");

allCanvas.forEach((el) => {
  const { type, colorDatalabels } = el.dataset;

  const data = {
    labels: labels, // từ tháng 1 -> tháng 6
    datasets: [
      {
        label: "Total Income",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        // random data trong khoảng 100 -> 500 tương ứng tháng 1 -> tháng 6
        data: Array.from({ length: labels.length }).map(() =>
          randomInteger(1000, 15000)
        ),
        tension: 0.2,
      },
    ],
  };

  const config = {
    type: type,
    data: data,
  };

  // tạo biểu đồ
  new Chart(el, config);
});