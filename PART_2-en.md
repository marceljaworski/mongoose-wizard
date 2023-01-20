## Part 2 - Endpoints

### Task 1 - Preparing our server to receive requests

In the next tasks, we will create a REST API so that clients can connect and perform actions on our server

1. Add [cors](https://www.npmjs.com/package/cors) npm package to your middleware stack. This will prevent the dreaded same origin policy error in your browser.
x
2. Add the `express.json()` middleware to your middleware stack. This will properly parse any JSON sent with the client body.

> Remember to run your middleware before any of your routes!

### Task 2 - Creating the spells

We have our schemas and models all setup, but we need data!

Under the route created in `routes/magicSpell.js`;

1. Create an endpoint with the path `/create` which will allow the user to create a new spell via **JSON** from a **POST** request

2. Test your endpoint by creating at least 1 spell into your database

### Task 3 - Upload spell data

We will add some spells to our database

Upload the file `./data/MagicSpells.json` into your magic spells collection with a desktop tool such as [MongoDB Compass](https://www.mongodb.com/products/compass)

### Task 4 - Create an endpoint to return all magic spells

We would like our client to view all spells in the database

Under the route created in `routes/magicSpell.js`;

- Create an endpoint with the path `/all`. This endpoint should return all spells in the database.

### Task 5 - Creating the wizard route

Let's turn our attention to the wizards

- Create a new router `wizard.js` in the `/routes` folder to handle all requests starting with `/wizard`

### Task 6 - Creating a wizard endpoint

1. Using the new wizard router, create an endpoint with the path `/create` which will allow the user to create a wizard via **JSON** from a **POST** request. This endpoint should create a new wizard in the database.

2. Test your endpoint by creating at least 1 wizard into your database

### Task 7 - Upload wizard data

Just like you did in **Task 2**, upload the file `./data/Wizards.json` into your wizards collection

### Task 8 - Create an endpoint to return all wizards

We would like our client to view all wizards in the database

- Using the `/wizard` route, create an endpoint with the path `/all`. This endpoint should return all wizards in the database.

### Task 9 - Create a route to read a spell

Inside the `/magic-spell` route create an endpoint with the path `/details`. This endpoint should return all the details of a **MagicSpell**
   - This endpoint should expect an `id` as a **request parameter**
   - The `id` will be the **ObjectId** of the **MagicSpell** document

> Hint: You can use the mongoose model method `findById()`

### Task 10 - Create a route to read a wizard

Inside the `/wizard` route, create an endpoint with the path `/details`. This endpoint should return all the details of a **Wizard**
   - This endpoint should expect an `id` as a **request parameter**
   - The `id` will be the **ObjectId** of the **Wizard** document

### Task 11 - Level up a wizard

A wizard should be able to level up, when they have enough experience

- Inside the `/wizard` route, create an endpoint with the path `/levelup`. This endpoint should **update** the **level** property of the **Wizard** by adding `1` to the existing level
  - This endpoint should expect a `PATCH` request

> Hint: You can use the method `findByIdAndUpdate()`

## Bonus Tasks

See the [Bonus Tasks](./PART_2_BONUS.md)