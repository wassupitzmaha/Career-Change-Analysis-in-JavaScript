
document.addEventListener("DOMContentLoaded", showPieChart);

function showPieChart() {
    console.log("Rendering pie chart...");
    
    let sliceA = { size: 373, color: "blue" };
    let sliceB = { size: 3875, color: "green" };

    const values = [sliceA.size, sliceB.size];
    const total = values.reduce((acc, val) => acc + val, 0);
    let startAngle = 0;

    const canvas = document.getElementById("pie-chart");
    const ctx = canvas.getContext("2d");

    values.forEach((value, index) => {
        const angle = (value / total) * Math.PI * 2;

        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, canvas.height / 2);
        ctx.arc(
            canvas.width / 2,
            canvas.height / 2,
            canvas.width / 2,
            startAngle,
            startAngle + angle
        );

        ctx.closePath();
        ctx.fillStyle = index === 0 ? sliceA.color : sliceB.color;
        ctx.fill();

        startAngle += angle;
    });

    // Show legend
    const legend = document.getElementById("pie-chart-legend");
    legend.innerHTML = `
        <div class="legend-item">
            <div class="legend-color" style="background-color:${sliceA.color}"></div>
            <div class="legend-label">People who did not become Mechanical Engineer: ${sliceA.size} - ${((sliceA.size / total) * 100).toFixed(2)}%</div>
        </div>
        <div class="legend-item">
            <div class="legend-color" style="background-color:${sliceB.color}"></div>
            <div class="legend-label">People who majored in Mechanical Engineering: ${sliceB.size} - ${((sliceB.size / total) * 100).toFixed(2)}%</div>
        </div>
    `;
}
