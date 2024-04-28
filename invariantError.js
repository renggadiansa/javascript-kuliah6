const clientError = require("./clientError");
class invariantError extends clientError {
    constructor (message) {
        super(message, 400);
        this.name = "InvariantError";
    }
}

module.exports = invariantError;