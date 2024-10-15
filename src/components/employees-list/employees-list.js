import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css'

const EmployeesList = ({data, onDelete, onToggleProp}) => {

    const elements = data.map(item => {      // динамически формируем элементы на основе массива с объектами из бд
        // return <EmployeesListItem name={item.name} salary={item.salary}/>
        // return <EmployeesListItem {...item}/>     // разворачиваем объект с помощью spread - получаем то же самое 

        const {id, ...itemProps} = item;     // выделяем id и остальные св-ва идут в itemProps - деструктуризация по отстаточному принципу

        return (
            <EmployeesListItem 
                key={id}          // записываем id в пропс key, а остальные пропсы идут дальше в itemProps
                {...itemProps}  
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}  // сюда объект события приходит автоматически при клике по ссылке на него в EmployeesListItem, из этого объекта получаем атрибут тоггл и передаем в метод вторым аргументом
            />                                          //  e.currentTarget для того чтобы нивелировать возможные всплытия событий чтобы точно получать тот элемент который нужен
        )
    })

    return (
        <ul className='app-list list-group'>
            {elements} 
        </ul>
        
    );
}

export default EmployeesList;