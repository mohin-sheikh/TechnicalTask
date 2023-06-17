exports.status = {
    success: 200,
    successCreated: 201,
    accepted: 202,
    successNoRecords: 204,
    badRequest: 400, // if parameter missing
    unauthenticated: 401, // if token is invalid
    unauthorized: 403, // if token is invalid
    conflict: 409, // when user already exist.
    unsupportedMediaType: 422,
    sessionExpired: 440, // if the token is expired
    internalServerError: 500,
    notfound: 404,
    gone: 410,
    notAllow: 405,
    found: 405
};
