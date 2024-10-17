import { Component } from 'react';

import './app-filter.css';

class AppFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: 'all'
        }
    }

    onFilter = (e) => {
        const filter = e.currentTarget.getAttribute('data-filter');
        this.setState({filter});
        this.props.onFilter(filter);
    }

    render() {
        return (
            <div className='btn-group'>
                <button 
                    className='btn btn-light'
                    type='button'
                    data-filter="all"
                    onClick={this.onFilter}>
                        Все сотудники
                </button>
                <button 
                    className='btn btn-outline-light'
                    type='button'
                    data-filter="rise"
                    onClick={this.onFilter}>
                        На повышение
                </button>
                <button 
                    className='btn btn-outline-light'
                    type='button'
                    data-filter="salary"
                    onClick={this.onFilter}>
                        З/П больше 1000$
                </button>
            </div>
        );
    }
}

export default AppFilter;