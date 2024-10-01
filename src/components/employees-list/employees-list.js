import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css'

const EmployeesList = ({data}) => {

    const elements = data.map(item => {      // динамически формируем элементы на основе массива с объектами из бд
        // return <EmployeesListItem name={item.name} salary={item.salary}/>
        // return <EmployeesListItem {...item}/>     // разворачиваем объект с помощью spread - получаем то же самое 

        const {id, ...itemProps} = item;     // выделяем id и остальные св-ва идут в itemProps - деструктуризация по отстаточному принципу

        return <EmployeesListItem key={id} {...itemProps}/>  // записываем id в пропс key, а остальные пропсы идут дальше в itemProps                                         
    })

    return (
        <ul className='app-list list-group'>
            {elements} 
        </ul>
        
    );
}

export default EmployeesList;