import { addTodo, updateTodo, deleteTodo } from "@/app/actions/todos";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function TodosPage() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: todos } = await supabase.from("todos").select();

  return (
    <div>
      <form action={addTodo}>
        <input name="name" placeholder="New todo" />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>
            <form action={updateTodo}>
              <input type="hidden" name="id" value={todo.id} />
              <input name="name" defaultValue={todo.name} />
              <button type="submit">Update</button>
            </form>

            <form action={deleteTodo}>
              <input type="hidden" name="id" value={todo.id} />
              <button type="submit">Delete</button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
}
