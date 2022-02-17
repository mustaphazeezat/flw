import { createStore } from 'vuex'
import posts from './modules/posts'



//Create store
export default createStore({
    modules: {
        posts
    }
})