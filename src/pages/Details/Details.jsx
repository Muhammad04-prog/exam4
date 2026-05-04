import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const url = "https://to-dos-api.softclub.tj/api/to-dos";
export default function Details() {
  const { todosId } = useParams();

  const [todo, setTodo] = useState({});

  async function getTodosById() {
    try {
      const { data } = await axios.get(`${url}/${todosId}`);
      setTodo(data.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getTodosById();
  }, [todosId]);

  return (
    <div>
      <img
        src={
          "https://to-dos-api.softclub.tj/images/" + todo.images?.[0].imageName
        }
        alt=""
      />
      <h1>{todo.name}</h1>
    </div>
  );
}