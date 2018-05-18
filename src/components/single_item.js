import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {Link} from 'react-router-dom';

class SingleItem extends Component {

    componentDidMount() {

        this.props.getSingleItem(this.props.match.params.id);
    }

    componentWillMount() {
        this.props.clearSingleItem();
    }

    handleToggleComplete() {
        this.props.toggleItemComplete(this.props.match.params.id);
    }

    async handleDeleteItem() {
        await this.props.deleteItem(this.props.match.params.id);

        this.props.history.push('/');
    }

    render() {
        console.log('Single Props:', this.props);

        const {title, details, complete} = this.props.item;
        //const time = new Date(this.props.item.created);

        if (!title) {
            return <p>Loading...</p>
        }

        return (
            <div>
                <h1 className="center">To Do Item</h1>
                <div className="row right-align">
                    <Link to="/" className="btn blue-grey">View Full List</Link>
                </div>
                <h4>{title}</h4>
                <p>{details}</p>
                <p>Item is {complete ? 'completed': 'incomplete'}</p>
                <button
                    onClick={this.handleToggleComplete.bind(this)}
                    className={`btn ${complete ? 'yellow': 'green'}`}>
                    {complete ? 'Make Incomplete': 'Complete Item'}
                </button>
                <br/>
                <button onClick={this.handleDeleteItem.bind(this)} className="btn red darken-2">Delete Item</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        item: state.list.single
    }
}

export default connect(mapStateToProps, actions)(SingleItem);