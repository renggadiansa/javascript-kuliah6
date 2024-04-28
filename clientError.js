class clientError extends Error {
    constructor(massage, statusCode = 400) {
        super(massage);
        this.statusCode = statusCode;
        this.name = "ClientError";
    }
}