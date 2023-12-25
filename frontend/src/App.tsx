import { Route, Routes } from "react-router";
import Auth from "./Auth/Auth";
import { HashRouter } from "react-router-dom";

export default function App(){
    return (
        <>
        <HashRouter>
            <Routes>
            <Route path="/Auth/:page" element={<Auth></Auth>}></Route>
            </Routes>
        </HashRouter>
        </>
    )
}