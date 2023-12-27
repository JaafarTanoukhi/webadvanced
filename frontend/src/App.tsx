import { Route, Routes } from "react-router";
import Auth from "./Auth/Auth";
import { HashRouter } from "react-router-dom";
import AccountProvider from "./Providers/AccountProvider";

export default function App(){
    return (
        <>
        <HashRouter>
            <AccountProvider>
            <Routes>
            <Route path="/Auth/:page" element={<Auth></Auth>}></Route>
            </Routes>
            </AccountProvider>
        </HashRouter>
        </>
    )
}