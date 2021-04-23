import { Form } from "element-ui"

export default function ({app, redirect }) {
// If the user is not authenticated
    let id = app.$cookies.get('id')
    let fd = new FormData()
    app.$axios.setHeader("user_id",id)
    fd.append("access_token",app.$cookies.get("access_token"))
    app.$axios.$post("/api/v1/access", fd, { headers:{"Content-Type":"multipart/form-data"} }).then((res) => {    
    
    }).catch(function (error) {
        return redirect('/login')
    });
    // if (!id) {
    //     return redirect('/login')
    // }
}