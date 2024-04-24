import { NextFunction, Request, Response } from "express";

function catchAll( err:any, request: Request, response: Response, next: NextFunction ){
    
    // log the error:
    console.log(err);

    const status = err.status || 500; // Short circut

    // Response to client:
    response.status(status).send(err.message);

}

export default catchAll;