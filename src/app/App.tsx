import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router";
import CategoriesProducts from './[locale]/CategoriesProducts/page';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="collection" element={<CategoriesProducts />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
