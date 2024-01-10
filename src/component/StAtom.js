import { atom } from "recoil";

export const stLogin = atom({   // 상태 관리 변수
    key : 'stLogin' ,   // 변수명은 유일해야함. 중복 X
    default : false
})