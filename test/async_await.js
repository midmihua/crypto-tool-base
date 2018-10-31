const fetch = require('node-fetch');

// 1
// function getUser(id){
//     return {id: 1};
// }

// let user = getUser(1);
// console.log(user);

// 2
// async function getUser(id){
//     return {id: 1};
// }

// getUser(1).then(user => console.log(user));

// 3
// async function getUser(id){
//     return Promise.resolve({id: 1});
// }

// getUser(1).then(user => console.log(user));

// 4
// async function getUser(id){
//     return {id: 1};
// }

// let user = await getUser(1);
// console.log(user);

// 5
// async function getUser(id){
//     return {id: 1};
// }

// async function main() {
//     let user = await getUser(1);
//     console.log(user);
// }
// main();

// 6
// function getUser(id){
//     return Promise.resolve({id: 1});
// }

// async function main() {
//     let user = await getUser(1);
//     console.log(user);
// }
// main();

// ========================================================
// 1
// function getUser(id){
//     return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//             .then(response => response.json());
// }

// async function main() {
//     let user = await getUser(1);
//     console.log(user);
// }
// main();

// 2
// async function getUser(){
//     try {
//         const response = await fetch('https://kuna.io/api/v2/tickers/btcuah')
//         const data = await response.json(); 
//         return data;
//     } catch (error) {
//         console.log('Something went wrong ...');
//     }
// }

// async function main() {
//     try {
//         let user = await getUser();
//         console.log(user);
//     } catch (error) {
//         console.error(error);
//     }
// }
// main();

// 3
const getUser = async () => {
    try {
        const response = await fetch('https://kuna.io/api/v2/tickers/btcuah')
        const data = await response.json(); 
        return data;
    } catch (error) {
        console.log('Something went wrong ...');
    }
}

(async () => {
    try {
        let user = await getUser();
        console.log(user);
    } catch (error) {
        console.error(error);
    }
})();
