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