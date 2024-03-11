// const urlApi = ("http://localhost:3000/users")

const chat_API = "@mihaelBot23"
const chat_API_token = "6607989458:AAHx6DGSDHwg3r-1M2Jxb_MUWqeDFl0hn4g"
const urlApi = (`https://api.telegram.org/bot${chat_API_token}/sendMessage`)

const form = document.getElementById("form")
form.addEventListener('submit',sendForm)

async function getData () {
  const res = await fetch(urlApi)
  const data = await res.json()
  const result = await data
console.log(result);
}
getData()



async function sendForm (event) {
    // event.preventDefault()
   
   const formData =  new FormData(form)
//    const sendFormData = Object.fromEntries(formData)

   const {name,phone} = Object.fromEntries(formData)
   const messages = `Заявка от-${name} !\ Телефон:+${phone}`;

        const response = await fetch(urlApi, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id:chat_API,
                text:messages})
        })


}