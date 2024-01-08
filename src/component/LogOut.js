import { Link } from "react-router-dom";

export default function LogOut({user, onLogout}) {  

  return (
    <div className="w-full h-full">
      <section className="flex flex-col justify-center items-center h-full dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-full lg:py-0">
                    <div className="bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Welcome
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div className="mx-auto my-5">
                                    {user} 님 반갑습니다.
                                </div>                                                             
                                <Link to='/' onClick={onLogout} className="w-full bg-blue-600 hover:bg-sky-400 text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Sign out</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}
