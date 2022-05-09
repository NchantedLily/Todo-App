// import React from 'react'


// const Todos = ({ todos }) => {

//     const todoList = todos.length ? () : (
//         <p className="center">You have no more todos left</p>
//     )
//     return (
//         <div className="todos collection">
//             <h1 className="center blue-text">Todo's</h1>
//             <Todos todos={this.state.todos} />
//         </div>
//     )
// }
// export default Todos;

const Todos = ({ todos, deleteTodo }) => {
    const todoList = todos.length ? (
        todos.map(todo => {
          return (
              <div className="collection-item" key={todo.id}>
                  <span onClick={() => {deleteTodo(todo.id)} }>{todo.content}</span>
              </div>
          )  
        })
    ) : (
        <p className="center">You have no todos left</p>
    )

    return(
        <div className="todos collection">
         {todoList}
        </div>
    )
}
export default Todos;