enum Endpoints {
    signIn = 'auth/signin',
    signUp = 'auth/signup',
    users = 'user/',
    columns = 'column/',
    tasks = 'task/',
}

enum Methods {
    get = 'GET',
    post = 'POST',
    patch = 'PATCH',
    put = 'PUT',
    delete = 'DELETE',
}

export { Endpoints, Methods };
