import App, {Container} from 'next/app';
import React from 'react';
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux'; 
import { createStore, compose, applyMiddleware } from 'redux';
import reducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

class MyApp extends App{
  render(){
    const {Component, pageProps} = this.props;

    return(
      <Container>
          <Component {...pageProps}/>
      </Container>
    )    
  }
}

const configureStore = (initialState, options) => {
  const middlewares = [];
  const enhancer = process.env.NODE_ENV === 'production' ? 
    compose(applyMiddleware(...middlewares)) : 
        composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(reducer, initialState, enhancer);
  return store;

}

export default withRedux(configureStore)(MyApp);