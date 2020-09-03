import React from "react";
import ItemProduct from "./itemProduct";

export default function ListLaptop() {
    return (
        <>
            <section id="laptop" className="container-fluid pt-5 pb-5 bg-light text-dark">
                <h1 className="text-center">BEST LAPTOP</h1>
                <div className="row">
                    {ItemProduct("./img/lt_macbook.png", "MACBOOK", "The MacBook is a brand of notebook computers manufactured by Apple Inc")}
                    {ItemProduct("./img/lt_rog.png", "ASUS ROG", "the Asus ROG Strix Flare is the latest addition to Asus' lineup of ROG branded devices")}
                    {ItemProduct("./img/lt_hp.png", "HP OMEN", "A young global smartphone brand focusing on introducing perfect sound quality")}
                    {ItemProduct("./img/lt_lenovo.png", "LENOVO THINKPAD", "The ThinkPad X1 Carbon is a high-end notebook computer released by Lenovo in 2012")}
                </div>
            </section>
        </>
    );
}