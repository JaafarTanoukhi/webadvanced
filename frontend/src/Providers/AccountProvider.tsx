import { createContext, useContext, useEffect, useState } from "react";

export type SignInCredentials={
    username_email:string,
    password:string
}

export type RegisterCredentials={
    firstname:string,
    lastname:string,
    birthdate:string,
    email:string,
    username:string,
    passsword:string
}

export type RecoverAccountCredentials={
    recoverCode:string,
    newPassword:string
}

type AccountContextProvs={
CreateAccount:(_:RegisterCredentials)=>Promise<number|undefined>,
SignIn:(_:SignInCredentials)=>Promise<string>,
SendRecoverEmail:(_:{email:string})=>Promise<Response>
RecoverAccount:(_:RecoverAccountCredentials)=>Promise<Response>
currentAccountToken:string
}
const AccountContext=createContext<AccountContextProvs>({
    currentAccountToken: "",
    CreateAccount: function (_: RegisterCredentials): Promise<number|undefined> {
        throw new Error("Function not implemented.");
    },
    SignIn: function (_: SignInCredentials): Promise<string> {
        throw new Error("Function not implemented.");
    },
    SendRecoverEmail: function (_: { email: string; }): Promise<Response> {
        throw new Error("Function not implemented.");
    },
    RecoverAccount: function (_: RecoverAccountCredentials): Promise<Response> {
        throw new Error("Function not implemented.");
    }
});

export function useAuth(){
    return useContext(AccountContext)
}

export default function AccountProvider({children}:{children:any}){
    const [currentAccountToken,setCurrentAccountToken]=useState<string>("");

    async function SignIn(cred:SignInCredentials){
        const response=await fetch(`${import.meta.env.VITE_SERVERURL}/login`,{
            headers:{
                "Content-Type":"application/json"
            },
            method:'post',
            body:JSON.stringify(cred),
            mode:'cors'
        });
        if(response) return (await response.json()).id
        return undefined;
    }

    useEffect(()=>{
        const currentAccountToken=localStorage.getItem('currentAccountToken')
    },[])

    return (
        <AccountContext.Provider value={{CreateAccount:CreateAccount,SignIn:SignIn,currentAccountToken:currentAccountToken}}>
            {children}
        </AccountContext.Provider>
    )
}

async function CreateAccount(cred:RegisterCredentials):Promise<number|undefined>{
    const response=await fetch(`${import.meta.env.VITE_SERVERURL}/register`,{
        headers:{
            "Content-Type":"application/json"
        },
        method:'post',
        body:JSON.stringify(cred),
        mode:'cors'
    });
    if(response) return (await response.json()).id
    return undefined;
}
