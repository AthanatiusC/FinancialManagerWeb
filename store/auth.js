export const state = () => ({
    user: {}
})

export const mutations = {
    setUser (state,user) {
        state.user = user
        this.$cookies.set("refresh_token",user.refresh_token)
        this.$cookies.set("access_token",user.access_token)
        this.$cookies.set("fullname",user.fullname)
        this.$cookies.set("id",user.id)
        
    },
    clear (state) {
        state.user = {}
        this.$cookies.remove
    }
}