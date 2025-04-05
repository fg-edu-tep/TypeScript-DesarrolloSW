import { series } from "./data.js";
const tbody = document.getElementById("series-table-body");
const temporadas = document.getElementById("temporadas-text");
function regresarAttSeries() {
    for (let i = 0; i < series.length; i++) {
        const tr = document.createElement("tr"); // Crear <tr> </tr>
        const serie = series[i];
        const attSerie = serie.getAttributeList();
        for (let j = 0; j < attSerie.length; j++) {
            const td = document.createElement("td"); // Crear <td> </td>
            if (attSerie[j] === serie.getNombre()) {
                console.log("Entré a nombres");
                // Entonces Hagámos al nombre clickeable
                const a = document.createElement("a");
                a.textContent = serie.getNombre();
                a.href = "#";
                a.onclick = (event) => {
                    mostrarCard(serie);
                };
                td.appendChild(a);
            }
            else {
                // El resto de atributos vale mondá
                td.textContent = attSerie[j];
            }
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
}
function calcularAvg() {
    let promedios = [];
    for (let i = 0; i < series.length; i++) {
        promedios.push(series[i].getTemporadas());
    }
    let sum = 0;
    for (let j = 0; j < promedios.length; j++) {
        sum += promedios[j];
    }
    let avg = sum / promedios.length;
    return avg;
}
function mostrarCard(serie) {
    const serieCard = document.getElementById("series-card");
    serieCard.innerHTML = " "; // Borrar contenido anterior
    const img = document.createElement("img");
    img.classList.add("card-img-top"); // Agregar el estilo de bootstrap
    const cbody = document.createElement("div");
    cbody.classList.add("card-body"); // Agregar el estilo de bootstap
    const titulo = document.createElement("h5");
    titulo.classList.add("card-title"); // Agregar el estilo de bootstap
    const synopsis = document.createElement("h6");
    synopsis.classList.add('card-subtitle', 'mb-2', 'text-muted'); // Agregar el estilo de bootstap
    const link = document.createElement("a");
    link.classList.add("card-link");
    link.target = "_blank"; // Abrir en newtab
    // Agregar la Imagen
    img.src = serie.getImagen();
    // Imgur tiró 403 todas las veces que se probó:
    img.onerror = () => {
        img.src = "https://dummyimage.com/600x400/1ca8b2/fff.png&text=Imagen+no+carga+(imgur+-+403)"; // Usamos https://dummyimage.com/
        // Esto debería ser un bono
    };
    // Agregar el resto de atributos
    titulo.textContent = serie.getNombre();
    synopsis.textContent = serie.getResumen();
    link.href = serie.getLink(); // a dónde va
    link.textContent = serie.getLink(); // El texto es explícito
    cbody.appendChild(titulo);
    cbody.appendChild(synopsis);
    cbody.appendChild(link);
    serieCard.appendChild(img);
    serieCard.appendChild(cbody);
}
regresarAttSeries();
temporadas.textContent = calcularAvg().toFixed(2);
