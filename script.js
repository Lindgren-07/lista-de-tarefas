let afazeres = []
function clicar() {
    let txt = document.getElementById("txt").value
    let lista = document.getElementById("lista")
    afazeres.push(txt)
    
   for(let i = 0; i < 1; i++){
    let item = document.createElement("option")
    lista.appendChild(item)
    item.innerHTML = ` * ${afazeres}`
   }
   txt.value = " "
   
  
  

   
    
}