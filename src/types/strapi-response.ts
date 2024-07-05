export type StrapiArrayResponse<T> = {
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

export type StrapiResponse<T> = {
    data: T,
    meta: {
        pagination: {
            page: number,
            pageSize: number
            pageCount: number
            total: number 
        }
    }
}