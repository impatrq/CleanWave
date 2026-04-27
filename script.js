alert("JS conectado");

// gráficos
function crearGrafico(id, label) {
    return new Chart(document.getElementById(id), {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: label,
                data: [],
            }]
        }
    });
}

const grafTemp = crearGrafico('grafTemp', 'Temperatura (°C)');
const grafPh = crearGrafico('grafPh', 'pH');
const grafCond = crearGrafico('grafCond', 'Conductividad');
const grafOx = crearGrafico('grafOx', 'Oxígeno');

// funcion de actualizar
function actualizarDatos() {

    let temp = +(20 + Math.random()*5).toFixed(1);
    let ph = +(6 + Math.random()*2).toFixed(2);
    let cond = +(1000 + Math.random()*500).toFixed(0);
    let ox = +(5 + Math.random()*3).toFixed(1);

// actualizar texto

    document.getElementById("temp").textContent = temp;
    document.getElementById("ph").textContent = ph;
    document.getElementById("cond").textContent = cond;
    document.getElementById("ox").textContent = ox;

    let tiempo = new Date().toLocaleTimeString();

// funcion para agregar datos

    function actualizarGrafico(grafico, valor) {
        grafico.data.labels.push(tiempo);
        grafico.data.datasets[0].data.push(valor);

        if (grafico.data.labels.length > 10) {
            grafico.data.labels.shift();
            grafico.data.datasets[0].data.shift();
        }

        grafico.update();
    }

    actualizarGrafico(grafTemp, temp);
    actualizarGrafico(grafPh, ph);
    actualizarGrafico(grafCond, cond);
    actualizarGrafico(grafOx, ox);
}

setInterval(actualizarDatos, 2000);