import App, {Container} from 'next/app';
import withRedux from 'next-redux-wrapper';
import {Provider} from 'react-redux'
import {createStore,  applyMiddleware, compose } from 'redux';
// import reducer from '../reducers';;
import React from 'react';


class MyApp extends App{
  render(){
    const {Component, pageProps, store} = this.props;

    return(
      <Container>
        <Provider store={store}>
          <Component {...pageProps}/>
        </Provider>
      </Container>
    )    
  }
}

const congfigureStore = (initialState, options)=>{
  const middlewares = [];
  const enhancer = process.env.NODE_ENV === 'production' ?
    compose(applyMiddleware(...middlewares)) : 
    compose(applyMiddleware(...middlewares)
    );
  const store = createStore(reducer, initialState, enhancer);
  return store;
}

export default withRedux(congfigureStore)(MyApp);
