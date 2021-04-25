export default function ({ store,$axios, $cookies }) {
    $axios.onRequest(config => {
        // console.log(config)
        // console.log('Making request to ' + config.url)
    })

    $axios.onError(error => {
        let id = $cookies.get("id")
        const code = parseInt(error.response && error.response.status)
        if (code === 401) {
            let fd = new FormData()
            fd.append("id",id)
            $axios.$post("/api/v1/refresh", fd, { headers:{"Content-Type":"multipart/form-data"} }).then((res) => {        
                store.commit('auth/setUser',res.data)
            })
        }

    })
}