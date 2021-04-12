export default function ({app, redirect }) {
// If the user is authenticated
    if (app.$cookies.get('id')) {
        return redirect('/dashboard/home')
    }
}