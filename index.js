setInterval(()=>{
const time=new Date();
const hrs=time.getHours();
const min=time.getMinutes();
const sec=time.getSeconds();
const meridian= hrs<12?'AM' :'PM'
// console.log( `${hrs} : ${min} : ${sec} ${meridian}`);
document.getElementById('hrs').innerHTML=hrs;
document.getElementById('min').innerHTML=min;
document.getElementById('sec').innerHTML=sec;
document.getElementById('ampm').innerHTML=meridian;
},1000)