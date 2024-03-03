//question 3

//use rest countries API url and print all countries names,regions,subregion and populations

let countries = new XMLHttpRequest()
console.log(countries);
countries.open("GET", "https://restcountries.com/v3.1/all");
countries.send();
countries.onload= function(){
    let result=JSON.parse(countries.response);
    for(let i = 0 ; i< result.length ; i++){
        console.log(result[i].name.common);
        console.log(result[i].region);
        console.log(result[i].subregion); 
        console.log(result[i].population); 

    }
} 