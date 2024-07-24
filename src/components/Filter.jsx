const Filter = ({ filter, setFilter, setSort }) => {
    // Define um componente funcional chamado Filter. Este componente aceita três props:
    // filter: Um estado que armazena o valor atual do filtro de status.
    // setFilter: Uma função para atualizar o estado filter.
    // setSort: Uma função para definir a ordem de classificação (alfabética).

    return (
    <div className="filter">
        <h2>Filtrar:</h2>
        <div className="filter-options">
            <div>
                <p>Status</p>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="All">Todos</option>
                    <option value="Completed">Completas</option>
                    <option value="Incomplete">Incompletas</option>
                </select>
            </div>
            <div>
                <p>Ordem alfabética:</p>
                <button onClick={() => setSort("Asc")}>Asc</button>
                <button onClick={() => setSort("desc")}>Desc</button>
            </div>
        </div>
    </div>
  )//Um elemento <select> cujo valor atual é controlado pelo estado filter. O manipulador de evento onChange atualiza o estado filter chamando setFilter com o valor selecionado.
   // Botão tem um manipulador de evento onClick que chama setSort("Asc"), configurando a ordenação alfabética para ascendente/descendente.
}

export default Filter