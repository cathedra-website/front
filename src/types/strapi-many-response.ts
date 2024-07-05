export type StrapiManyResponse<T> = {
    data: Array<T>,
    meta: {
        pagination: {
            page: number,
            pageSize: number
            pageCount: number
            total: number 
        }
    }
}