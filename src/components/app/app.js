import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'John C.', salary: 800, increase: true, rise: false, id: 1},
                {name: 'Alex M.', salary: 3000, increase: false, rise: true, id: 2},
                {name: 'Carl W.', salary: 5000, increase: false, rise: false, id: 3}
            ],
            term: '',
            filter: 'all'
        };
        this.maxId = 4;
        
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            // 1 вариант:
             // const index = data.findIndex(elem => elem.id === id);   // находим индекс элемента 

            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);
            // const newArr = [...before, ...after];
            
            // 2 вариант
            return {
                data: data.filter(item => item.id !== id),
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }

        this.setState(({data}) => {
            const newArr = [...data, newItem];

            return {
                data: newArr
            };
        })
    }

    // 1й рабочий вариант выдернуть откуда-то любой элемент
    // onToggleIncrease = (id) => {
        // this.setState(({data}) => {                                
            // const index = data.findIndex(elem => elem.id === id);  // находим по индексу объект (элемент) на котором произошло событие в EmployeesListItem
            //                         // далее нам нужно создать новую копию этого объекта, чтобы что-то в ней поменять не нарушая принципы иммутабельности
            // const old = data[index];                              // промежуточная перем. для наглядности получения старого объекта на котором произошло событие
            // const newItem = {...old, increase: !old.increase};    // создаем новую копию этого объекта с помощью деструктуризации, при этом сразу перезаписываем в нем св-во increase на противоположное тому, что было в старом объекте
            //                         // т.е. в новый объект {...old, } после запятой мы можем добавлять новые св-ва, а если такие уже есть в ...old, то они будут перезаписаны
            //                     // далее нужно переработать стэйт включая новый сформированный объект
            // const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];  // разворачиваем старый массив до элемеента, новый элемент, старый массив после элемента

            // return {
            //     data: newArr
            // } 
        // })
    // }

    // 2й вариант более коротко
    // onToggleIncrease = (id) => {
    //     this.setState(({data}) => ({      // получаем data из стэйта и сразу ретерним новый стэйт с измененной data
    //         data: data.map(item => {      // возвращаем новое значение data, с помощью map - проходим по массиву и возвращаем каждый элемент
    //             if (item.id === id) {     // если элемент совпадает с нашим айди
    //                 return {...item, increase: !item.increase}   // то из этой ветки логики возвращаем новый элемент на основе старого с измененным increase
    //             }
    //             return item;         // вовращаем каждый элемент 
    //         })                // таким образом в значение data из map получаем новый массив всех элементов, включая тот новый где мы изменили св-ва
    //     }))
    
    // }

    // onToggleRise = (id) => {
    //     this.setState(({data}) => ({
    //         data: data.map(item => {
    //             if(item.id === id) {
    //                 return {...item, rise: !item.rise}
    //             }
    //             return item;
    //         })
    //     }))
    // }

    // вариант оптимизации, что бы в обоих методах не повторялся одинаковый код, с помощью получения дата-атрибута (prop) при клике из EmployyesListItem 
    onToggleProp = (id, prop) => {      //  св-во rise/increase получим вторым аргументом из < EmployeesList < EmployeesListItem
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, [prop]: !item[prop]}    // квадратные скобки чтобы не было никаких ошибок
                }
                return item;
            })
        }))
    }

    onUpdateSearch = (term) => {   // метод просто  получает строку из поиска и переустанавлявает стэйт
        this.setState({term});  // сокращенная запись объектов = {term: term}
    }

    searchEmp = (items, term) => {   // берет данные из стэйта и фильтрует
        if (term.length === 0) {    // базовая проверка на пустую строку
            return items;           // возвр. все элементы - ничего не происходит
        }
        // если строка ввода не пуста
        return items.filter(item => {    // фильтруем массив, берем каждый отдельный элемент и возвращам только те у кого в name есть совпадения с term(ввод)
             return item.name.indexOf(term) > -1;  // т.е. проходят эту проверку (от indexOf приходит индекс первого совпадения, если совпадений нет приходит -1)
        })   
                                        // это поиск не сначала строки а во все слове
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise': 
                return items.filter(item => item.rise);
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items;
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    onSalaryChange = (id, salary) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                    if (id === item.id) {
                        return {...item, salary: salary}
                    }
                    return item;
            })
        }))  // пока только в стейте меняются данные, "бд" не трогается, при перезапуске снова дефолтные значения 
    }

    render() {
        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterPost((this.searchEmp(data, term)), filter);  // здесь массив из стэйта, отфильтрованный методами searchEmp и filterEmp
        
        return (
            <div className="app">
                <AppInfo 
                employees={employees}
                increased={increased}/>
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter 
                    filter={filter}   // фильтр сразу передаем чтобы на него можно было ориентироваться с классом активной кнопки
                    onFilterSelect={this.onFilterSelect}/>    
                </div>
    
                <EmployeesList 
                    data={visibleData}      
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    onSalaryChange={this.onSalaryChange}
                />  

                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;
