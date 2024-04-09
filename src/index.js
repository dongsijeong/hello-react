import React from 'react';
import ReactDOM from 'react-dom/client';

// import './01-base/01-class-component'
import AppClass from './01-base/01-class-component'
import AppFunction from './01-base/02-function-component'
import AppQiantao from './01-base/03-qiantao-component';
import AppStyle from './01-base/04-style-component';
import AppEventBind01 from './01-base/05-event-bind-01';
import AppEventBind02 from './01-base/06-event-bind-02';
import AppRef from './01-base/07-ref';
import AppState01 from './01-base/08-state-01';
import AppState02 from './01-base/08-state-02';
import AppArray from './01-base/09-array';
import AppTodoList from './01-base/10-todolist';
import AppOption from './01-base/12-option-component';
import AppSetStateAsync from './01-base/13-setState-async';
import AppBetterScroll from './01-base/14-betterScroll';
import AppBetterScrollCinema from './01-base/15-betterscroll-cinema';
import AppProps from './01-base/16-props';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <AppClass />
    <AppFunction />
    <AppQiantao />
    <AppStyle />
    <AppEventBind01 />
    <AppEventBind02 />
    <AppRef />
    <AppState01 />
    <AppState02 />
    <AppArray />
    <AppTodoList />
    <AppOption />
    <AppSetStateAsync />
    <AppBetterScroll />
    <AppBetterScrollCinema /> */}
    <AppProps />
  </React.StrictMode>
);