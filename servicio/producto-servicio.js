
const ListaProductos = () => {
    fetch("http://localhost:3000/productos")
    .then(respuesta => respuesta.json())
    .catch (error => console.log (error))
}

export const productosServicios = {
    ListaProductos
}