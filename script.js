
let temperature=document.querySelector(".temp");
let summary=document.querySelector(".summary");
let loc=document.querySelector(".location");
let icon=document.querySelector(".icon");
const kelvin=273;
let lon;
let lat;
console.log("hi");
window.addEventListener("load",()=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            console.log(position);
            console.log("hi");
            lon=position.coords.longitude;
            lon=position.coords.longitude;
            const api="1ac3292b525f3dffcefbec2376e54e21"
/*const base= `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&`+
`lon={lon}&&appid={1ac3292b525f3dffcefbec2376e54e21}`;*/
/*const base=`https://api.openweathermap.org/data/2.5/weather?lat={lat}&`+
`lon={lon}&appid={1ac3292b525f3dffcefbec2376e54e21}`*/
const base=`https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=1ac3292b525f3dffcefbec2376e54e21`
console.log("kol");
fetch(base)
.then((Response)=>{
    return Response.json();
})
.then ((data)=>{
    console.log(data);
    temperature.textContent=Math.floor(data.main.temp - kelvin)+"c";
    summary.textContent=data.weather[0].description;

});
        });
    }
});