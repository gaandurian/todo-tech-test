export const getAllTodos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1/todos")
    const data = await response.json()
    return data
  } 
  