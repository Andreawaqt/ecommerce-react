const apiURL = "https://app.nocodb.com/api/v2/tables/m920zf4jt60rlt5/records";
const token = "h9C2KkGhXxrOZdknU9tODdvqW0TLalbb8WZoR7Tk";

class ProductosController {
    constructor() {
        this.apiURL = apiURL;
        this.token = token;
    }
    async getProductos() {  

        console.log("fetch", this.apiURL);
let response;
        try {
             response = await fetch(this.apiURL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'xc-token': this.token
                }
            });
        } catch (error) {
            return []
        }
        
        const data = await response.json();
        return data.list;
    }



}
export default ProductosController;