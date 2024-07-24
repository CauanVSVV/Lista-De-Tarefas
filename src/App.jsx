import { useState } from 'react' //Comando que importa o `useState` da biblioteca React, é utilizado para adicionar estado a um componente funcional.
import './App.css'; // Importar estilizações do `App.css` para o `App.jsx`

import Todo from "./components/Todo"
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/Filter';

function App() { //Define funcional chamado App
  const [todos, setTodos] = useState([
    // const variável cujo o valor é fixo
    // `todos` é uma variável de estado. `setTodos` é a função usada para atualizar o estado `todos`.
    // Abaixo está alguns objetos simulam uma dados de uma API
    {
      id:1, // Id, é como se fosse uma Primary Key, cada tarefa vai ter um diferente, não pode ser igual a outros 
      text: "Criar funcionalidade x no sistema", // A tarefa a ser realizada
      category: "Trabalho", // O tipo de tarefa a ser realizada
      isCompleted: false, // Booleano para informar se a tarefa esta `completa` ou `não está completa`
    },
    {
      id:2,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id:3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    }
  ])


  const [search, setSearch] = useState("")// Define uma variável de estado chamada search com uma função para atualizá-la, setSearch.

  const [filter, setFilter] = useState("All")// Define uma variável de estado chamada filter com uma função para atualizá-la, setFilter. Valor Inicial: O valor inicial é "All".
  const [sort, setSort] = useState("Asc")// Descrição: Define uma variável de estado chamada sort com uma função para atualizá-la, setSort. Valor Inicial: O valor inicial é "Asc",


  const addTodo = (text, category) => {// Define a função addTodo que aceita dois parâmetros: text e category.
    const newTodos = [
      ...todos, // ...todos: Usa o operador spread para copiar todos os itens do array 
      {         // O operador spread facilita a cópia e a concatenação de arrays
      id: Math.floor(Math.random() * 10000), // id: Um número aleatório entre 0 e 9999 para garantir uma identificação única.
      text, // text: O texto da tarefa, passado como argumento para a função.
      category, // category: A categoria da tarefa, passada como argumento para a função.
      isCompleted: false,// isCompleted: Define a tarefa como não concluída inicialmente (false).
      },
    ]

    setTodos(newTodos);
    //Chama a função setTodos para atualizar o estado do componente com o novo array de tarefas (newTodos).
  }


  const removeTodo = (id) => {// Define a função removeTodo que aceita um parâmetro id.
    const newTodos = [...todos] // Cria uma cópia do array de tarefas atual (todos) usando o operador spread.
    const filteredTodos = newTodos.filter(todo => 
      todo.id !== id ? todo : null 
      //Usa o método filter para criar um novo array filteredTodos contendo todas as tarefas que não têm o ID igual ao fornecido (id). O operador ternário ? garante que somente as tarefas que não correspondem ao ID fornecido sejam mantidas no array.
    );
    setTodos(filteredTodos);//Chama a função setTodos para atualizar o estado do componente com o array de tarefas filtrado (filteredTodos).
  }


  const completeTodo = (id) => {// Define uma função chamada completeTodo que aceita um parâmetro id.
    const newTodos = [...todos]// Cria uma cópia do array todos atual usando o operador spread (...).
                               // Isso garante que a modificação subsequente não afete diretamente o estado original.
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)

    setTodos(newTodos)
  }


  //Renderização do componente
  return ( // o contéudo retornado é o que o usuário verá na tela
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} //Renderiza o componente Search, passando duas props: search: O estado atual da busca.setSearch: A função para atualizar o estado da busca.   
      />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} //Renderiza o componente Filter, passando três props: filter: O estado atual do filtro setFilter: A função para atualizar o estado do filtro. setSort: A função para definir a ordem de classificação.
      />
      <div className="todo-list">
        {todos
        .filter((todo) => 
          filter === "All" ? true : filter === "Completed" ? todo.isCompleted : !todo.isCompleted)
          // Filtra as tarefas com base no estado filter:
          // Se filter for "All", retorna todas as tarefas.
          // Se filter for "Completed", retorna apenas as tarefas completadas.
          // Caso contrário, retorna apenas as tarefas incompletas.

        .filter((todo) => 
          todo.text.toLowerCase().includes(search.toLowerCase()))
          //Filtra as tarefas com base no texto da busca. Verifica se o texto da tarefa (todo.text) 
          // inclui o valor da busca (search), ambos convertidos para minúsculas para uma comparação case-insensitive.

        .sort((a, b) =>
          sort === "Asc" ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text))
          // Ordena as tarefas alfabeticamente com base no estado sort:
          // Se sort for "Asc", ordena em ordem ascendente.
          // Caso contrário, ordena em ordem descendente.
        
        .map((todo) => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
        //Esta linha usa o método `map` para iterar sobre o array `todos`. Cada iteração do `map` retorna um componente `Todo`
        // key={todo.id}: Atribui uma chave única para cada componente Todo.
        // todo={todo}: Passa o objeto todo atual como uma prop para o componente Todo.
        // removeTodo={removeTodo}: Passa a função removeTodo como uma prop para que possa ser chamada dentro do componente Todo.
        ))}
      </div>
      <TodoForm addTodo={addTodo}/>
    </div>
    )//<TodoForm addTodo={addTodo}/> Este componente renderiza um formulário para adicionar novas tarefas.
  }

export default App // exporta o componente `App` como padrão do módulo.