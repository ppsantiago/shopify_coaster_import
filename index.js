import "dotenv/config";
import "@shopify/shopify-api/adapters/node";
import express from "express";

const { PORT, ACCESS_TOKEN, COASTER_TOKEN } = process.env;
let store_name = "a273ea-a4";



const app = express();
app.use(express.json());

app.get("/count_product", async (req, res) => {
    let url = `https://${store_name}.myshopify.com/admin/api/2024-07/products/count.json`;
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'X-Shopify-Access-Token': ACCESS_TOKEN
            }
        });

        const data = await response.json();
        console.log(data);
        res.send(data);  // Solo se envía una respuesta.
    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching data from Shopify");
    }
});

app.get("/products", async (req, res) => {
    let url = `https://${store_name}.myshopify.com/admin/api/2024-07/products.json`;
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'X-Shopify-Access-Token': ACCESS_TOKEN
            }
        });

        const data = await response.json();
        console.log(data);
        res.send(data);  // Solo se envía una respuesta.
    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching data from Shopify");
    }
})

app.post("/add_product", async (req, res) => {

    let url = `https://${store_name}.myshopify.com/admin/api/2024-07/products.json`;
    const product = req.body;

    if (!product || !product.product) {
        return res.status(400).json({ message: "Product data is missing or malformed" });
    }

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'X-Shopify-Access-Token': ACCESS_TOKEN,
                'Content-Type': 'application/json'  // Asegúrate de indicar el tipo de contenido
            },
            body: JSON.stringify(product)  // Envía el producto correctamente formateado como JSON
        });
        const data = await response.json();
        console.log(data);
        res.send(data);  // Envía la respuesta de Shopify
    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching data from Shopify");
    }
});


app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
