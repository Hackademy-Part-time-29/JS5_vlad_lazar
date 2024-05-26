// Esercizio 8
// function fibonacciLimite(n){
//     n=prompt("Inserisci il numero limite");
//     let array=[0,1];
//     for(let i=2;i<=n;i++){
//         array[i]=array[i-1]+array[i-2];
//         if(array[i]>=n){
//             array.pop();
//             break;
//         }
//     }
//     console.log(array);
// }
// fibonacciLimite();

//Esercizio 10
// function sommaStringa(str){
//     str=prompt("Inserisci una frase");
//     let array=str.split(" ");
//     let arrayN=array.filter((number)=>isFinite(number));
//     let somma=arrayN.reduce((acc,num)=> Number(acc)+Number(num));
//     console.log(somma);
// }
// sommaStringa();

//Esercizio 11
// function numeriMaggiori(n){
//     let n2=prompt("Quanti numeri vuoi generare?");
//     n=prompt("Forniscimi un numero soglia");
//     let array=[];
//     for(let i=0;i<=25;i++){
//         array[i]=Math.floor(Math.random()*(n2-1)+1);
//     }
//     let numMagg=array.filter((num)=>num>n);
//     console.log(`I numeri maggiori del numero di soglia sono ${numMagg}`);

// }
// numeriMaggiori();

//Esercizio 12
// function conversioneOra(n){
//     n=prompt("Dammi un numero di quattro cifre trasformare in ora e che trovi corrispondenza sull'orologio");
//     let arrayN=n.split("");
//     let arrayDD=arrayN.toSpliced(2, 0, ":");
//     if(Number(arrayDD[0])>2 || Number(arrayDD[1])>9 || Number(arrayDD[3])>5 || Number(arrayDD[4])>9){
//         console.log("Dammi un numero che non abbia le prime due cifre maggiori di 23 e le ultime due maggiori di 59!");
//     }else {
//         let arrayStr=arrayDD.join("");
//         let ora=arrayStr.toString();
//         console.log(`L'ora è ${ora}`);
//     }

// }
// conversioneOra();


//Esercizio 16
// function nomiMaiusc(nomiMin){
//     nomiMin=["ivankov", "basin", "immanuel"];
//     let nomiMag=nomiMin.map((nome)=>nome[0].toUpperCase()+nome.split("").splice(1, nome.length).join("").toLowerCase());
//     console.log(nomiMag);
// }
// nomiMaiusc();

