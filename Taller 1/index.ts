import { series } from "./data";
import { Serie } from "./serieClass";

const tbody: HTMLElement = document.getElementById("series-table-body")!;
const temporadas: HTMLElement = document.getElementById("temporadas-text")!;

function regresarAttSeries() {
    for  (let i = 0; i < series.length; i++) {
        const tr = document.createElement("tr"); // Crear <tr> </tr>
        const serie = series[i];
        const attSerie = serie.getAttributeList();
        
        for  (let j = 0; j < attSerie.length; j++){
            const td = document.createElement("td"); // Crear <td> </td>
            td.textContent = attSerie[j] as string;
            tr.appendChild(td);
            }
        
            tbody.appendChild(tr);
        }
    }

function calcularAvg(){
    let promedios: number[] = [];
    for  (let i = 0; i < series.length; i++) {
        promedios.push(series[i].getTemporadas());
        }

    let sum = 0;

        for  (let j = 0; j < promedios.length; j++){
            sum += promedios[j];
        }

        let avg = sum/promedios.length;

        return avg;
    }

    regresarAttSeries();
    temporadas.textContent = calcularAvg().toFixed(2);