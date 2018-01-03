FORM VALIDATION

For this sprint, you are being asked to create a **form** using the DOM which will validate a range of different user input scenarios.

Objectives:
* understand concept of form validation, and what can be validated on the client side before information is sent to the server.
* use constraint validation in your html input attributes.
* use constraint validation in CSS pseudo-selectors.
* use in-line back-end validation where appropriate.
* design a UX

Task:
You need to write a typical **account creation form** for a fictional website (the purpose of which is delegated to your imagination, but think along the lines of Facebook or Twitter).  

We have pre-populated a MongoDB database with a selection of a thousand users. The API for this database can be found at https://pure-dusk-74256.herokuapp.com. You have access to the following endpoints:

/api/users
GET - returns all users.
POST - adds a user. It requires data for all the keys in the first list below else you will get an error.

/api/users/:username
GET - return the user with the given username
PATCH - update a user with the given username. Accepts all keys in the update document described below.

The form **must** validate the fields listed below:
* `firstName` (only allow letters, spaces, hyphens and apostrophes)
* `lastName` (as above)
* `userName` (should contain at least three letters and two numbers)
* `dob` (aka date of birth; should be a valid date, and indicate the user is at least 18 years old. NB: the test might be out by a few million milliseconds so don't be too precise with your test boundary!)
* `gender` (must be 'male', 'female', 'non-binary', 'prefer not to say', 'prefer to self-identify')
* `phoneNumber` (should accept only valid UK formats)
* `address` (just one line is fine)
* `postcode` (should follow UK conventions)
* `email`, and confirm email (should match, and follow rules)
* `bankAccountNo` & `sortCode` (should be strings and follow conventions - and please don't use your own!)
* `accountType` (business, personal, etc.)
* `whereDidYouHearAboutUs` (users should be able to choose from a predefined list of 'internet', 'magazine', 'word of mouth', 'carrier pigeon', or 'other'.)

Your form should also have:
* Password, confirm password, and a password strength indicator (inputs should match, and they should follow the rules from your password strength kata. The indicator should provide feedback on how strong the password is; weak passwords should be disallowed)
* Accept agreement (users should only be able to tick this when they have scrolled to the bottom of your agreement text; provide lorem ipsum if you don't fancy writing a legally binding contract)

You will need to provide helpful feedback to your client, as well as preventing them from submitting, when they make mistakes.

Unusually, we have also done backend validation to ensure data is submitted in the correct format. If you get an error message, your front-end validation is incorrect.

When a user successfully submits a form (it passes validation front and back), they should be taken to a basic 'profile page' with the option to edit the following fields:
* Occupation.
* About me.
* Profile picture link.
* Any fields from the submission list above.

Helpful links:
Form validation is more than coding - it is a service you provide to users, and as such, there are practices and expectations in terms of accessibility, usability and functionality. Best practice rules are ignored at your peril! Here are some interesting articles that document the sort of approaches you should adopt when designing your form:
https://www.smashingmagazine.com/2011/11/extensive-guide-web-form-usability/
https://designmodo.com/ux-form-validation/

There are a lot of input attribute types that your browser can use to modify behaviour on your form, some of which you may never use again, but could be fun to use now: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input

CSS pseudo-classes. These use CSS to interpret other element attributes: https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes. Don't forget that CSS can be used more broadly to signal things too; people make inferences from colour, font size and font style, for example.