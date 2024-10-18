import './app-filter.css';

const AppFilter = (props) => {
    // хороший подход к формированию кнопок:
    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'rise', label: 'На повышение'},
        {name: 'moreThen1000', label: 'З/П больше 1000$'}
    ]   // можно добавлять кнопки сюда и в род.метод в switch/case

    const buttons = buttonsData.map(({name, label}) => {  // из каждого объекта сразу вытаскиваем данные и преобразуем в структуру кнопок
        const active = props.filter === name;      // проверяем каждый объект, активный это элемент или нет, сравнивая name с filter из пропсов
                                      // const active = if (props.filter === name) return true; - тоже самое что в сокращенной строке выше
        const clazz = active ? 'btn-light' : 'btn-outline-light';   // распростр. прием с назначением класса активности
        
        return (              
            <button type='button'
                className={`btn ${clazz}`}  
                key={name}     // обязательный атрибут списков, name уникальна, поэтому подходит сюда
                onClick={() => props.onFilterSelect(name)}>  
                {label}
            </button>
        )
            
    })
    
    return (
        <div className='btn-group'>
            {buttons}
        </div>
    );

}

export default AppFilter;