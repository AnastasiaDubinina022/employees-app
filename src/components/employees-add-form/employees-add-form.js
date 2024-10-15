import { Component } from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({                        // один обработчик на 2 инпута
            [e.target.name]: e.target.value    // таким образом по атрибуту name определяем инпут и записываем его значение в нужный state
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const {onAdd} = this.props;
        onAdd(this.state.name, this.state.salary);   // при отправке формы передаем значения из стэйта в метод родителя
        this.setState({                            // очищаем стэйт (инпуты)
            name: '',
            salary: ''
        })
    }

    render() {
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name='name'                        // назначаем атрибуты name инпутам чтобы использовать один обработчик на оба
                        value={name}
                        onChange={this.onValueChange} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name='salary'
                        value={salary}
                        onChange={this.onValueChange} />
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        );
    }
}

export default EmployeesAddForm;