# CF - Riders

# Technical Documentation

## Database Model

The following details the database model used in the CF - Riders website.  This model will accommodate for Users registering, voting, and viewing products and product detail pages.

![DB Model](/docs/images/dbModel.png)

## BackEnd Routes

To accomodate accessing the database and providing user security, the following backend routes will be needed:

1. **'/' : GET :** This route will provide the home page product information.  No authentication/authorization will be done at this time to access this information.  However, we will examine the user's token to make certain it has not been intercepted by nefarious beings.
2. **'/login' : GET :**  This route will setup the authorization needed for the user to provide reviews for products, as well as update the navigation with the user's avatar and login status.
3. **'/products/:type' : GET :** This route will process the request for product listings by types and return the products page for the requested product type.
4. **'/products/:id' : GET :** This route will process the request for the individual request for specific product types.
5. **'/products/:id/reviews' : GET :** This route will process the request for reviews based on an individual product id.
6. **'/products/:id/reviews' : PUT :** This route will authenticate the user, and create a new review and store that review and rating in the database.
7. **'/signup' : PUT :** This route will check that the user does not currently exist via email address, validate the passwords conform to the password length and other checks, and will update the database with the user's user token, hashedPassword, email address, avatar URL, and name.  The JSON returned will be the user's avatar URL, and the user's first name, as well as the session token.
8. **'/order' : PUT :** This route will check that the user is logged in, then verify that their is appropriate stock available for each item.  The return value will be a success value.  The stock quantity will be updated in the database.    The user's order will be created in the database in order to show history.
