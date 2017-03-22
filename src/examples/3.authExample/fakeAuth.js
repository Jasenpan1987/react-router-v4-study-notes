// 用来模拟login，logout的模块

let isAuth = false;
export default {
    login(cb){
        isAuth = true;
        setTimeout(() => {
            cb(isAuth);
        }, 200); // 模拟异步延迟
    },
    logout(cb){
        isAuth = false;
        setTimeout(() => {
            cb(isAuth);
        }, 200);
    },
    getAuth(){
        return isAuth
    }
}