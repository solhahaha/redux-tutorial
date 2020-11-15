// 제이슨 형태로s
import {productReducer} from "./product";
import {userReducer} from "./user";
import {combineReducers} from "redux";

// 제이슨 형태 , 키값 제이슨 형태 이름은 내맘대로
// 초기상태
// export  const allReducers = combineReducers({
//     product : productReducer, //  productReducer,결과 리턴한 초기 값 들어감//
//     user : userReducer
// })

export  const allReducers = combineReducers({
    productReducer, //  productReducer,결과 리턴한 초기 값 들어감//
    userReducer
})