export const getMediaURL = (uri: string) => {
    return `${import.meta.env.VITE_API_URL}${uri}`
}