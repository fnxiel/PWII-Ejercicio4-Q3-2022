
interface ICarro{
    modelo?: string
    año?: number | string
    color: string
    tipo: "Turismo" | "Camioneta" | "Motocicleta"
    marca: string
    identificacion?: IIdentificacionCarro
    herramientasIncluidas: string[]
    describirCarro(): void
}

interface IIdentificacionCarro{
    vim: string
    nroChasis: string
    serie: string
}

interface ResultadoIdentificacion{
    resultado: IIdentificacionCarro | undefined
}

function describirCarro(carro: ICarro): void{
    console.log("Este es un carro marca: ", carro.marca)
    console.log("Es de color: ", carro.color)
    console.log("Es un carro tipo", carro.tipo)
    console.log("Es año de fabricación", carro.año)
    console.log("Ahora se listan las herramientas incluidas")
    //carro.herramientasIncluidas.forEach((herramienta, i) => console.log(i+1, herramienta))
    carro.herramientasIncluidas.map((herramienta, i) => console.log(i+1, herramienta))
}

function registrarCarro1(vim: string, nroChasis: string, serie: string, fabricaRegistra: string): ResultadoIdentificacion
{
    if (fabricaRegistra !== ""){
        return {resultado: {vim: vim, nroChasis: nroChasis, serie: serie}}
    }else{
        return {resultado: undefined}
    }
}

function registrarCarro(vim: string, nroChasis: string, serie: string, fabricaRegistra: string): IIdentificacionCarro | undefined
{
    if (fabricaRegistra !== ""){
        return {vim: vim, nroChasis: nroChasis, serie: serie}
    }
}

const nuevoRegistro = registrarCarro("125125", "36373drrds", "sadfasgfda", "Fabrica Tegucigalpa")
console.log(nuevoRegistro)

const nuevoRegistroErroneo = registrarCarro("125125", "36373drrds", "sadfasgfda", "")
console.log(nuevoRegistroErroneo)

//describirCarro({modelo: "Corolla", año: 2020, color: "rojo", tipo: "Turismo", marca: "Toyota" })

let carro1 : ICarro = {
    color: "Azul",
    tipo: "Turismo",
    marca: "Honda",
    modelo: "CRV",
    año: 2021,
    identificacion: nuevoRegistro,
    herramientasIncluidas: ["Bomba", "Gato neumatico", "Juego de llaves"],
    describirCarro() {
        console.log("Este es el primer carro")
    },

}



//describirCarro({color: "rojo", tipo: "Camioneta", marca: "Toyota", año: 2020, herramientasIncluidas: [] })
//describirCarro({color: "rojo", tipo: "Camioneta", marca: "Toyota", año: "2020", herramientasIncluidas: [] })
describirCarro(carro1)
carro1.describirCarro()