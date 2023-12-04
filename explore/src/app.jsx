import React from 'react'
import Nav from './components/nav/nav.jsx'
import Header from './components/header/header.jsx'
import About from './components/about/about.jsx'
import Contact from './components/contact/contact.jsx'
import Travel from './components/travel/travel.jsx'
import Featured from './components/Featured/Featured.jsx'
import Footer from './components/footer/footer.jsx'


const App = () => {
    return (
        <>
        <Nav></Nav>
        <Header></Header>
        <About></About>
        <Travel></Travel>
        <Featured></Featured>
        <Contact></Contact>
        <Footer></Footer>
        </>
    )
}

export default App;