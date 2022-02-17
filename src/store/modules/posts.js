import axios from 'axios'

const state ={
    posts: [],
    singlePost: {},
    loading: true,
    filteredPosts: []
}

const getters ={
    allPosts: state => state.posts,
    loading: state => state.loading,
    singlePost: state => state.singlePost,
    newfilteredpost: state => state.filteredPosts

}

const actions ={
    async getAllPosts({commit}){
       
        try {
            const res = await axios.get("https://techcrunch.com/wp-json/wp/v2/posts")
            const filtered = res.data.slice(0,3)
            commit('setPosts', res.data)
            commit('setFilteredPosts', filtered)
            commit('setLoading', false)
        } catch (error) {
            console.log(error)
        }  
    },
    async getSinglePost ({commit},id){
        try {
            const res = await axios.get(`https://techcrunch.com/wp-json/wp/v2/posts/${id}`)
            commit('setPost', res.data)
            commit('setLoading', false)
            
        } catch (error) {
            console.log(error)
        }  
    }
}

const mutations ={
    setPosts: (state, posts) => (state.posts = posts),
    setLoading: (state, loading) => (state.loading = loading),
    setPost: (state, singlePost) => (state.singlePost = singlePost),
    setFilteredPosts: (state, newfilteredpost) => (state.filteredPosts  = newfilteredpost),

} 

export default{
    state,
    getters,
    actions,
    mutations
}
