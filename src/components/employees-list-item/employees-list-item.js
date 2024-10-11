import { Component } from 'react';

import './employees-list-item.css';

class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: false,  // пока стэйт установили так, пототм возьмем из базы.
            rise: false
        }
    }

    onIncrease = () => {
        this.setState(({increase}) => ({   // сразу берем increase из стэйта с помощью синтаксиса деструктуризации, не забывать про круглые скобки вокруг объекта - они заменяют слово return
            increase: !increase            // меняем в стэйт значение increase на противоположное
        }))
    }

    onRise = () => {
        this.setState(({rise}) => ({
            rise: !rise
        }))
    }

    render() {
        const {name, salary, onDelete} = this.props;
        const {increase, rise} = this.state;

        let classNames = 'list-group-item d-flex justify-content-between';
        if (increase) {
            classNames += ' increase';   // добавляем класс если пропс increase в true
        }
        if (rise) {
            classNames += ' like';
        }

        return (
        <li className={classNames}>
            <span className="list-group-item-label" onClick={this.onRise}>{name}</span>   {/* добавляем событие по клику на сотрудника */}
            <input 
                type="text" 
                className="list-group-item-input" 
                defaultValue={salary + '$'}          // атрибут реакта - это значение будет по умолчанию
            />
            
            <div className='d-flex justify-content-center align-items-center'>
                <button 
                    type="button"
                    className="btn-cookie btn-sm "
                    onClick={this.onIncrease}>         {/* кнопке с печенькой добавляем событие и метод-обработчик */} 
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
}

export default EmployeesListItem;