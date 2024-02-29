

alert("Bienvenidos a marmoleria Rocas Ornamentales")

let consulta = confirm("¿Te puedo ayudar con tu compra?")

if (consulta === true) {

    let mercaderia = prompt("¿Que producto estarias necesitando?")
    let material = prompt("En que material necesitas tu " + mercaderia + " , \n 1. Granito  \n 2. Marmol")

    while (material != 1 & material != 2) {
        alert("Numero invalido");
    material = prompt("Ingresa 1 para  Granito y 2 para Marmol")
    }

    let color = prompt("Elegi el color de tu " + mercaderia + " \n 1. BLANCO \n 2. NEGRO \n 3. GRIS")
    
    switch (color) {
        case "1": alert("Tenemos " + mercaderia + " de color BLANCO" )
            break;
        case "2": alert("Tenemos " + mercaderia + " de color NEGRO" )
            break;
        case "3": alert("Tenemos " + mercaderia + " de color GRIS" )
            break;
        default:
            while (color != 1 & color != 2 & color != 3) {
                alert("Ese color no esta disponible");
                color = prompt("Ingresa 1 para color BLANCO, 2 para color NEGRO, 3 para color GRIS")
            }

    }

    
   let metro = prompt("Ingresa los metros cuadrados que deseas comprar para ver el precio total o Compras para ver tus pedidos.Ingresa 6 para salir")
   const compras=[]

   function Producto (nombre,precioxm2){
        this.nombre=nombre;
        this.precioxm2=precioxm2; 
        this.productoporm2= function(){
            return this.precioxm2 * metro             
        }  
   }
    const producto1 = new Producto ("Granito",50000)
    const producto2 = new Producto ("Marmol",60000)
    
    function guardarr(productoelegido,metroelegido,resultado){
        alert(`El precio total es`+resultado)
        const guardar = {
        material:material,
        metro:metro,
        resultado:resultado}

        compras.push(guardar) 
    }



    while(metro !=6){

    switch (material) {
        case "1": guardarr(producto1.nombre,metro,producto1.productoporm2())
        break;
        case "2": guardarr(producto1.nombre,metro,producto2.productoporm2())
        break;
        
        default:
            while (color != 1 & color != 2) {
                alert("Ese producto no esta disponible");
                color = prompt("Ingresa 1 para color GRANITO, 2 para MARMOL")
            }
     }
    
    
   metro = prompt("Ingresa los metros cuadrados que deseas comprar para ver el precio total o compras para ver tus pedidos.Ingresa 6 para salir")
   if(metro.toLowerCase()===`compras`){
   let mensaje= 'Tus Compras:\n';
   compras.forEach(operacion=>{
    mensaje= mensaje+ `El precio total para  ${operacion.metro} metros cuadrados del producto ${operacion.material} es de ${operacion.resultado}\n`})
   alert(mensaje) ; 
   }
}
console.log(compras)}