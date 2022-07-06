const { UnauthorizedError, BadRequestError } = require("../utils/errors");
const db = require("../db");
class User {
  static async login(credentials) {
    //Checks for user info
    //If email or password are empty, throw an error
    //
    //Lookup user in database
    //If a user is found, compare the submitted password with the password in the db
    //If there is a match, return the user.

    //If any of this goes wrong, throw an error

    throw new UnauthorizedError("Invalid email/password");
  }

  static async register(credentials) {
    //user should submit their email and pw
    //If any of these fields are missing, throw an error
    //make sure no user already exists in the database with that email
    //if one does, throw an error
    //take the user's password and hash it
    //take hte user's email and lowercase it
    //create a new user with in the db with their info
    //return the user
  }

  static async fetchUserByEmail(email) {
    if (!email) {
      throw new BadRequestError("No email provided");
    }

    const query = "SELECT * FROM users WHERE email = $1";
    const result = await db.query(query, [email.toLowerCase()]);
    const user = result.rows[0];
    return user;
  }
}

module.exports = User;
