//Prima traccia

// let array=[];
// for(let i=0;i<10;i++){
//     array.push(Math.floor(Math.random()*(100-1)+1));
//     console.log(array[i]);
// }
// console.log(" ");
// let decre=array.sort((a,b)=>a-b);
// array.reverse();
// console.log(array);
// array.reverse();
// console.log(array);

//Seconda traccia

// let array=[];
// let vmin=0;
// let vmag=0;
// for(let i=0;i<13;i++){
//     array.push(Math.floor(Math.random()*(100-1)+1));
//     console.log(array[i]);
// }
// let media=(array.reduce((acc,n)=>acc+n))/13;
// console.log(`La media è ${media}`);
// let minoriMedia=array.filter((num)=>num<media);
// console.log(`I numeri minori della media sono ${minoriMedia.length}`);

//Terza traccia

// function isPalindroma(str){
//     str=prompt("Inserisci una stringa");
//     let c=0;
//     let nospace=str.split(" ").join("").toLowerCase();
//     let array=nospace.split("");
//     let arrayInv=array.toReversed();
//     for(let i=0; i<array.length;i++){
//     if(arrayInv[i]==array[i]){
//         c++;
//     }
// }
//     if(c==array.length){
//         console.log(true);
//     }else{
//         console.log(false);
//     }
// }
// isPalindroma();

// function isPalindroma(frase){
//     frase=prompt("Inserisci la frase");
//     let frasePulita=frase.replace(/\W/g, "").toLowerCase();
//     let fraseAlContrario=frasePulita.split("").reverse().join("");
//     if(frasePulita==fraseAlContrario){
//         console.log(true);
//     }else{
//         console.log(false);
//     }
// }
// isPalindroma();




