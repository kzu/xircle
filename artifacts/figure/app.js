const root = document.documentElement;
    const stored = localStorage.getItem("theme");
    const preferDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = stored || (preferDark ? "dark" : "light");
    root.setAttribute("data-theme", initial);

    const btn = document.getElementById("themeBtn");
    btn.addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      paintCharts();
    });

    const ink = () => getComputedStyle(root).getPropertyValue("--ink").trim();
    const muted = () => getComputedStyle(root).getPropertyValue("--muted").trim();
    const line = () => getComputedStyle(root).getPropertyValue("--line").trim();
    const accent = () => getComputedStyle(root).getPropertyValue("--accent").trim();
    const paper = () => getComputedStyle(root).getPropertyValue("--paper").trim();

    let charts = [];
    function paintCharts() {
      charts.forEach(c => c.destroy());
      charts = [];
      if (typeof Chart === "undefined") return;
      Chart.defaults.font.family = '"Source Sans 3", system-ui, sans-serif';
      Chart.defaults.color = muted();
      Chart.defaults.borderColor = line();

      const grid = { color: line(), drawTicks: false };
      const ticks = { color: muted(), font: { size: 11 } };

      charts.push(new Chart(document.getElementById("valChart"), {
        type: "bar",
        data: {
          labels: ["A · may 23", "B · feb 24", "C · sep 25"],
          datasets: [{
            label: "Post-money, USD B",
            data: [0.5, 2.6, 39],
            backgroundColor: accent(),
            borderRadius: 6,
            barPercentage: 0.55
          }]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: { grid: { display: false }, ticks },
            y: { grid, ticks: { ...ticks, callback: v => "$" + v + "B" }, beginAtZero: true }
          }
        }
      }));

      charts.push(new Chart(document.getElementById("prodChart"), {
        type: "line",
        data: {
          labels: ["2025 FY", "Feb 26", "Mar 26", "Abr 26", "Jul 26 acum."],
          datasets: [{
            label: "Unidades",
            data: [150, 60, 120, 240, 1000],
            borderColor: accent(),
            backgroundColor: accent(),
            tension: 0.25, pointRadius: 4, pointBackgroundColor: paper(),
            pointBorderWidth: 2, borderWidth: 2
          }]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: { grid: { display: false }, ticks },
            y: { grid, ticks, beginAtZero: true }
          }
        }
      }));

      charts.push(new Chart(document.getElementById("compChart"), {
        type: "bar",
        data: {
          labels: ["Figure", "Unitree*", "B. Dynamics*", "Apptronik", "1X / otros"],
          datasets: [{
            label: "USD B",
            data: [39, 55, 20, 5.3, 1.4],
            backgroundColor: accent(),
            borderRadius: 6,
            barPercentage: 0.6
          }]
        },
        options: {
          indexAxis: "y",
          responsive: true, maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: { grid, ticks: { ...ticks, callback: v => "$" + v + "B" }, beginAtZero: true },
            y: { grid: { display: false }, ticks }
          }
        }
      }));

      charts.push(new Chart(document.getElementById("mktChart"), {
        type: "line",
        data: {
          labels: ["2025", "2026", "2027", "2028", "2029", "2030", "2031"],
          datasets: [{
            label: "Mercado humanoids, USD B",
            data: [4.8, 7.1, 10.4, 15.5, 23.0, 34.5, 52.0],
            borderColor: accent(),
            backgroundColor: accent(),
            tension: 0.3, pointRadius: 3, pointBackgroundColor: paper(),
            pointBorderWidth: 2, borderWidth: 2, fill: false
          }]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: { grid: { display: false }, ticks },
            y: { grid, ticks: { ...ticks, callback: v => "$" + v + "B" }, beginAtZero: true }
          }
        }
      }));
    }

    function boot() {
      if (typeof Chart === "undefined") { setTimeout(boot, 40); return; }
      paintCharts();
    }
    boot();
