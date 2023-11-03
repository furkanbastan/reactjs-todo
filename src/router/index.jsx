import { Layout } from "@/layout";
import { TodosPage } from "@/pages/todos-page";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <TodosPage />
            }
        ]
    }
]);