
const btn = document.querySelector(".getInfo_class");
const cityName = document.querySelector(".cityName");

const cityText = document.querySelector(".cityText");

const description = document.querySelector(".description");
const weatherImage = document.querySelector(".img-class");


const defaultInfo = async () => {
    cityName.innerHTML = "Gorakhpur"
    let url = `https://api.openweathermap.org/data/2.5/weather?q=Gorakhpur&appid=205840f6a1a83c01cdd670813d779326`
    const response = await fetch(url);
    const data = await response.json();

    cityName.innerHTML = `Gorakhpur ${Math.trunc(data.main.temp - 273)} C `


    description.innerHTML = `${data.weather[0].description}`
    if (data.weather[0].description === "clear sky") {
        weatherImage.innerHTML = `<lottie-player  src="https://assets6.lottiefiles.com/packages/lf20_bknKi1.json"
        background="transparent" speed="1" style="width: 300px; height: 300px;" loop autoplay>
    </lottie-player> `
    }
    else if (data.weather[0].description === "scattered clouds") {
        weatherImage.innerHTML = `<lottie-player src="https://assets10.lottiefiles.com/packages/lf20_57ui5yd5.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player>`
    }


}

defaultInfo()




const getInfo = async () => {
    let listOfSearches = [];

    let city = cityText.value;
    if (city === "") {
        city = "Kanpur";
    }


    listOfSearches.push(city);

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=205840f6a1a83c01cdd670813d779326`

    const response = await fetch(url);


    const data = await response.json();


    cityName.innerHTML = `${city} ${Math.trunc(data.main.temp - 273)} C`

    description.innerHTML = `${data.weather[0].description}`
    cityText.value = ""

    if (data.weather[0].description === "clear sky") {
        weatherImage.innerHTML = `<lottie-player  src="https://assets6.lottiefiles.com/packages/lf20_bknKi1.json"
        background="transparent" speed="1" style="width: 300px; height: 300px;" loop autoplay>
    </lottie-player> `
    }
    else if (data.weather[0].description === "scattered clouds") {
        weatherImage.innerHTML = `<lottie-player src="https://assets2.lottiefiles.com/packages/lf20_zk3wvzpg.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player>`


    }


}




btn.addEventListener("click", getInfo);


