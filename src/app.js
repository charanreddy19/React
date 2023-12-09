import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import ResContainer from "./components/Container";
import FooterComponent from "./components/Footer";

const AppLayout = () => (
    <div className="app">
        <HeaderComponent/>
        <ResContainer/>
        <FooterComponent/>
    </div>
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(AppLayout());
