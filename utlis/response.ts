
type Response = {
    success : boolean,
    message : string,
    data ?: Object
}


export function successResponse(message : string ,data :Object ) : Response{
    return {
        success : true,
        message : message,
        data : data 
    }
}

export function errorResponse(message : string ) : Response{
    return {
        success : false,
        message : message,
    }
}