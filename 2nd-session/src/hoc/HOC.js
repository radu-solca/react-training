import React, {Component} from 'react';

const HOC = (WrappedComponent) => {
    return class extends Component {
        render() {
            return <>
                <h3>higher order component here</h3>
                <WrappedComponent/>
            </>
        }
    }
}

export default HOC;