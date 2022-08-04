function saludar(nombre, apellido, edad){
    nombre = false
    console.log("Nombre", nombre)
    console.log("Apellido", apellido)
    console.log("Edad",edad)
    return edad
}

const estoEsUnNumero = saludar(new Date(), 5, "Hola")
const estoEsUnNumero2 =saludar(4, true, null)

console.log(estoEsUnNumero)
console.log(estoEsUnNumero2)


const user = {
    firstName: "Angela",
    lastName: "Davis",
    role: "Professor",
  }
   
  console.log(user.name)

//Type = Tipo
//C#
//Programa typescript = programa javascript = ejecutamos Nodejs // navegador.