// reducer is a function, accepts state and action.
// based on the action type ie. action.type=='create', then we perform some logic -> return action or state changed by the action
// multiple if statements for different action therefore, we have switch statement 
// always state has some intial value "[]". It cannot be empty
import { FETCH_BY_SEARCH,FETCH_ALL, CREATE, UPDATE, DELETE, LIKE, START_LOADING, END_LOADING,FETCH_POST} from '../constants/actionTypes';

export default (state= { isLoading: true, posts: [] },action) => {
    switch(action.type){
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case CREATE:
            return { ...state, posts: [...state.posts, action.payload] };
        case FETCH_ALL:
            return {
                ...state,
                posts: action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages,
            };
        case FETCH_BY_SEARCH:
            return { ...state, posts: action.payload };
        case FETCH_POST:
            return { ...state, post: action.payload };
        case UPDATE:
            return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) };
        case DELETE:
            return { ...state, posts: state.posts.filter((post) => post._id !== action.payload) };
        case LIKE:
            return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) };
        default:
            return state;
    }
}