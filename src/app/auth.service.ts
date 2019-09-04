

export class AuthService {
    isLogin: boolean = false;

    isAuthenticated() {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.isLogin)
            }, 800)
        })
        return promise;
    }

    login() {
        this.isLogin = true;
    }
    logout() {
        this.isLogin = false;
    }

}