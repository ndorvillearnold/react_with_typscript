import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
	id: number;
	title: string;
	completed: boolean;
}
axios.get(url).then((response) => {
	const todo = response.data as Todo;
	//reponse .data has properties of id, titile, completed
	//inerface defines a structure of an object

	const id = todo.id;
	const title = todo.title;
	const completed = todo.completed;

	console.log(`
	The Todo with ID: ${id} 
	Has a title of : ${title}
	Is it completed> ${completed}
	
	`);
});
