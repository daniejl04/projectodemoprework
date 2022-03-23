


function calcularMediaAri(lista){
//     let sumalista = 0;
// for (let i = 0; i < lista.length; i++){
//     sumalista = sumalista + lista[i];
// }


const sumalista = lista.reduce(
    function (valorAcumulado = 0, nuevoelemento){
        return valorAcumulado + nuevoelemento;
    }
);
const promediolista = sumalista / lista.length;

return promediolista;
}