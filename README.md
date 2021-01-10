#리덕스
#### 1. 카운터 구현하기
#### 2. 할 일 목록 만들기
#### 3. 개념 정리
**액션**
- 상태 업테이트 할때 어떻게 업데이트 해야할지 정보를 지니고 잇는 객체  


**리듀서**
- 상태를 변경하는 함수  


**스토어**
-리덕스에서는 한 애플리케이션당 하나의 스토어를 만들게 됩니다. 스토어 안에는, 현재의 앱 상태와, 리듀서가 들어가있고, 추가적으로 몇가지 내장 함수


**shallowEqual**  
- useSelector 를 최적화 해준다
- 얇게 최적화하기 때문에 값을 변화시킬때 불변성을 잘 지키면서 해야된다.
- 예시
```const { number, diff } = useSelector(state => ({
     number: state.counter.number,
     diff: state.counter.diff
   }));
```
 위에 소스는 상태를 조회할때마다 새로운 객체를 반환하기때문에 불필요한 리렌더링이 이루워짐
   
해결 방법은 각각 데이터마다 useSelector를 사용하던가 or
```const { number, diff } = useSelector(state => ({
     number: state.counter.number,
     diff: state.counter.diff
   }),shallowEqual*);
```
으로 사용 한다.

**connect, HOC 함수**
```import React from 'react';
   import { connect } from 'react-redux';
   import Counter from '../components/Counter';
   import { increase, decrease, setDiff } from '../modules/counter';
   
   function CounterContainer({ number, diff, increase, decrease, setDiff }) {
     return (
       <Counter
         // 상태와
         number={number}
         diff={diff}
         // 액션을 디스패치 하는 함수들을 props로 넣어줍니다.
         onIncrease={increase}
         onDecrease={decrease}
         onSetDiff={setDiff}
       />
     );
   }
   
   // mapStateToProps 는 리덕스 스토어의 상태를 조회해서 어떤 것들을 props 로 넣어줄지 정의합니다.
   // 현재 리덕스 상태를 파라미터로 받아옵니다.
   const mapStateToProps = state => ({
     number: state.counter.number,
     diff: state.counter.diff
   });
   
   // mapDispatchToProps가 함수가 아니라 객체면
   // bindActionCreators 를 connect 에서 대신 해줍니다.
   const mapDispatchToProps = {
     increase,
     decrease,
     setDiff
   };
   
   // connect 함수에는 mapStateToProps, mapDispatchToProps 를 인자로 넣어주세요.
   export default connect(
     mapStateToProps,
     mapDispatchToProps
   )(CounterContainer);
   
   /* 위 코드는 다음과 동일합니다.
     const enhance = connect(mapStateToProps, mapDispatchToProps);
     export defualt enhance(CounterContainer);
   */

```