import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Store from './Store/Store.js'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './Component/Index.js'
import { AddPost, AllPost, EditPost, Home, Login, Post, SignUp } from "../src/pages/index.js"
import { Protected } from "../src/Component/Index.js"
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/signup",
          element: (
            <Protected authentication={false}>
              <SignUp />
            </Protected>
          )
        },
        {
          path: "/login",
          element: (
            <Protected authentication={false}>
              <Login />
            </Protected>
          )
        },
        {
          path: "/all-posts",
          element: (
            <Protected authentication={true}>
              <AllPost />
            </Protected>
          )
        },
        {
          path: "/add-post/",
          element: (
            <Protected authentication={true}>
              <AddPost />
            </Protected>
          )
        },
        {
          path: "/edit-post/:slug",
          element: (
            <Protected authentication={true}>
              <EditPost />
            </Protected>
          )
        },
        {
          path: "/post/:slug",
          element: (
            <Protected authentication={true}>
              <Post />
            </Protected>
          )
        },
      ]

    }
  ]



)

createRoot(document.getElementById('root')).render(
  <StrictMode >
    {/* key s should be small */}
    <Provider store={Store}  >
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </StrictMode>
)
