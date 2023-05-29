import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dashboard";

function RoutesComponents () {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    )
}

export {RoutesComponents}