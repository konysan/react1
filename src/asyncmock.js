const misProductos = [
    { id: "1", nombre: "Remera", precio: 100, img: "../img/Remera.jpeg" ,idCat:"ropa", detalle: "La mejor remera" },
    { id: "2", nombre: "Pantalon", precio: 200, img: "../img/pantalon.png",idCat:"ropa", detalle:"El mejor pantalon" },
    { id: "3", nombre: "Buzos", precio: 500, img: "../img/Buzo.jpeg",idCat:"ropa", detalle:"El mejor buzo" },
    { id: "4", nombre: "Zapatos", precio: 300, img: "../img/Zapatos.jpeg",idCat:"calzados", detalle:"El mejor zapato" },
    { id: "5", nombre: "Zapatillas", precio: 900, img: "../img/Zapatillas.jpeg",idCat:"calzados", detalle:"La mejor zapatilla" },
    { id: "6", nombre: "Ojotas", precio: 900, img: "../img/Ojota.jpeg",idCat:"calzados", detalle:"La mejor ojota" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 100)
    })
}

export const getUnProducto = (id) => {
    return new Promise (resolve =>{
        setTimeout(()=>{
            const producto = misProductos.find(item => item.id === id)
            resolve(producto)
        }, 100)
    })

}

export const getProductosPorCategorias = (idCategoria) => {
    return new Promise(resolve =>{
        setTimeout(() => {
            const producto = misProductos.filter(item => item.idCat === idCategoria)
            resolve(producto)
        }, 100);

    })

}
