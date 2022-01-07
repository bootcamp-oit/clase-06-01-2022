let values = [
    { x: 50, y: 7 },
    { x: 60, y: 8 },
    { x: 70, y: 9 },
    { x: 80, y: 10 },
    { x: 90, y: 11 },
    { x: 100, y: 12 },
    { x: 110, y: 12 },
    { x: 120, y: 13 },
    { x: 130, y: 14 },
    { x: 140, y: 19 },
    { x: 150, y: 20 },
    { x: 160, y: 22 },
]

new Chart("myChart", {
    type: "scatter",
    data: {
        datasets: [
            {
                pointRadius: 4,
                pointBackgroundColor: "rgb(125, 56, 100)",
                data: values
            }
        ]
    },
    options: {
        legend: { display: false }
    }
})