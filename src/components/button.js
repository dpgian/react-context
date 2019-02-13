import React from 'react'
import LanguageContext from '../contexts/languageContext'
import ColorContext from '../contexts/colorContext'

class Button extends React.Component {
    renderButton(color) {
        return (
            <button className={`ui button ${color}`}>
                        <LanguageContext.Consumer>
                            {({ language }) => language === 'english' ? 'Submit' : 'Invia'}
                        </LanguageContext.Consumer>
                    </button>
        )
    }

    render() {
        return (
            <ColorContext.Consumer>
                {(color) => this.renderButton(color)}
            </ColorContext.Consumer>
        )
    }
}

export default Button