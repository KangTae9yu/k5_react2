import { useRecoilState} from "recoil";
import { stLogin } from "./StAtom";
import LoginForm from "./LoginForm";
import LogOut from "./LogOut";

import { useEffect, useState } from "react";
;
export default function Login() {
    const [user, setUser] = useState();
    const [isLogin, setIsLogin] = useRecoilState(stLogin) ;

    const handleLogin = (userIn) => {
        localStorage.setItem('user', userIn);
        setUser(userIn) ;
        
        setIsLogin(true);
    }

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null) ;

        setIsLogin(false);
    }


    useEffect(() => {
        const tmUser = localStorage.getItem('user') ;

        if (tmUser) {
            setUser(tmUser) ;
            setIsLogin(true);
        }
        else setIsLogin(false);


        /*console.log('useEffect');
        // localStorage.setItem('user','ao0316@naver.com')
        localStorage.removeItem('user')
        const tm = localStorage.getItem('user')
        console.log(tm)*/
    }, []);
    return (
        <div className="flex flex-col justify-center items-center w-full h-full ">
            { user ? <LogOut user={user} onLogout={handleLogout} />
                    : <LoginForm onLogin={handleLogin} />}
            {/* <LoginForm /> */}
            {/* <LogOut /> */}
        </div>
    )
}
