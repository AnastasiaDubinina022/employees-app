// import { Component } from 'react';

import './employees-list-item.css';

// class EmployeesListItem extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             salary: ''  
//         }
//     }

//     salaryChange = (e) => {
//         const salary = e.target.value;
//         this.setState({salary});
//         this.props.onSalaryChange(salary);
//     }

//     render() {
//         const {name, salary, increase, rise, onDelete, onToggleProp} = this.props;

//         let classNames = 'list-group-item d-flex justify-content-between';
//         if (increase) {
//             classNames += ' increase';   // добавляем класс если пропс increase в true
//         }
//         if (rise) {
//             classNames += ' like';
//         }
    
//         return (
//             <li className={classNames}>
//                 <span 
//                     className="list-group-item-label" 
//                     onClick={onToggleProp} 
//                     data-toggle="rise">{name}</span>    {/* назначаем дата-атрибут чтобы по нему определить изменившееся св-во объекта при клике, тоже и с increase - у них один общий обработчик в App*/}
//                 <input 
//                     type="text" 
//                     className="list-group-item-input" 
                    
//                     defaultValue={salary + '$'}          // атрибут реакта - это значение будет по умолчанию
//                     onChange={this.salaryChange}
//                 />
                
//                 <div className='d-flex justify-content-center align-items-center'>
//                     <button 
//                         type="button"
//                         className="btn-cookie btn-sm "
//                         onClick={onToggleProp}      
//                         data-toggle="increase">         
//                         <i className="fas fa-cookie"></i>
//                     </button>
    
//                     <button type="button"
//                             className="btn-trash btn-sm"
//                             onClick={onDelete}>
//                         <i className="fas fa-trash"></i>
//                     </button>
//                     <i className="fas fa-star"></i>
//                 </div>
//             </li>
//         );
//     }
// }

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
                    // onChange={this.salaryChange}
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