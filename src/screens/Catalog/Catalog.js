import React from 'react';
import './style.css';
import {CatalogHeader, CatalogContent} from "./components";

export default function Catalog() {
    return (
        <div className={'Catalog'}>
            <CatalogHeader/>
            <CatalogContent/>
        </div>
    )
}
