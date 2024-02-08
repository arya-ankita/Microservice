import { Injectable } from "@nestjs/common";

export interface IResponse {
    success: boolean;
    statusCode: number;
    message: string;
    data?: any;
    fileName?: any;
    error?: any;
}
@Injectable()
export class CommonFunctionService {
    constructor() { }

    successResponse(msg: string): IResponse {
        const resObject: IResponse = {
            success: true,
            statusCode: 200,
            message: msg
        };
        return resObject;
    }

    successResponseWithData(msg: string, data: any): IResponse {
        const resObject: IResponse = {
            success: true,
            statusCode: 200,
            message: msg,
            data: data
        }
        return resObject;
    }

    failureResponse(msg: string, statusCode = 400): IResponse {
        const resObject: IResponse = {
            success: false,
            statusCode: statusCode,
            message: msg
        }
        return resObject;
    }

    failureResponseWithError(msg: string, error: any):IResponse{
        const resObject: IResponse = {
            success: false,
            statusCode: 400,
            message: msg,
            error: error
        }
        return resObject;
    }
}