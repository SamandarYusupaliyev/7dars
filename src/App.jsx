//react-router-dom
import{
  createBrowserRouter,
  Router,
  RouterProvider,
  } from 'react-router-dom'

// Layouts
import MainLayout from "./Layouts/MainLayout"

// pages
import Home from "./pages/Home"
import Create from "./pages/Create"
import SingleRecipe from "./pages/SingleRecipe"


function App() {
  const routes =createBrowserRouter([
     {
        path:"/",
        element:<MainLayout/>,
        children:[
          {
            index:true,
            element:<Home/>,
          },
          {
            path:"/create",
            element:<Create/>,
          },
          {
            path:"/singleRecipe/:id",
            element:<SingleRecipe/>
          }
        ]
     },
  ])
  return <RouterProvider router={routes}/>
}


export default App
