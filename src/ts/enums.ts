enum Endpoints {
    signIn = 'auth/signin',
    signUp = 'auth/signup',
    users = 'user',
    columns = 'columns/',
    columnsSet = 'columnsSet/',
    tasks = 'tasks/',
    tasksSet = 'tasksSet/',
}

enum Methods {
    get = 'GET',
    post = 'POST',
    patch = 'PATCH',
    put = 'PUT',
    delete = 'DELETE',
}

export { Endpoints, Methods };
