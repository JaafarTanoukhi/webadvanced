import { Route, Routes } from "react-router";
import Auth from "./Auth/Auth";
import { HashRouter } from "react-router-dom";
import AccountProvider from "./Providers/AccountProvider";
import Home from "./Home/Home";
import Account from "./Account/Account";
import Collection from "./Collection/Collection";

export default function App(){
    return (
        <>
        <HashRouter>
            <AccountProvider>
            <Routes>
            <Route path="/:page" element={<Home></Home>}></Route>
            <Route path="/Auth/:page" element={<Auth></Auth>}></Route>
            </Routes>
            </AccountProvider>
        </HashRouter>
        </>
    )
}