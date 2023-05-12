function countSmallerElements(arr1, arr2) {
    var sorted1 = arr1.sort(function (a, b) { return a - b; }); // Ordina il primo array
    return arr2.map(function (x) {
        // Utilizza ricerca binaria per trovare l'indice dell'ultimo elemento inferiore a x
        var left = 0;
        var right = sorted1.length - 1;
        var index = -1;
        while (left <= right) {
            var mid = Math.floor((left + right) / 2);
            if (sorted1[mid] < x) {
                index = mid;
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
        }
        return index + 1; // Aggiungi 1 per includere anche l'elemento con valore x stesso
    });
}
var arr1 = [0, 1, 2, 3, 4, 5];
var arr2 = [1, 3, 5];
// Esegui la funzione countSmallerElements con gli array di input
var result = countSmallerElements(arr1, arr2);

console.log(result);
