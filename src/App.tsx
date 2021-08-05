import React from 'react';
import { useState } from 'react'
import Header from './Header';
import Todo from './Todo';
import Footer from './Footer';
function App() {
    return (
        <div>
            <Header firstname="Baangkok" lastname="Vanijyananda" student_id={630610746} ></Header>

            <Todo/>

            <Footer copyrightText="Copyright © 2021 Minimal todo list by Baangkok Vanijyananda"></Footer>
        </div>
    );
}

export default App;
