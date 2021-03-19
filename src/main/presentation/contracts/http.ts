export type HtttpResponse<T = any> = {
    statusCode: number,
    data: T
}