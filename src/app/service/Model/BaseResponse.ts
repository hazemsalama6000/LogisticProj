export interface BaseResponse {
    status: boolean;
    code: number;
    message: string;
}

export interface BaseResponseData<T> extends BaseResponse {
    data: T[];
}