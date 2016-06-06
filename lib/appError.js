const AppError = module.exports = function (code, message, resMessage){
  //Set AppError to this
  Error.this(call);

  this.statusCode = code;
  this.message = message;
  this.resMessage = resMessage;
};

//Sets AppError.prototype to Error.prototype
AppError.prototype = Object.create(Error.prototype);

//Used to check if input is an instance of AppError(or was created by AppError)
AppError.isAppError = function(err) {
  return err instanceof AppError;
};

//First of many error message - Read resMessage for more deets
AppError.error400 = function(message){
  return new AppError(400, message, "Bad Request - App Error");
};

AppError.error404 = function(message){
  return new AppError(404, message, "Not Found - App Error");
};

AppError.error500 = function(message){
  return new AppError(500, message, "Internal Server Error - App Error");
};
