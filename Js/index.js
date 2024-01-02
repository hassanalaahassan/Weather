let data=[] 
const baseURL = 'https://api.weatherapi.com/v1', endPoint = '/forecast.json' , key = '62e55edfffa34d55917124303233112'
const elemnts = {
    firstDay:{
        firsthead: document.querySelectorAll('.hero .first-day .head span'),
        statImg : document.querySelector('.hero .body img') ,
        country : document.querySelector('.hero .first-day h3'),
        temp : document.querySelector('.hero .first-day h1'),
        statText : document.querySelector('.hero .first-day .body .custom'),
        footSpan : document.querySelectorAll('.hero .first-day .foot span')
    },
    secondDay:{
        secondHead: document.querySelector('.hero .second-day .head span'),
        secondDayImg : document.querySelector('.hero .second-day img'),
        secondDayTemp : document.querySelector('.hero .second-day .body p'),
        secondDaySpan : document.querySelectorAll('.hero .second-day .body span')

    },
    thirdDay:{
        thirdHead : document.querySelector('.hero .third-day .head span'),
        thirdDayImg : document.querySelector('.hero .third-day img'),
        thirdDayTemp : document.querySelector('.hero .third-day .body p'),
        thirdDaySpan : document.querySelectorAll('.hero .third-day .body span')

    },
    search:{
        typing : document.querySelector('.search input')
    }
}
const day=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const mounth=['January','February','March','April','May','June','July','August','September','October','November','December']

async function getData() {
    data =  await(await fetch(`${baseURL}${endPoint}?key=${key}&q=Alexandria&days=3`)).json();
    setFirstDay()
    setSecondDay()
    setThirdDay()
}
elemnts.search.typing.addEventListener('keyup', async function(e){
    data =  await(await fetch(`${baseURL}${endPoint}?key=${key}&q=${e.target.value}&days=3`)).json();
    setFirstDay()
    setSecondDay()
    setThirdDay()
})

 function setFirstDay(){
    let date = new Date(data.forecast.forecastday[0].date)
    elemnts.firstDay.firsthead[0].innerHTML = day[date.getDay()]
    elemnts.firstDay.firsthead[1].innerHTML = date.getDate()+ ' ' + mounth[date.getMonth()]
    elemnts.firstDay.country.innerHTML = data.location.name
    elemnts.firstDay.temp.innerHTML = data.current.temp_c+'<sup>o</sup>C'
    elemnts.firstDay.statImg.setAttribute('src',data.current.condition.icon)
    elemnts.firstDay.statText.innerHTML = data.current.condition.text
    elemnts.firstDay.footSpan[0].innerHTML = data.current.cloud +'%'
    elemnts.firstDay.footSpan[1].innerHTML = data.current.wind_kph +' Km/h'
    elemnts.firstDay.footSpan[2].innerHTML = data.current.wind_dir 
}

 function setSecondDay() {
    let date = new Date(data.forecast.forecastday[1].date)
    elemnts.secondDay.secondHead.innerHTML = day[date.getDay()]
    elemnts.secondDay.secondDayImg.setAttribute('src',data.forecast.forecastday[1].day.condition.icon)
    elemnts.secondDay.secondDayTemp.innerHTML = data.forecast.forecastday[1].day.maxtemp_c +'<sup>o</sup>C'
    elemnts.secondDay.secondDaySpan[0].innerHTML = data.forecast.forecastday[1].day.mintemp_c
    elemnts.secondDay.secondDaySpan[1].innerHTML = data.forecast.forecastday[1].day.condition.text
}
 function setThirdDay(){
    let date = new Date(data.forecast.forecastday[2].date)
    elemnts.thirdDay.thirdHead.innerHTML = day[date.getDay()]
    elemnts.thirdDay.thirdDayImg.setAttribute('src',data.forecast.forecastday[2].day.condition.icon)
    elemnts.thirdDay.thirdDayTemp.innerHTML = data.forecast.forecastday[2].day.maxtemp_c +'<sup>o</sup>C'
    elemnts.thirdDay.thirdDaySpan[0].innerHTML = data.forecast.forecastday[2].day.mintemp_c
    elemnts.thirdDay.thirdDaySpan[1].innerHTML = data.forecast.forecastday[2].day.condition.text
}
getData()










































