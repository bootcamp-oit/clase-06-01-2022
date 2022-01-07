let xValues = [100, 200, 300, 400, 500, 600, 700]

new Chart("myChart", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [
            {
                data: [125, 256, 145, 589, 632, 456],
                borderColor: "red",
            },
            {
                data: [23, 22, 234, 567, 120, 121],
                borderColor: "blue",
            },
            {
                data: [455, 234, 0, 1, 2, 125],
                borderColor: "yellow",
            },
        ]
    },
    options: {
        legend: { display: false }
    }
})

new Chart("myChart2", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [
            {
                data: [125, 256, 145, 589, 632, 456],
                borderColor: "red",
            },
            {
                data: [23, 22, 234, 567, 120, 121],
                borderColor: "blue",
            },
            {
                data: [455, 234, 0, 1, 2, 125],
                borderColor: "yellow",
            },
        ]
    },
    options: {
        legend: { display: false }
    }
})
