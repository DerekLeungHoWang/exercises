const initState = {
    posts:[
        {id: '1', title: 'data one', body: 'this is dummy data one'},
        {id: '2', title: 'data two', body: 'this is dummy data two'},
        {id: '3', title: 'data three', body: 'this is dummy data three'},
    ]
}

const rootReducer = (state = initState,action)=>{
    if(action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter(post =>{
            return action.id !== post.id
        })
        return{
            ...state,
            posts: newPosts
        }

    }
    
    return state;
}

export default rootReducer;