import { Form } from "element-ui"

export default function ({store,app, redirect }) {
// If the user is not authenticated
    let id = app.$cookies.get('id')
    app.$axios.setHeader("refresh_token",app.$cookies.get("refresh_token"))
    app.$axios.setHeader("user_id",app.$cookies.get("id"))
    app.$axios.$get("/api/v1/user/" + id).then((res) => {
        if (res.status == false) {
            let fd = new FormData()
            fd.append("id",id)
            app.$axios.$post("/api/v1/refresh", fd, { headers:{"Content-Type":"multipart/form-data"} }).then((res2) => {        
                store.commit('auth/setUser',res2.data)
            })
        }
    })
    let fd = new FormData()
    fd.append("access_token",app.$cookies.get("access_token"))
    app.$axios.$post("/api/v1/access", fd, { headers:{"Content-Type":"multipart/form-data"} }).then((res) => {    
    
    }).catch(function (error) {
        return redirect('/login')
    });
    if (!id) {
        return redirect('/login')
    }
}