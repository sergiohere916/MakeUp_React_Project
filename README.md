# MakeUp_Kit_Project

## Pitch
Ever have trouble keeping track of your make up? It's hard balancing a busy lifestyle and keeping track of your cosmetic inventory and each one of their expiration dates. Gone are the days of lost makeup and wasted products. With our Make-Up App you can organize your collection and easily keep track of each products expiration date with little to no effort. Enjoy a seamless and effortless makeup routine!

## User Story
On app start user will be able to view display of extensive makeup catalog, users can use searchbar to find specific items by name, user's can add products to their own personal collection by clicking on heart icon. Once item is added to personal collection user can input and submit expiration date to track product expiration. Users will see expired products in grey scale and have the option to delete item by clicking on trash icon or edit expiration date. 

## External API

http://makeup-api.herokuapp.com/

Documentation http://makeup-api.herokuapp.com/documents

JSON Structure:

{"id": 1045,"brand": "colourpop",
"name": "No Filter Foundation",
"price": "12.0",
"price_sign": "$",
"currency": "CAD",
"image_link": "https://cdn.shopify.com/s/files/1/1338/0845/products/foundations-lineup_800x1200.jpg?v=1528927785",
"product_link": "https://colourpop.com/products/no-filter-matte-foundation",
"website_link": "https://colourpop.com/products/no-filter-matte-foundation",
"description": "Developed for the Selfie Age, our buildable full coverage, natural matte foundation delivers flawless looking skin from day-to-night. The oil-free, lightweight formula blends smoothly and is easily customizable to create the coverage you want. Build it up or sheer it out, it was developed with innovative soft-blurring pigments to deliver true color while looking and feeling natural. The lockable pump is easy to use and keeps your routine mess-free! As always, 100% cruelty-free and vegan.",
"rating": null,
"category": "liquid",
"product_type": "foundation",
"tag_list": [
"cruelty free",
"Vegan"
],
"created_at": "2018-07-08T18:22:25.273Z",
"updated_at": "2018-07-09T00:53:23.313Z",
"product_api_url": "http://makeup-api.herokuapp.com/api/v1/products/1045.json",
"api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/045/original/open-uri20180708-4-4bvqii?1531074237",
"product_colors": [
{
"hex_value": "#F2DEC3",
"colour_name": "Fair 05"
},
{
"hex_value": "#F3DAC4",
"colour_name": "Fair 10"
},
{
"hex_value": "#F1D9C0",
"colour_name": "Fair 15"
},
{
"hex_value": "#EFD2BA",
"colour_name": "Fair 20"
},
{
"hex_value": "#F1D7B3",
"colour_name": "Fair 25"
},
{
"hex_value": "#EDD0B4",
"colour_name": "Fair 30"
},
{
"hex_value": "#D9B295",
"colour_name": "Fair 35"
},
{
"hex_value": "#CAA17B",
"colour_name": "Light 45"
},
{
"hex_value": "#E8C2A4",
"colour_name": "Light 50"
},
{
"hex_value": "#E8C3A6",
"colour_name": "Light 55"
},
{
"hex_value": "#E9C2A4",
"colour_name": "Light 60"
},
{
"hex_value": "#E1B68E",
"colour_name": "Light 65"
},
{
"hex_value": "#E4C096",
"colour_name": "Light 70"
},
{
"hex_value": "#E0B492",
"colour_name": "Light 75"
},
{
"hex_value": "#E0C1A1",
"colour_name": "Medium 80"
},
{
"hex_value": "#E4C1A9",
"colour_name": "Medium 85"
},
{
"hex_value": "#E5C6A8",
"colour_name": "Medium 90"
},
{
"hex_value": "#D3A784",
"colour_name": "Medium 95"
},
{
"hex_value": "#E2C2A1",
"colour_name": "Medium 100"
},
{
"hex_value": "#D7B297",
"colour_name": "Medium 105"
},
{
"hex_value": "#D4B194",
"colour_name": "Medium 110"
},
{
"hex_value": "#DCBFA5",
"colour_name": "Medium Dark 115"
},
{
"hex_value": "#D7B59A",
"colour_name": "Medium Dark 120"
},
{
"hex_value": "#C69676",
"colour_name": "Medium Dark 125"
},
{
"hex_value": "#D9B498",
"colour_name": "Medium Dark 130"
},
{
"hex_value": "#D9B191",
"colour_name": "Medium Dark 135"
},
{
"hex_value": "#D1AA90",
"colour_name": "Medium Dark 140"
},
{
"hex_value": "#BF8E63",
"colour_name": "Medium Dark 145"
},
{
"hex_value": "#C69B83",
"colour_name": "Dark 150"
},
{
"hex_value": "#C29879",
"colour_name": "Dark 155"
},
{
"hex_value": "#B99179",
"colour_name": "Dark 160"
},
{
"hex_value": "#C39981",
"colour_name": "Dark 165"
},
{
"hex_value": "#B99078",
"colour_name": "Dark 170"
},
{
"hex_value": "#B6927D",
"colour_name": "Dark 175"
},
{
"hex_value": "#B38A79",
"colour_name": "Dark 180"
},
{
"hex_value": "#AC8875",
"colour_name": "Deep Dark 115"
},
{
"hex_value": "#A07967",
"colour_name": "Deep Dark 115"
},
{
"hex_value": "#946D5A",
"colour_name": "Deep Dark 115"
},
{
"hex_value": "#865F4D",
"colour_name": "Deep Dark 115"
},
{
"hex_value": "#896A5A",
"colour_name": "Deep Dark 80"
},
{
"hex_value": "#795F52",
"colour_name": "Deep Dark 80"
},
{
"hex_value": "#6B5148",
"colour_name": "Deep Dark 80"
}
]
},

## WireFrame
![Project2-Wireframe](https://github.com/sergiohere916/MakeUp_React_Project/assets/139524475/0f677d90-14e6-490a-b1e3-3852654b79a5)


## MVP
- Display images of makeup catalog
- Shows name and brief description about products under their image
- App will have features that allow adding products to a personal collection
- Features will allow editting of expiration date on items in personal collection
- Search for specific items by name
- Delete items from personal collection


## Stretch Goals
- Wishlist collection
- Row for top rated items
- Rows will display different products types
- Features to filter search by product type, brand, and price
- Routing to different sections of the page


### Authors
Team 1: Sergio Heredia, Shaine Waters, Idalis Valadez, Bailey Bell
