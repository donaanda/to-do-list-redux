import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getListData} from "../actions";

class List extends Component {

    componentDidMount() {
        this.props.getListData();
    }

    render() {
        const {listData} = this.props;

        const listItems = listData.map((item, index) => {
            return <li className="collection-item" key={index}>{item.title}</li>
        });

        return (
            <ul className="collection">
                {listItems}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        listData: state.list.all
    }
}

export default connect(mapStateToProps, {getListData: getListData})(List);