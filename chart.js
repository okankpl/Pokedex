function renderChart(i) {
    pokemonStats = [];
    for (let j = 0; j < 6; j++) {
      let actualstat = pokemonBigCard[i]["stats"][j]["base_stat"];
      pokemonStats.push(actualstat);
    }
    const chart = document.getElementById("chart");
    Chart.defaults.font.weight = "bold";
  
    if (myChart) {
      myChart.destroy(); // lösche das vorhandene Diagramm
    }
    myChart = new Chart(chart, {
      type: "bar",
      data: {
        labels: stats,
        datasets: [
          {
            label: "",
            data: pokemonStats,
            borderWidth: 1,
            backgroundColor: barColors,
            categoryPercentage: 1, // Anteil der Kategoriebreite, die die Balken einnehmen
            barPercentage: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        indexAxis: "y",
        plugins: {
          legend: {
            display: false, // Versteckt die Legende vollständig
          },
          title: {
            display: false, // Versteckt den Titel, falls einer vorhanden ist
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              color: "black",
              font: {
                size: 13,
              },
            },
          },
          x: {
            beginAtZero: true,
            ticks: {
              color: "black",
            },
          },
        },
      },
    });
  }
  