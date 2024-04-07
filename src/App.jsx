import { RouterProvider, 
  createBrowserRouter,
  Router } from "react-router-dom"

// Layouts
import MainLayuot from "./Layouts/MainLayout"

// pages
import Home from "./pages/Home";
import Create from "./pages/Create";
import SingleRecipe from "./pages/SingleRecipe"



function App() {
  const routes = createBrowserRouter([
    {
      path:"/",
      element:<MainLayuot/>,
      children:[
        {
          index:true,
          element: <Home/>
        },
      {
        path:"/create",
        element:<Create/>
      },
      {
        path:"/singleRecipe/:id",
        element: <SingleRecipe/>
      }
      ]
    }
  ])

  return  (
    <div className="container">
      <RouterProvider router={routes}/>
    </div>
  )
}

export default App
