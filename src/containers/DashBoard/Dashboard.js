
import React, { useState } from 'react';
import '../Headers/Header.css'
import Header from "../Headers/Header";
import PageRoutes from './PageRoutes';
import { SelectedContext } from '../../context/SelectedContext';

export default function Dashboard() {
    const [selected, setSelected] = useState([])

    return (
        <React.Fragment>

            <div className='header'>
                <Header />
            </div>
            <div className="Product">
                <SelectedContext.Provider value={{selected, setSelected}}>
                    <PageRoutes />
                </SelectedContext.Provider>
            </div>

        </React.Fragment>

    )

}