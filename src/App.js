import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Home from './pages/Home';
import NewNotePage from './pages/NewNotePage';
import Layout from "./pages/Layout";
import ViewNote from "./pages/ViewNote";
import EditNote from "./pages/EditNote";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>

                        <Route index element={<Home />} />
                        
                        <Route path="/note/:id" element={<ViewNote />} />
                            <Route path="/newnote" element={<NewNotePage />} />
                            <Route path="/edit/:id" element={<EditNote />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
         
    )
}

export default App