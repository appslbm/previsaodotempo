let key = "38f3f0ee4349c5c1310ae1c4dbf3b56d"


function colocarNaTela(dados){
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name


    const timezoneOffsetInSeconds = dados.timezone + (3 * 3600);

    const targetDate = new Date(Date.now() + (timezoneOffsetInSeconds * 1000));
   
    

   


    // Obter a hora, minuto e segundo do targetDate
    const hora = targetDate.getHours().toString().padStart(2, '0');
    const minuto = targetDate.getMinutes().toString().padStart(2, '0');
    

    // Formatar a hora no novo fuso horário
    const horaFormatada = `${hora}:${minuto}`;




    document.querySelector(".timezone").innerHTML = horaFormatada
    document.querySelector(".temp").innerHTML =  Math.floor(dados.main.temp) + "°C"
    document.querySelector(".temp_max").innerHTML = "Max:"+ Math.floor(dados.main.temp_max) + "°C"
    document.querySelector(".temp_min").innerHTML = "Min:"+  Math.floor(dados.main.temp_min) + "°C"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" +  dados.weather[0].icon + ".png"
    
}

async function buscarCidade(cidade){
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
    cidade + 
    "&appid=" + 
    key + 
    "&lang=pt_br" +
    "&units=metric"
    )
    .then(resposta => resposta.json())

    colocarNaTela(dados)
}




function cliqueiNoBotao(){
   let cidade = document.querySelector(".input-cidade").value

   buscarCidade(cidade)
}