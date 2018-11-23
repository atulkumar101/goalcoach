import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Switch, Route, Router } from 'react-router-dom';
import { firebaseApp } from './firebase';
import {createBrowserHistory} from 'history';
import reducer from './reducers';
import { logUser } from './actions';

import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';
import FirstPage from './components/FirstPage';

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const history=createBrowserHistory();

firebaseApp.auth().onAuthStateChanged( user => {
    if(user) {
        // console.log('user has signed in or up', user);
        const { email } = user;
        store.dispatch(logUser(email));
        history.push('/app');
    } else {
        // console.log('user has signed out or still needs to sign in');
        history.push('/signin');
        // BrowserHistory.replace('/signin');
    }
} )

ReactDom.render(
    <Provider store={store}>
        <div>
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={FirstPage} />
                    <Route exact path="/app" component={App} />
                    <Route exact path="/signin" component={SignIn} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/forgot" component={ForgotPassword}/>
                </Switch>
            </Router>
        </div>
    </Provider>, document.getElementById('root')
)