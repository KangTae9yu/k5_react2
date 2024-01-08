import { useRef } from "react";

export default function LoginForm({onLogin}) {
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSignIn = () => {
        if (emailRef.current.value === '') {
            alert('이메일을 입력하세요.')
            emailRef.current.focus();
            return ;
        }
        if (passwordRef.current.value === '') {
            alert('비밀번호를 입력하세요.')
            passwordRef.current.focus();
            return ;
        }

        if (emailRef.current.value !== 'ao0316@naver.com') {
            alert('아이디가 존재하지 않습니다.');
            emailRef.current.focus();
            return;
        }

        if (passwordRef.current.value !== 'kang') {
            alert('비밀번호가 틀렸습니다.');
            passwordRef.current.focus();
            return ;
        }

        onLogin(emailRef.current.value) ;
         
    }

    return (
        <div className="flex flex-col justify-center items-center w-full h-full">
            <section className="dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-full lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" ref={emailRef}
                                            name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" ref={passwordRef}
                                            name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <button onClick={handleSignIn}
                                        className="w-full bg-blue-600 hover:bg-sky-400 text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Sign in</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
