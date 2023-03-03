import React from 'react'
import './routing.css'
import { NavigationProvider } from './context/NavigationContext'
import SideBar from './components/sideBar'
import Route from './components/route'
import DropDown from './pages/DropDownPage'
import Accordion from './pages/AccordionPage'
import Buttons from './pages/ButtonPage'
import Modal from './pages/ModalPage'
import Table from './pages/TablePage'
import Counter from './pages/CounterPage'

const Routing = () => {
    return <NavigationProvider>
        <div className='container mx-auto grid grid-cols-6 gap-4 mt-4'>
            <SideBar />
            <div className='col-span-5'>
                <Route path="/"><Accordion /></Route>
                <Route path="/dropdown"><DropDown /></Route>
                <Route path="/buttons"><Buttons /></Route>
                <Route path="/modal"><Modal /></Route>
                <Route path="/table"><Table /></Route>
                <Route path="/counter"><Counter initialCount={10} /></Route>
            </div>
        </div>
    </NavigationProvider>
}

export default Routing