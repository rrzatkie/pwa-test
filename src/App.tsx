/* eslint-disable prefer-const */
import { FC, useState } from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';

export const App: FC = () => {
    const [availableStorage, setAvailableStorage] = useState('');
    const [usedStorage, setUsedStorage] = useState('');

    if ('storage' in navigator && 'estimate' in navigator.storage) {
        navigator.storage.estimate().then(({ usage, quota }) => {
            setAvailableStorage(quota?.toString() || '');
            setUsedStorage(usage?.toString() || '');
        });
    }

    return (
        <div className="App">
            {/* <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Counter initialIncrementAmount={2} />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <span>
                    <span>Learn </span>
                    <a className="App-link" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                        React
                    </a>
                    <span>, </span>
                    <a className="App-link" href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">
                        Redux
                    </a>
                    <span>, </span>
                    <a
                        className="App-link"
                        href="https://redux-toolkit.js.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Redux Toolkit
                    </a>
                    ,<span> and </span>
                    <a
                        className="App-link"
                        href="https://react-redux.js.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        React Redux
                    </a>
                </span>
            </header> */}
            <section>
                <p>Available space: {availableStorage}</p>
                <p>Used space: {usedStorage}</p>
                <button>Add file to cache</button>
            </section>
        </div>
    );
};

export default App;
