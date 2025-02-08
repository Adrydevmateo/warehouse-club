import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./__root";

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: function Home() {
    return (
      <div className="p-2">
        <h3>Welcome Home!</h3>
      </div>
    )
  }
})

export default homeRoute