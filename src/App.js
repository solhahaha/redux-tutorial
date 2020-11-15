import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";
import {userReducer} from "./redux/reducers/user";
import {updateUser} from "./redux/actions";

function App(props) {
  console.log(props);
  const user = useSelector(state =>state.userReducer);
  const dispatch = useDispatch();

  return (
      <div className="App">
          <p>길이 : {props.aaa.length}</p>
          <p>{props.user}</p>
          <button onClick={() => props.ccc('Gaer')}>액션 테스트</button>
      </div>
    // <div className="App">
    //   <p>길이 : {props.aaa.length}</p>
    //   <p>{props.user}</p>
    //     <button onClick={() => props.ccc('Gaer')}>액션 테스트</button>
    // </div>
  );
}
export default App


// // subscribe : 스토어의 state를 props 매핑
// const mapStateToProps = (state)=> ({
//   // 왼쪽은 props 오른쪽은 스토어의 state
//     aaa : state.productReducer,
//     user :state.userReducer
// })
//
// //dispatch : 액션을 디스패치하는 평션을 props로 매핑
// const mapActionToProps = (dispatch) =>({
//     // // 왼쪽은 props 오른쪽은 액션을 디스패치하는 평션
//
//     ccc:(name)=>dispatch(updateUser(name))
// })
// //HoC, 커링 펑션
// export default connect(mapStateToProps,mapActionToProps)(App);
[]