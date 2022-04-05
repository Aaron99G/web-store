import React from 'react'

// import Products from './components/Products/Products'
// import Navbar from './components/Navbar/Navbar'

import {Products, Navbar} from './components/'
// That way we dont have to constantly import lie comment above

const App = () => {
    return ( 
    <div >
        <Navbar />
        <Products />
    </div>
    )
}

export default App;