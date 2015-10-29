import HomeView from '../../views/HomeView';

export function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}


export const component = HomeView;