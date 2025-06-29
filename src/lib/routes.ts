import React from "react"
import { lazy } from "react"
import type { RouteObject } from "react-router-dom"

const Home = lazy(() => import("@/pages/home"))
const Search = lazy(() => import("@/pages/search"))
const Profile = lazy(() => import("@/pages/profile"))
const AllNotes = lazy(() => import("@/pages/all-notes"))

export const routes: RouteObject[] = [
    {
        path: "/",
        element: React.createElement(Home),
    },
    {
        path: "/all-notes",
        element: React.createElement(AllNotes),
    },
    {
        path: "/search",
        element: React.createElement(Search),
    },
    {
        path: "/profile",
        element: React.createElement(Profile),
    },
]
