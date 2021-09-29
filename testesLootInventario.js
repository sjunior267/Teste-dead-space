var inventario = {
    bala: 10, 
    kitP: 1, 
    kitM: 0 
    }
console.log(inventario)

function loot() {
    var loot = parseInt(Math.random() * 100)
    console.log(loot)

    if (loot <= 59) {
        console.log("Munição")
        inventario.bala = inventario.bala + 2
    } else if (loot >= 60 && loot <= 89) {
        console.log("KitMedico Pequeno")
        inventario.kitP = inventario.kitP + 1
        console.log(inventario.kitP)
    } else {
        console.log("KitMedico Medio")
        inventario.kitM = inventario.kitM + 1
    }
  
    
    console.log(inventario)
}