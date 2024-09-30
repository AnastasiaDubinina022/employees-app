import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css'

const EmployeesList = ({data}) => {

    const elements = data.map(item => {           // динамически формируем элементы на основе массива с объектами из бд

        // return <EmployeesListItem name={item.name} salary={item.salary}/>
        return <EmployeesListItem {...item}/>     // разворачиваем объект с помощью spread - получаем то же самое                                            
    })

    return (
        <ul className='app-list list-group'>
            {elements} 
        </ul>
        
    );
}

export default EmployeesList;