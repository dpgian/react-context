import React from 'react'
import UserCreate from './userCreate'
import { LanguageStore } from '../contexts/languageContext'
import ColorContext from '../contexts/colorContext'
import LangugageSelector from './languageSelector'


class App extends React.Component {
    render() {
        return (
            <div className='ui container'>
                <LanguageStore>
                    <LangugageSelector />
                
                    <ColorContext.Provider value={'red'}>
                            <UserCreate />             
                    </ColorContext.Provider>
                </LanguageStore>
            </div>
        )
    }
}

export default App