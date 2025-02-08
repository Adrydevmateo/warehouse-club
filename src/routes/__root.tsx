import { createRootRoute, createRouter, Link, Outlet } from "@tanstack/react-router"
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import homeRoute from "./home.route"
import aboutRoute from "./about.route"

export const rootRoute = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  )
})

const routeTree = rootRoute.addChildren([homeRoute, aboutRoute])

export const router = createRouter({ routeTree })
