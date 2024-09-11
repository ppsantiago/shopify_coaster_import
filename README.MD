# API IMPORT & UPDATE PRODUCTO ON SHOPIFY


## Get products

### URL - GET
```
http://localhost:3000/products
```
## Response
```json
{
  "products": [
    {
      "id": 7716837621936,
      "title": "Test product 1",
      "body_html": "<p>Mi producto de pruebas</p>",
      "vendor": "Mi tienda",
      "product_type": "",
      "created_at": "2024-09-11T11:04:45-03:00",
      "handle": "test-product-1",
      "updated_at": "2024-09-11T11:20:35-03:00",
      "published_at": "2024-09-11T11:04:45-03:00",
      "template_suffix": "",
      "published_scope": "global",
      "tags": "test shop",
      "status": "active",
      "admin_graphql_api_id": "gid://shopify/Product/7716837621936",
      "variants": [
        {
          "id": 43902204706992,
          "product_id": 7716837621936,
          "title": "Default Title",
          "price": "10.00",
          "position": 2,
          "inventory_policy": "deny",
          "compare_at_price": "15.00",
          "option1": "Default Title",
          "option2": null,
          "option3": null,
          "created_at": "2024-09-11T11:04:46-03:00",
          "updated_at": "2024-09-11T11:04:46-03:00",
          "taxable": true,
          "barcode": "",
          "fulfillment_service": "manual",
          "grams": 0,
          "inventory_management": "shopify",
          "requires_shipping": true,
          "sku": "",
          "weight": 0,
          "weight_unit": "kg",
          "inventory_item_id": 45990180946096,
          "inventory_quantity": 0,
          "old_inventory_quantity": 0,
          "admin_graphql_api_id": "gid://shopify/ProductVariant/43902204706992",
          "image_id": null
        }
      ],
      "options": [
        {
          "id": 10021782192304,
          "product_id": 7716837621936,
          "name": "Title",
          "position": 1,
          "values": ["Default Title"]
        }
      ],
      "images": [
        {
          "id": 34815201083568,
          "alt": null,
          "position": 1,
          "product_id": 7716837621936,
          "created_at": "2024-09-11T11:04:02-03:00",
          "updated_at": "2024-09-11T11:04:45-03:00",
          "admin_graphql_api_id": "gid://shopify/ProductImage/34815201083568",
          "width": 140,
          "height": 128,
          "src": "https://cdn.shopify.com/s/files/1/0658/7695/1216/files/cloud.png?v=1726063443",
          "variant_ids": []
        }
      ],
      "image": {
        "id": 34815201083568,
        "alt": null,
        "position": 1,
        "product_id": 7716837621936,
        "created_at": "2024-09-11T11:04:02-03:00",
        "updated_at": "2024-09-11T11:04:45-03:00",
        "admin_graphql_api_id": "gid://shopify/ProductImage/34815201083568",
        "width": 140,
        "height": 128,
        "src": "https://cdn.shopify.com/s/files/1/0658/7695/1216/files/cloud.png?v=1726063443",
        "variant_ids": []
      }
    }
  ]
}
```


## Create a product

### URL - POST
```
http://localhost:3000/add_product
```
### Headers 
```curl
X-Shopify-Access-Token : ACCESTOKEN
```
### Template product json
```json
{
        "product": {
            "title": "Test Product with Price 199",
            "body_html": "Test product description",
            "vendor": "Test Vendor",
            "product_type": "Test",
            "variants": [
                {
                    "price": "199.00", // Precio del producto en formato string
                    "option1": "Default Title"
                }
            ]
        }
    }
```

