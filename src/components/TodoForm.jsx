import { useState } from 'react'// Esta linha importa o hook useState da biblioteca React. useState é um hook que permite adicionar estado aos componentes funcionais.

const TodoForm = ({ addTodo }) => {// Define um componente funcional chamado TodoForm. Este componente aceita uma prop chamada addTodo
    const [value, setValue] = useState("")// value e setValue: Define um estado para armazenar o texto da nova tarefa. Inicialmente, value é uma string vazia.
    const [category, setCategory] = useState("")// category e setCategory: Define um estado para armazenar a categoria da nova tarefa. Inicialmente, category é uma string vazia.

    const handleSubmit = (e) => {
        e.preventDefault()// e.preventDefault(): Evita o comportamento padrão do formulário de recarregar a página.
        if(!value || !category) return//if(!value || !category) return: Verifica se os campos value e category estão preenchidos.
                                      //Se algum deles estiver vazio, a função retorna sem fazer nada.
        addTodo(value, category) //addTodo(value, category): Chama a função addTodo (passada como prop) com os valores value e category.

        // setValue("") e setCategory(""): Limpa os campos de entrada após a adição da nova tarefa.
        setValue("")
        setCategory("")
    }

  return (// <form onSubmit={handleSubmit}> Define um formulário com um manipulador de envio handleSubmit.
        // Define um campo de entrada de texto com um placeholder "Digite o título". O valor do campo é controlado pelo estado value.
        // O manipulador de evento onChange atualiza o estado value conforme o usuário digita.
        // Define um campo de seleção (select) para escolher a categoria da tarefa
        // Define um botão de submissão com o texto "Criar tarefa".
    <div className="todo-form">
        <h2>Criar tarefa:</h2>
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder="Digite o título"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Selecione uma categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
            </select>
            <button type="submit">Criar tarefa</button>
        </form>
    </div>
  )
}

export default TodoForm// Exporta o componente TodoForm como padrão, permitindo que ele seja importado e usado em outros arquivos.