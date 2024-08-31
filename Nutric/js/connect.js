
const TOKEN = "7008515339:AAFmLUvM8rFmc0o2tjYzgxa0wMZ_9suTDyo";
const CHAT_ID = "-1002178470801";
const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;


     document.getElementById('tg').addEventListener('submit', function(e){
    e.preventDefault();
let message = `<b>Sended from the website</b>\n`;
message += `<b>Name: </b> ${this.name.value}\n`;
message += `<b>Email: </b> ${this.email.value}\n`;
message += `<b>Phone: </b> ${this.phone.value}\n`


axios.post(URI_API, {
chat_id: CHAT_ID,
parse_mode: 'html',
text: message

} )
.then((res)=>{
this.name.value = "";
this.email.value = "";
this.phone.value = "";
document.getElementById("success").innerHTML = "Send!"
document.getElementById("success").style.display = "block"
})
.catch((err)=>{
console.log(err)
})
.finally(()=>{
console.log("Done")
})

})

