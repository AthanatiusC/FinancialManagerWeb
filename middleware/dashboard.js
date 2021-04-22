export default function ({app, redirect }) {
// If the user is authenticated
    let fd = new FormData()
    fd.append("access_token",app.$cookies.get("access_token"))
    app.$axios.$post("/api/v1/access", fd, { headers:{"Content-Type":"multipart/form-data"} }).then((res) => {
        return redirect('/dashboard/home')
    }).catch(function (error) {

    });
    // if (app.$cookies.get('id')) {
    //     return redirect('/dashboard/home')
    // }
}