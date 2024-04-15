export type APIResponse<TData> = {
    responseBody: {
        totals: {
            total: number,
            count: number,
            skip: number,
            max: number,
        },
        code: number,
        label: string,
        detail: string,
        data: TData[]
    }
}