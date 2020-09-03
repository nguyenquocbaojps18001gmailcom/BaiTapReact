import React from "react";
import ItemProduct from "./itemProduct"

export default function ListSmartPhone() {
    return (
        <>
            <section id="smartphone" className="container-fluid pt-5 pb-5">
                <h1 className="text-white text-center">BEST SMARTPHONE</h1>
                <div className="row">
                    {ItemProduct("./img/sp_iphoneX.png", "iPhone X", "iPhone X features a new all-screen design. Face ID, which makes your face your password")}
                    {ItemProduct("./img/sp_note7.png", "Galaxy Note7", "The Galaxy Note7 comes with a perfectly symmetrical design for good reason")}
                    {ItemProduct("./img/sp_vivo850.png", "Vivo", "A young global smartphone brand focusing on introducing perfect sound quality")}
                    {ItemProduct("./img/sp_blackberry.png", "Blackberry", "BlackBerry is a line of smartphones, tablets, and services originally designed")}
                </div>
            </section>
        </>
    );
}