// UNknow , NEVER, ANY TYPES
// let userInput:unknown;
var userInput;
var userName;
userInput = 10;
userInput = "Rai";
// userName=userInput
if (typeof userInput === "string") {
    userName = userInput;
}
// never return type
function generateError(message, code) {
    throw { message: message, StatusCode: code };
}
generateError("Internal server error", 500); // don’t assign to variable
