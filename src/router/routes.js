import {
    Login,
    FoundNot
} from "../page"

export const mainRoutes=[
    {
        path:"/login",
        component:Login
    },
    {
        path:"404",
        component:FoundNot
    }
]