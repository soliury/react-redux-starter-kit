import connect from '../../store/connect';
import * as Home from './Home';


var Containers = {
    Home
};

Object.keys(Containers).forEach(function (key) {
    let component = Containers[key].component;
    Containers[key] = connect(
        Containers[key].mapStateToProps,
        Containers[key].mapDispatchToProps,
        Containers[key].mergeProps
    )(component);
});

export default Containers;
