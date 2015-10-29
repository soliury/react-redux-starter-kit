import React from 'react';


export class HomeView extends React.Component {
    static propTypes = {
        actions: React.PropTypes.object
    };


    _onCounterPress(e:Event) {
        this.props.increment(2);
    }


    _onFetchTestPress(e:Event) {
        this.props.fetchTest();
    }


    render() {
        return (
            <div className='container text-center'>
                <h1>Welcome to the React Redux Starter Kit</h1>
                <h2>Sample Counter: {this.props.counter.num}</h2>
                <button className='btn btn-default'
                        onClick={this._onCounterPress.bind(this)}>
                    Increment
                </button>

                <button className='btn btn-default'
                        onClick={this._onFetchTestPress.bind(this)}>
                    FetchTest
                </button>
                <div>
                    {JSON.stringify(this.props.counter.data, null, 4)}
                </div>
            </div>
        );
    }
}

export default HomeView;
