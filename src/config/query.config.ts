import { QueryClient } from "@tanstack/react-query"

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnReconnect: false, // true
            refetchOnMount: false,
            refetchOnWindowFocus: false,
        },
    },
})

export const QueryKeys = {
    CURRENT_USER: "currentUser",
    GET_CLIENT_LIST: "qk-get-client-list",
    GET_SINGLE_CLIENT: "qk-get-single-client",
}
