import React, { Component } from 'react';
// make this into a react-redux containers
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';


class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li
                    key={ book.title }
                    onClick={ () => this.props.selectBook(book) }
                    className="list-group-item">
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

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
    // whenever selectBook is called, the result should be passed
    // to all of our reducer
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// export only containers => react redux components with states
// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
