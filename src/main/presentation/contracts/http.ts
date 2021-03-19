export type HtttpResponse<T = any> = {
    statusCode: number,
    data: T
}

export const serverError = (error: Error): HtttpResponse => ({
    statusCode: 500,
    data: error.stack
})

export const ok = (data: any): HtttpResponse => ({
    statusCode: 500,
    data
})