appid ='dd510943c7c7a2fb97eac9cc68c9eb5d'
    async function wthr() {
        val = document.getElementById("city").value
        u = `https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=${appid}&lang=hi`
        try {
            var data = await fetch(u)
            var k = await data.json()
            fcst(k)

        }
        catch (err) {
            fcst(err)
            
        }
    }


    function fcst(k){
        console.log(k)
    var div= document.createElement("div")
    if(k.hasOwnProperty("message")){
div.innerHTML=`${k.message}`
    }
    else{
       var uk=k.sys.sunrise
        var rise = new Date(uk*1000);
        
        console.log(rise)

        uk=k.sys.sunset
        var date = new Date(uk*1000);
        
        console.log(date)
        div.innerHTML=`
        <h1> Weather:${k.weather[0].main}</h1>
        <h1> Tempture Min:${k.main.temp_min}Kelvin</h1>
        <h1> Humidity:${k.main.humidity}%</h1>        
        <h1>Tempture Max${k.main.temp_max}Kelvin</h1>
        <h1> Feels like:${k.main.feels_like} Kelvin</h1>
        <h1> Pressure:${k.main.pressure} hPa</h1>
        <h1> Wind:${k.wind.speed} KM</h1>
        <h1> Sunrise :${rise}</h1>
        <h1> Sunset:${date}</h1>
        `
    }
    
    document.getElementById("fcst").append(div)
}
