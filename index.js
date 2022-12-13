function calculate(cityname){

fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityname+'&appid=26b230b29d760a2a0ca05732af5f59ea&units=metric')
.then(response => response.json())
.then((response) => {
   console.log(response)
   let img = "http://openweathermap.org/img/wn/"+response.weather[0].icon+"@2x.png"
   document.getElementById("cn").innerHTML=response.name
   temp.innerHTML=response.main.temp;
   maxtem.innerHTML=response.main.temp_max;
   mintem.innerHTML=response.main.temp_min;
   document.getElementById("image").setAttribute('src',img)
})
.catch((error) => {
    console.log(error)
})
}

document.getElementById("clicked").addEventListener("click",(e) => {
   e.preventDefault();
   calculate(document.getElementById("given").value);
})

calculate("visakhapatnam")


