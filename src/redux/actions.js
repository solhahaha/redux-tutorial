// action crearor:  액션을 동적으로만두는 함수
export const updateUser = (name) => ({
    type : 'updateUser',
    payload: name
})