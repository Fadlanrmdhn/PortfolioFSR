import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Template } from "../Template";


//membuat daftar routing
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Template />,
        //mengisi <outlet /> di template.jsx
        children: [
            { path: "/", element: <App /> },
        ]
    }
]);