import * as React from 'react';
import * as ReactDOM  from 'react-dom/client';
import App from './components/App';

const mountNode = document.getElementById('container');
const root = ReactDOM.createRoot(mountNode);


root.render(<App />)

export default root 