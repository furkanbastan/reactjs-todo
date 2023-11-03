import { classes } from "@/utils/classes";
import styles from "./styles.module.css";
import { TodoItem } from "@/components/todo-item";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { actions as todosActions } from "@/store/todos-store";
import { useState } from "react";
import { formatDate } from "@/utils/formatDate";

function TodosPage() {
    const [todo, setTodo] = useState("");
    const todos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();

    const onClickDeleteHandle = (id) => {
        dispatch(todosActions.removeTodo(id));
    };

    const onClickAddHandle = () => {
        if (todo === "") return;

        dispatch(
            todosActions.addTodo({
                id: self.crypto.randomUUID(),
                todo: todo,
                completed: false,
                date: formatDate(new Date()),
            })
        );

        setTodo("");
    };

    const onChangeToDo = (e) => setTodo(e.target.value);

    const onKeyUpToDo = (e) => e.key === "Enter" && onClickAddHandle();

    return (
        <div className={classes(styles.todosCard)}>
            <div className={classes(styles.todosHeader)}>
                <h2>Yapılacaklar</h2>
            </div>
            <div className={classes(styles.todosBody)}>
            {
                todos.length === 0
                    ? <h2>Hiç yapılacak girilmemiş!</h2>
                    : todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        id={todo.id}
                        onClickDeleteHandle={() => onClickDeleteHandle(todo.id)}
                    >
                        {todo.todo}
                    </TodoItem>
                ))
            }
            </div>
            <div method="post" className={classes(styles.todosFooter)}>
                <Input
                    placeholder="Neler yapacaksınız..."
                    onChange={onChangeToDo}
                    onKeyUp={onKeyUpToDo}
                    value={todo}
                />
                <Button variant="primary" onClick={onClickAddHandle}>
                    <AiOutlinePlus />
                </Button>
            </div>
        </div>
    );
}

export { TodosPage };
