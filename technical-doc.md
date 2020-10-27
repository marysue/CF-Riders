# CF - Riders
# Technical Documentation

## Database Model

The following details the database model used in the CF - Riders website.  This model will accommodate for Users registering, voting, and viewing products and product detail pages.

![DB Model](/docs/images/dbModels.png)

##BackEnd Routes

To accomodate accessing the database and providing user security, the following backend routes will be needed:

1.  **'/' : GET :** This route will provide the home page product information.  No authentication/authorization will be done at this time to access this information.  However, we will examine the user's token to make certain it has not been intercepted by nefarious beings.
1.  **'/login' : GET :**  This route will setup the authorization needed for the user to provide reviews for products, as well as update the navigation with the user's avatar and login status.
1.  **'/products/:type' : GET :** This route will process the request for product listings by types and return the products page for the requested product type.
1.  **'/products/:id' : GET :** This route will process the request for the individual request for specific product types.
1.  **'/reviews/:id' : GET :** This route will process the request for reviews based on an individual product id.
1.  **'/reviews/:id' : PUT :** This route will authenticate the user, and create a new review and store that review and rating in the database.
1.  **'/signup' : PUT :** This route will check that the user does not currently exist via email address, validate the passwords conform to the password length and other checks, and will update the database with the user's user token, hashedPassword, email address, avatar URL, and name.  The JSON returned will be the user's avatar URL, and the user's first name, as well as the session token.

**NOTE:** Currently I have no plans to allow the user to place an item in their shopping cart.  I need to talk with Alfredo about this.

 
