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
             response = await fetch(this.apiUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'xc-token': this.token
                }
            });
        } catch (error) {
            console.log("ha petat", error)
            return []
        }
        
        console.log(response)
        const data = await response.json();
        console.log(data);
        return data.list;
    }



}
export default ProductosController;