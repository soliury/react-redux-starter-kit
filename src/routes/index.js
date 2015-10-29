import React                 from 'react';
import { Route, IndexRoute } from 'react-router';
import CoreLayout            from '../views/CoreLayout';
import Pages              from '../containers/pages';

export default (
    <Route path='/' component={CoreLayout}>
        <IndexRoute component={Pages.Home}/>
    </Route>
);
