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
        console.log(data.list);
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
        console.log(data);
        return data.list;
    }
    async editarProducto(id, data) {

        let response = await fetch(`${this.apiURL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            },
            body: JSON.stringify(data)
        });
        const data2 = await response.json();
    }


}
export default ProductosController;