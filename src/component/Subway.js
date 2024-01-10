import { useRecoilValue } from "recoil";
import { stLogin } from "./StAtom";
import SubwayInfo from "./SubwayInfo";
import Login from "./Login";

export default function Subway() {
    const isLogin = useRecoilValue(stLogin) ;
  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-indigo-200">
        {
            isLogin ? <SubwayInfo />
                    : <Login />
        }
      
    </div>
  )
}
