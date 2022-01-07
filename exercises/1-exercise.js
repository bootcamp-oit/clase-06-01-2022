let labels = ["africa", "usa", "peru", "argentina", "venezuela"]
let colors = ["blue", "green", "yellow", "cyan", "orange"]


let data = getRandomData(255, 555, labels);
console.log(data)
new Chart(document.getElementById("canvas"), {
    type: "horizontalBar",
    data: {
        labels: labels,
        datasets: [
            {
                backgroundColor: colors,
                data: data,
            }
        ]
    },
    options: {
        legend: { display: false },
        title: {
            display: true,
            text: "Horizontal Bar type chart"
        }
    }
})

function getRandomData(min, max, labels) {
    let data = [];

    for (let index = 0; index < labels.length; index++) {
        let number = Math.floor(Math.random() * (max - min)) + min;
        data.push(number)
    }

    return data;
}

console.log()