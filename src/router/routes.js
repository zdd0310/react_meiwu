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
    Sport



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
    }
]

export const indexRoutes=[
    {
        path:"/index/one",
        component:One
    },
    {
        path:"/index/eat",
        component:Eat
    },
    {
        path:"/index/beautiful",
        component:Beautiful
    },
    {
        path:"/index/children",
        component:Children
    },
    {
        path:"/index/home",
        component:Home
    },
    {
        path:"/index/out",
        component:Out
    },
    {
        path:"/index/direction",
        component:Direction
    }

]
