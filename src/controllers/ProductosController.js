const apiURL = "https://app.nocodb.com/api/v2/tables/m920zf4jt60rlt5/records";
const token = "h9C2KkGhXxrOZdknU9tODdvqW0TLalbb8WZoR7Tk";

class ProductosController {
    constructor() {
        this.apiURL = apiURL;
        this.token = token;
    }
    async getProductos() {  

            let response = await fetch(this.apiURL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'xc-token': this.token
                }
            });
        
        const data = await response.json();

        return data.list;
    }
    async getProducto(id) {

        let response = await fetch(`${this.apiURL}/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            }
        });
        const data = await response.json();

        return data.list;
    }
    async updateProducto(producto) {
        const { Id, Nombre, Tipo, Categoria, Precio } = producto;
    
        const requestBody = {
                "Id" : Id,
                "Nombre" : Nombre,
                "Tipo" : Tipo,
                "Categoria" : Categoria,
                "Precio" : Precio

        };
        console.log(requestBody);
    
        let response = await fetch(`${this.apiURL}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            },
            body: JSON.stringify(requestBody)
        });
    
        const data = await response.json();
    
        if (response.ok) {
            return data;
        } else {
            throw new Error(`Error al actualizar el producto: ${data.message}`);
        }
    }
    
      


}
export default ProductosController;