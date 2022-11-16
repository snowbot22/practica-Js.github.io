//VARIABLES
let outputImg= document.getElementById("outputImg");
let inputPokemon= document.getElementById("name");
let button= document.getElementById("pkmButton");
let outputName= document.getElementById("outputName");
let outputTypeName= document.getElementById("output-type-name");


//FETCHIN POKEAPI
function showValue () {
    let pkmName= inputPokemon.value.toLowerCase();
    if(pkmName == ""){
        outputImg.src="https://upload.wikimedia.org/wikipedia/commons/6/62/MissingNo.png";
        outputName.innerText="Ingresa el nombre de un Pokemon!"
    }
    else{
        let url= `https://pokeapi.co/api/v2/pokemon/${pkmName}`;
        console.log(url);
        fetch(url).then( (err)=>{
            if(err.status == "404"){
                outputImg.src="https://i0.wp.com/media2.giphy.com/media/MziKDo6gO7x8A/giphy.gif";
                outputName.innerText="Pokemon no encontrado"
            }
            else{
                return err.json();
            }
        }).then( (data)=>{
            if(data){
                console.log(data);
                outputImg.src=data.sprites.other["official-artwork"].front_default;
                outputName.innerText=data.name.replace( data.name[0], data.name[0].toUpperCase() );
                stats(data);
                type(data);
            }
        } )
    }
}

button.addEventListener("click",showValue);


//SHOWIN STATS

let stats =(data)=>{

    //TITLES

    let outputStatsTitle1= document.getElementById("outputStats-title--1");
    let outputStatsTitle2= document.getElementById("outputStats-title--2");
    let outputStatsTitle3= document.getElementById("outputStats-title--3");
    let outputStatsTitle4= document.getElementById("outputStats-title--4");
    let outputStatsTitle5= document.getElementById("outputStats-title--5");
    let outputStatsTitle6= document.getElementById("outputStats-title--6");

    outputStatsTitle1.innerText= data.stats[0].stat.name;
    outputStatsTitle2.innerText= data.stats[1].stat.name;
    outputStatsTitle3.innerText= data.stats[2].stat.name;
    outputStatsTitle4.innerText= data.stats[3].stat.name;
    outputStatsTitle5.innerText= data.stats[4].stat.name;
    outputStatsTitle6.innerText= data.stats[5].stat.name;

    //CONTENT

    let outputStatsContent1= document.getElementById("outputStats-content--1");
    let outputStatsContent2= document.getElementById("outputStats-content--2");
    let outputStatsContent3= document.getElementById("outputStats-content--3");
    let outputStatsContent4= document.getElementById("outputStats-content--4");
    let outputStatsContent5= document.getElementById("outputStats-content--5");
    let outputStatsContent6= document.getElementById("outputStats-content--6");


    outputStatsContent1.innerText= data.stats[0].base_stat;
    outputStatsContent2.innerText= data.stats[1].base_stat;
    outputStatsContent3.innerText= data.stats[2].base_stat;
    outputStatsContent4.innerText= data.stats[3].base_stat;
    outputStatsContent5.innerText= data.stats[4].base_stat;
    outputStatsContent6.innerText= data.stats[5].base_stat;

};

//SHOWIN PKM TYPE

let type = (data) =>{
    outputTypeName.innerText=data.types[0].type.name.replace( data.types[0].type.name[0],data.types[0].type.name[0].toUpperCase() );
    let typeUrl= data.types[0].type.url;
    console.log(typeUrl);

} 

