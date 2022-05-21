const express = require("express");
const res = require("express/lib/response");
const app = express();

let po = 3001

app.listen(po, () => {
    console.log("LISTENING ON PORT " + po);
})

app.use((req, res) => {
    console.log("WE GOT A NEW REQUEST")
    res.send('<h1>Oh Washup</h1>')
})


// function FuchsiaData(){
//     let firstName = document.getElementById('fN');
//     let lastName = document.getElementById('lN');
//     let city = document.getElementById('city');
//     let state = document.getElementById('state');
//     let zip = document.getElementById('zip');
//     let vin = document.getElementById('vin');
//     let srt8 = document.getElementById('srt8');
//     let mdh = document.getElementById('mdh');
//     let email = document.getElementById('eM');

//     form.addEventListener('submit', (e) => {
//         e.preventDefault()
//     })

//     if(firstName.value === " "){
//         window.alert("Please enter your First Nmae");
//         firstName.focus();
//         return false;
//     }

//     if(lastName.value === " "){
//         window.alert("Please enter your Last Nmae");
//         lastName.focus();
//         return false;
//     }

//     if(city.value === " "){
//         window.alert("Please enter your City");
//         city.focus();
//         return false;
//     }

//     if(state.value === " "){
//         window.alert("Please enter your State");
//         state.focus();
//         return false;
//     }

//     if(zip.value === " "){
//         window.alert("Please enter your Zip Code");
//         zip.focus();
//         return false;
//     }

//     if(vin.value === " "){
//         window.alert("Please enter your VIN");
//         vin.focus();
//         return false;
//     }

//     if(srt8.value === " "){
//         window.alert("Please enter your SRT8");
//         srt8.focus();
//         return false;
//     }

//     if(mdh.value === " "){
//         window.alert("Please enter your mdh");
//         mdh.focus();
//         return false;
//     }

//     if(email.value === " "){
//         window.alert("Please enter your Email address");
//         email.focus();
//         return false;
//     }
// }