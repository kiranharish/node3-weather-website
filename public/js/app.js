const WeatherForm = document.querySelector('form')


let msg_1 = document.querySelector('#msg_1')
let msg_2 = document.querySelector('#msg_2')

WeatherForm.addEventListener('submit',(e) =>{
    e.preventDefault()
    // const location = search.value

    const location = document.querySelector('input').value

    msg_1.textContent = "Loading...."
    msg_2.textContent = " "

    fetch('/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error) msg_1.textContent = data.error
        else{
            msg_1.textContent = data.location
            msg_2.textContent = data.forecast
           
        } 
    })
})


})