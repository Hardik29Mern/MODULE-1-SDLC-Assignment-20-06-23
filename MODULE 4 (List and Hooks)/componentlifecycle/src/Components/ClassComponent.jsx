import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor() {
        super();
        this.state = {
            rollno: 1,
            name: 'Testing',
        };
        console.log('Constructor Called... ' + this.state.name);
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ name: 'Test 2' });
            console.log('Component Did Mount Called...');
        }, 5000);
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Get derived state from props called...');
        if (state.name !== 'UpdatedName') {
            return { name: 'UpdatedName' };
        }
        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Should Component Update! Current name: ' + this.state.name);
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Prev State Name is ' + prevState.name);
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Name is ' + this.state.name);
    }

    componentWillUnmount() {
        console.log('Destroyed...');
    }

    render() {
        return (
            <div>
                <h3>Component LifeCycle: Class Component</h3>
                <h3>RollNo is: {this.state.rollno}</h3>
                <h3>Name is: {this.state.name}</h3>
                <button onClick={() => this.setState({ name: 'ABC' })}>Change Name</button>
            </div>
        );
    }
}
