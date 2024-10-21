import { Component } from 'react';

// import './employees-add-form.css';
import './employees-add-form.scss';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
            errorMessage: ''
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
        const {name, salary} = this.state;

        // if (name.length < 3 || salary === '') return;   
        if (name.length < 3 || !salary) {         // name короче 3х символов или salary не заполнен остановить отправку формы
            this.setState({
                errorMessage: 'Пожалуйста, заполните все поля.'  // и передаем сообщение в стейт
            })
            return;           
        }
        

        onAdd(name, salary);   // при отправке формы передаем значения из стэйта в метод родителя
        this.setState({                            // очищаем стэйт (инпуты)
            name: '',
            salary: '',
            errorMessage: ''
        })
    }

    render() {
        const {name, salary, errorMessage} = this.state;

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
                            className="btn btn-outline-light"     // ниже блокировка кнопки если поля name и salary пустые
                            disabled={!name || !salary}>Добавить</button>  
                    
                    {/* Условный рендеринг. Здесь {errorMessage && } проверяет значение в errorMessage и если да то рендерит блок с сообщением */}
                    {errorMessage && <div className='error'>{errorMessage}</div>}  
                   
                </form>
            </div>
        );
    }
}

export default EmployeesAddForm;