import React, { Component } from 'react';
// make this into a react-redux containers
import { connect } from 'react-redux';


class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={ book.title } className="list-group-item">
                    { book.title }
                </li>
            )
        })
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                { this.renderList() }
            </ul>
        )
    }
}

// use of react-redux connect
function mapStateToProps(state) {
    // whatever is returned here will show up as props inside BookList
    return {
        // array of books from reducer_books
        books: state.books
    }
}

// export only containers => react redux components with states
export default connect(mapStateToProps)(BookList);
