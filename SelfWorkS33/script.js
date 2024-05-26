//Traccia 1

// let persona={
//     'nome':'Vlad',
//     'cognome':'Lazar',
//     'età':'23',
//     'Saluta': function(){
//         console.log(`Ciao, mi chiamo ${this.nome} ${this.cognome}, e ho ${this.età} anni`);
//     },
// }
// persona.Saluta();

//Traccia 2
// let agenda={
//     'contacts': [
//         {'contatto':'Nicola, 3331111111'},
//         {'contatto':'Lorenzo, 3332222222'},
//         {'contatto':'Paola, 3333333333'},
//         {'contatto':'Jenny, 3334444444'}
//     ],
//     'showContacts': function (){
//         console.log(agenda.contacts);
//     },
//     'singleContact': function(){
//         console.log(agenda.contacts[0]);
//     },
//     'deleteContact': function(nome){
//         nome=prompt("Scegli il nome da cancellare");
//         let index=this.contacts.indexOf(nome);
//         if(index==-1){
//             console.log(`Il contatto ${nome} non è presente in rubrica`);
//         }else{
//             this.contacts.splice(index, 1);
//         console.log(`Il contatto ${nome} è stato rimosso`);
//         }
//         console.log(this.contacts);
//     },
// }
// agenda.showContacts();
// agenda.singleContact();
// //agenda.deleteContact();

let bowling = {
    'players': [
        {'name':'Livio','scores':[]},
        {'name':'Paola','scores':[]},
        {'name':'Filippo','scores':[]},
        {'name':'Giuseppe','scores':[]},
    ],
    createScores: function(){
        this.players.forEach((player)=>{
            for(let i=0;i<10;i++){
                player.scores.push(Math.floor(Math.random()*(10-1+1)+1));
            }
        });
    },
    findFinalScores: function(){
        this.players.forEach((player)=>{
            let totalScore=player.scores.reduce((acc,score)=>acc+score);
            player.finalScore=totalScore;
        })
    },
    addPlayer: function(playerName){
        let newPlayer={name: playerName, scores:[]};
        for(let i=0;i<10;i++){
            newPlayer.scores.push(Math.floor(Math.random()*(10-1+1)+1));
        }
        let totalScore=newPlayer.scores.reduce((acc,score)=>acc+score);
        newPlayer.finalScore=totalScore;
        this.players.push(newPlayer);
    },
}
bowling.createScores();
bowling.findFinalScores();
bowling.addPlayer('Vlad');
console.log(bowling.players);


