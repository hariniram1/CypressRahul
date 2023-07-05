// console.log('test');

// let members = [{
//     name: 'kousic',
//     age: 30,
//     place: 'frisco',
//     sex: 'male'
// },
// {
//     name: 'harini',
//     age: 30,
//     place: 'dallas',
//     sex:'female'
// },{
//     name: 'harshik',
//     age: 30,
//     place: 'columbus',
//     sex: 'male'

// }];

// const maleArray = members.filter((member) => member.sex === 'male' )
//                             .map((member) => member.name);

// console.log(maleArray)


// const salutationArray = members.map((member) => {
//     if(member.sex === 'male') {
//         return 'MR ' + member.name;
//     }
//     else {
//         return 'MS ' + member.name;
//     }
// })

// console.log(salutationArray)


//const axios = require('axios');

fetch('https://weatherapi-com.p.rapidapi.com/sports.json?q=London', {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    },
}).then((response) => {
    response.text().then((result) => {
            console.log(result);
            const resultObject = JSON.parse(result);
            console.log(resultObject.football)
            resultObject.football.map((stadium) => console.log(`${stadium.stadium} is in ${stadium.country}`))
     });
});

//sample code
