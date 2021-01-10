import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Provider} from "react-redux";
import { createStore } from 'redux';
import rootReducer from './modules';

//상태를 변경하는 거 reducer
// 처음에 reducer 함수를 처음에 인자로 해서 리턴해서 초기상태를 만든다
// 초기값이 잇다면 그다음부턴 reducer의 첫본째 인자 : 기존상태 , 두번째인자 : 액선
// const reducer = (state,action) =>{
//     if (action.type === 'chageState'){
//         return action.payload;
//     }
//     return 'State';
// }




// 1) 가입(subscribe()을 해야한다 그 스토어에 3) 변경돤 데이터를 내려받는다
// store.subscribe(()=> console.log(store.getState()));
// const action = {
//     type : 'udateUser',
//     payload : '=Tom'
// };

// 2) dispatch
// store.dispatch(action)


const store = createStore(rootReducer); // 스토어를 만듭니다.
console.log(store.getState()); // 스토어의 상태를 확인해봅시다.
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// 응집도 높인다 코드 가 커지고 확장성높일려면 잘게 쪼개기 퍀지 설계