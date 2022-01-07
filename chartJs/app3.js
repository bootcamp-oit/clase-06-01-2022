let xValues = ["Italy", "USA", "SPAIN", "GERMANY", "PERU", "VENEZUELA", "ARGENTINA"]
let colors = ["blue", "yellow", "cyan", "purple", "pink", "orange", "green"]
let yValues = []


function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

for (let index = 0; index < xValues.length; index++) {
    yValues.push(getRandomArbitrary(25, 456))
}


new Chart("myCanvas", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [
            {
                backgroundColor: colors,
                hoverBorderColor: colors2,
                data: yValues,
            },
        ]
    },
    options: {
        legend: { display: false }
    }
})

