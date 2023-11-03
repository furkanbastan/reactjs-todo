import { classes } from "@/utils/classes";
import styles from "./styles.module.css";
import { Button } from "../button";
import { AiFillDelete } from "react-icons/ai";
import { actions as todosActions } from "@/store/todos-store";
import { useDispatch } from "react-redux";

function TodoItem({ children, id, onClickDeleteHandle }) {
    const dispatch = useDispatch();

    /*const onClickDeleteHandle = () => {
        dispatch(todosActions.removeTodo(id));
    };*/

    return (
        <div className={classes(styles.todoItem)}>
            <p>{children}</p>
            <div>
                <Button onClick={onClickDeleteHandle} type="button">
                    <AiFillDelete />
                </Button>
            </div>
        </div>
    );
}

export { TodoItem };
