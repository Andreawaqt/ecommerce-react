import ProductosController from "../controllers/ProductosController.js";
import { useState } from "react";


function ProductoEdit(productId) {

            const productosController = new ProductosController();


    let [formData, setFormData] = useState({
        id: {productId},
        nombre: '',
        tipo: '',
        categoria: '',
        precio: ''

    })

    async function editProduct(id,formData) {
        const editarProducto = productosController.editarProducto;
        editarProducto(id, formData);
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

    }

    function handleSubmit(e) {
        e.preventDefault();
        editProduct(id,formData);
        console.log(formData);


    }

    return (
        <>
            <form method="post" onSubmit={handleSubmit}>
            
                <label for="nombre">Nombre</label>
                <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder="Nombre del producto"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                />
                <label for="tipo">Tipo</label>
                <input
                    type="text"
                    id="tipo"
                    name="tipo"
                    placeholder="Tipo del producto"
                    value={formData.tipo}
                    onChange={handleChange}
                    required
                />
                <label for="categoria">Categoria</label>
                <input
                    type="text"
                    id="categoria"
                    name="categoria"
                    placeholder="Categoria del producto"
                    value={formData.categoria}
                    onChange={handleChange}
                    required
                />
                <label for="precio">Precio</label>
                <input
                    type="number"
                    id="precio"
                    name="precio"
                    placeholder="Precio del producto"
                    value={formData.precio}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Enviar</button>
            </form>

        </>
    )
}

export default ProductoEdit;