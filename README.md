# Web Service For Selling Rockets and Components

RESTful API for selling rockets and it's components


| Method  | Endpoint          | Description                 | Data                  |
|---------|-------------------|-----------------------------|-----------------------|
| GET     | api/products      | List of products            | `[{}, {}, {}]`        |
| GET     | api/products/:id  | View a products             | `{}`                  |
| POST    | api/products      | Create a new product        | `{"info": ""}`        |
| PUT     | api/products/:id  | Update a product            | `{"info": ""}`        |
| DELETE  | api/products/:id  | Delete a product            | `{"info": ""}`        |

## Dummy Data

```
{"id": 1, "title": "Intelsat 35e", "description": "SpaceX's Falcon 9 rocket successfully delivered Intelsat 35e, a commercial communications satellite, to a Geostationary Transfer Orbit (GTO). Falcon 9 lifted off from Launch Complex 39A (LC-39A) at NASA’s Kennedy Space Center in Florida on Wednesday, July 5, at 7:38 p.m. EDT. The satellite was deployed approximately 32 minutes after launch and the customer has confirmed signal acquisition.", "price": "$12.500", "image_url": "https://farm5.staticflickr.com/4259/34868730393_14f0e39bab_b.jpg", "stock": 512}
```