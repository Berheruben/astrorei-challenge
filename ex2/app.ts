function countSmallerElements(arr1: number[], arr2: number[]): number[] {
    const sorted1 = arr1.sort((a, b) => a - b); // Ordina il primo array
    
    return arr2.map((x) => {
      // Utilizza ricerca binaria per trovare l'indice dell'ultimo elemento inferiore a x
      let left = 0;
      let right = sorted1.length - 1;
      let index = -1;
      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (sorted1[mid] < x) {
          index = mid;
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
      return index + 1; // Aggiungi 1 per includere anche l'elemento con valore x stesso
    });
  }
  const arr1 = [0, 1, 2, 3, 4, 5];
  const arr2 = [1, 3, 5];
  
  // Esegui la funzione countsmallerelements con gli array di input
  const result = countSmallerElements(arr1, arr2);
  
  // Verifica il risultato
  console.log(result);   