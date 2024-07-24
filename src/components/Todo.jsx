import React from 'react' // Esta linha importa a biblioteca React, que é necessária para definir componentes React.

const Todo = ({ todo, removeTodo, completeTodo }) => {// Define um componente funcional chamado Todo. Este componente aceita 
                                        // dois parâmetros (props) passados em um objeto:
                                        // todo: Um objeto que representa uma tarefa.
                                        // removeTodo: Uma função que será chamada para remover a tarefa.

  return (//Outro div com a classe content, que contém:
          //Um parágrafo (<p>) que exibe o id e o text da tarefa.
          //Outro parágrafo (<p>) com a classe category que exibe a categoria da tarefa.

    <div className="todo" 
         style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}> 
        <div className='content'>
            <p>{todo.text}</p>
            <p className="category">({todo.category})</p>
        </div>
        <div>
            <button className="complete" onClick={() => completeTodo(todo.id)}>Completar</button>
            <button className="remove" onClick={() => removeTodo(todo.id)}>X</button>
        </div>
    </div>
  )//Um div contendo dois botões:
  //Um botão com a classe complete e o texto "Completar". Este botão não tem nenhuma ação associada atualmente.
  //Um botão com a classe remove e o texto "X". Este botão tem um onClick handler que chama a função removeTodo passando o id da tarefa. Isso removerá a tarefa da lista quando o botão for clicado.
}

export default Todo// Exporta o componente Todo como padrão, permitindo que ele seja importado e usado em outros arquivos.