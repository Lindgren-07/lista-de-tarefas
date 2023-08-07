let bot = document.querySelector("input#bot")
bot.addEventListener("click", clicar)
let afazeres = []
function clicar() {
    let txt = document.getElementById("txt").value
    let lista = document.getElementById("lista")
    afazeres.push(txt)

    if(txt == "" ){
        alert("por favor digite algo")
    }
    else{
    let item = document.createElement("option")
    lista.appendChild(item)
    item.innerHTML = `  *${txt}`
    document.getElementById("txt").value = " "
    document.getElementById("txt").focus()
    }
   
}

let bot2 = document.getElementById("bot2")
bot2.addEventListener("click", limpar)
function limpar() {
    if(lista.value == ""){
        alert("por favor adicione algo na sua lista de afazeres antes de limpar")
    }
    else{
    lista.innerHTML = " "
    }
}