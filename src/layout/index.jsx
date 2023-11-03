import { store } from "@/store";
import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import { actions as todosActions } from "@/store/todos-store";

function Layout() {
    store.dispatch(todosActions.getTodos());
    return (
        <Provider store={store}>
            <section className="container">
                <Outlet />
            </section>
        </Provider>
    );
}

export { Layout };
