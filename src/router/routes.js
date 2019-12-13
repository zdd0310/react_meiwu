import {
    Index,
    Classify,
    Fengwei,
    One,
    Eat,
    Beautiful,
    Children,
    Home,
    Out,
    Direction,
    Detail,
    Sport,
    Cart,
    ShopcarBlank



} from "../page"



export const mainRoutes =[
    {
        path:"/index",
        component:Index
    },
    {
        path:"/classify",
        component:Classify
    },
    {
        path:"/fengwei",
        component:Fengwei
    },
    {
        path:"/detail",
        component:Detail
    },
    {
        path:"/sport",
        component:Sport
    },
    {
        path:"/cart",
        component:Cart
    },
    {
        path:"/shopcarblank",
        component:ShopcarBlank
    }
]

export const indexRoutes=[
    {
        path:"/index/one",
        component:One
    },
    {
        path:"/index/eat",
        component:Sport
    },
    {
        path:"/index/beautiful",
        component:Sport
    },
    {
        path:"/index/children",
        component:Sport
    },
    {
        path:"/index/home",
        component:Sport
    },
    {
        path:"/index/out",
        component:Sport
    },
    {
        path:"/index/direction",
        component:Sport
    },
    {
        path:"/index/sport",
        component:Sport
    }

]
