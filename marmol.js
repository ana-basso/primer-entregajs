

alert("Bienvenidos a marmoleria Rocas Ornamentales")

let consulta = confirm("¿Te puedo ayudar con tu compra?")

if (consulta === true) {

    let mercaderia = prompt("¿Que producto estarias necesitando?")
    let material = prompt("En que material necesitas tu " + mercaderia + " , \n 1. Granitos  \n 2. Marmoles")

    while (material != 1 & material != 2) {
        alert("Numero invalido");
    material = prompt("Ingresa \n 1. Granitos  \n 2. Marmoles")
    }

    let color = prompt("Elegi el color de tu " + mercaderia + " \n 1. BLANCO \n 2. NEGRO \n 3. GRIS")
    switch (color) {
        case "1": alert("Tenemos " + mercaderia + " de color " + color)
            break;
        case "2": alert("Tenemos " + mercaderia + " de color " + color)
            break;
        case "3": alert("Tenemos " + mercaderia + " de color " + color)
            break;
        default:
            while (color != 1 & color != 2 & color != 3) {
                alert("Ese color no esta disponible");
                color = prompt("Ingresa 1 para color BLANCO, 2 para color NEGRO, 3 para color GRIS")
            }

    }
    let resta = (a, b) => a - b
    let precio = x => x * 50000
    let metro = prompt("Elegi el metro cuadrado")
    let descuento = 10000
    let resultado = resta(precio(metro), descuento)
    alert("El precio del producto elegido es " + resultado)}
