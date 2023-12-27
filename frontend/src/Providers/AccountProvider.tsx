import { createContext, useContext, useEffect, useState } from "react";

const localStorageToken = "CURRENTACCOUNTTOKEN";

export type SignInCredentials = {
    username_email: string,
    password: string
}

export type RegisterCredentials = {
    firstname: string,
    lastname: string,
    birthdate: string,
    email: string,
    username: string,
    passsword: string
}

export type RecoverAccountCredentials = {
    recoverCode: string,
    newPassword: string
}

type AccountContextProvs = {
    RegisterAccount: (_: RegisterCredentials) => Promise<void>,
    SignIn: (_: SignInCredentials) => Promise<void>,
    SendRecoverEmail: (_: { email: string }) => Promise<Response>
    RecoverAccount: (_: RecoverAccountCredentials) => Promise<Response>
    currentAccountToken: string
}
const AccountContext = createContext<AccountContextProvs>({
    currentAccountToken: "",
    RegisterAccount: function (_: RegisterCredentials): Promise<void> {
        throw new Error("Function not implemented.");
    },
    SignIn: function (_: SignInCredentials): Promise<void> {
        throw new Error("Function not implemented.");
    },
    SendRecoverEmail: function (_: { email: string; }): Promise<Response> {
        throw new Error("Function not implemented.");
    },
    RecoverAccount: function (_: RecoverAccountCredentials): Promise<Response> {
        throw new Error("Function not implemented.");
    }
});

export function useAuth() {
    return useContext(AccountContext)
}

export default function AccountProvider({ children }: { children: any }) {
    const [currentAccountToken, setCurrentAccountToken] = useState<string>("");

    function setToken(newToken:string){
        setCurrentAccountToken(newToken);
        localStorage.setItem(localStorageToken,newToken);
    }

    async function SignIn(cred: SignInCredentials) {
        const response = await SignInToServer(cred);
        if (response.ok) setToken((await response.json()).id)
        setToken("");
    }

    async function RegisterAccount(cred:RegisterCredentials){
        const response=await CreateAccount(cred);
        if(response.ok) setToken((await response.json()).id)
        setToken("")
    }

    useEffect(() => {
        const currentAccountToken = localStorage.getItem(localStorageToken);
        if (currentAccountToken)
            setCurrentAccountToken(currentAccountToken);

    }, [])

    return (
        <AccountContext.Provider value={{ RegisterAccount: RegisterAccount, SignIn: SignIn, currentAccountToken: currentAccountToken, RecoverAccount: RecoverAccount,SendRecoverEmail:SendRecoverEmail }}>
            {children}
        </AccountContext.Provider>
    )
}

async function CreateAccount(cred: RegisterCredentials) {
    const response = await fetch(`${import.meta.env.VITE_SERVERURL}/register`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'post',
        body: JSON.stringify(cred),
        mode: 'cors'
    });

    return response;
}

async function RecoverAccount(cred: RecoverAccountCredentials) {
    const response = await fetch(`${import.meta.env.VITE_SERVERURL}/recover`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'post',
        body: JSON.stringify(cred),
        mode: 'cors'
    });

    return response;
}

async function SignInToServer(cred: SignInCredentials) {
    const response = await fetch(`${import.meta.env.VITE_SERVERURL}/login`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'post',
        body: JSON.stringify(cred),
        mode: 'cors'
    });

    return response;
}

async function SendRecoverEmail(cred:{email:string}){
    const response = await fetch(`${import.meta.env.VITE_SERVERURL}/sendrecoveremail`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'post',
        body: JSON.stringify(cred),
        mode: 'cors'
    });

    return response;
}