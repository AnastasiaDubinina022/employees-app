import { Component } from 'react';

import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateTerm = (e) => {             // отдельный метод для правильной синхронизации локального стэйта
        const term = e.target.value;    // получаем значение инпута
        this.setState({term});          // устанавливаем его в локальный стэйт
        this.props.onUpdateSearch(term);   // запускаем метод из пропсов поднимающий актуальный term из поля ввода
    }

    render() {
        // const {onUpdateSearch} = this.props;   
        return (
            <input 
                type="text"
                className="form-control search-input"  // готовые классы из bootstrap
                placeholder="Найти сотрудника" 
                value={this.term}
                onChange={this.onUpdateTerm}
                // onChange={(e) => onUpdateSearch(e.target.value)}   // возможно и такое решение напрямую, но лучше с доп методом для правильной синхронизации локального стейта
                />
        );
    }
}

export default SearchPanel;