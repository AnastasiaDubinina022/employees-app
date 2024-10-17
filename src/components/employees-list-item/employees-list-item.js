import './employees-list-item.css';

const EmployeesListItem = (props) => {

    const {name, salary, increase, rise, onDelete, onToggleProp} = props;

    let classNames = 'list-group-item d-flex justify-content-between';
    if (increase) {
        classNames += ' increase';   // добавляем класс если пропс increase в true
    }
    if (rise) {
        classNames += ' like';
    }

    return (
    <li className={classNames}>
        <span 
            className="list-group-item-label" 
            onClick={onToggleProp} 
            data-toggle="rise">{name}</span>    {/* назначаем дата-атрибут чтобы по нему определить изменившееся св-во объекта при клике, тоже и с increase - у них один общий обработчик в App*/}
        <input 
            type="text" 
            className="list-group-item-input" 
            defaultValue={salary + '$'}          // атрибут реакта - это значение будет по умолчанию
        />
        
        <div className='d-flex justify-content-center align-items-center'>
            <button 
                type="button"
                className="btn-cookie btn-sm "
                onClick={onToggleProp}      
                data-toggle="increase">         
                <i className="fas fa-cookie"></i>
            </button>

            <button type="button"
                    className="btn-trash btn-sm"
                    onClick={onDelete}>
                <i className="fas fa-trash"></i>
            </button>
            <i className="fas fa-star"></i>
        </div>
    </li>
);
}

export default EmployeesListItem;