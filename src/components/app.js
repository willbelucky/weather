import React, {Component} from 'react';

import SearchBar from '../containers/search_bar';

export default class App extends Component {
    render() {
        return (
            <div id='app'>
                <SearchBar/>
            </div>
        );
    }
}