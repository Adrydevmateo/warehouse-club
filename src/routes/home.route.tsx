import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./__root";

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: function Home() {
    return (
      <div className="p-2">
        <h1>Welcome Home!</h1>
      </div>
    )
  }
})

export default homeRoute