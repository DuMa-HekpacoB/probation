let skladData = [
    {'Название':'дрель', 'Колличество': 20, 'Цена': 2500},
    {'Название':'молоток', 'Колличество': 5, 'Цена': 500},
    {'Название':'гвоздь', 'Колличество': 5000, 'Цена': 10}
]

let korzinaData = []

var skladTbody = document.querySelector("#sklad")
var korzinaTbody = document.querySelector("#korzina")

function addDataToTbody(nl, data) {
    data.forEach((d, i) => {
        var tr = nl.insertRow(i);
        Object.keys(d).forEach((k, j) => {
            var cell = tr.insertCell(j);
            cell.innerHTML = d[k];
        });
        nl.appendChild(tr);
    })
}
addDataToTbody(skladTbody, skladData);// Добавление массива в таблицу

// swapArray = function(i,rowTable) {
//     if (rowTable === sklad){
//         korzinaData.push(skladData[i])
//     }
//     if (rowTable === korzina){
//         korzinaData.push(skladData[i])
//     }
// }

