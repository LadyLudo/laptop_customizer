import React from 'react'
import ComputerComponent from "./ComputerComponent";

class Customizer extends React.Component {
    render() {
        return(
            <form className="main__form">
                <h2>Customize your laptop</h2>
                <ComputerComponent
                    features={this.props.features}
                    selected={this.props.selected}
                    update={this.props.update}
                    format={this.props.format}
                />
            </form>
        )
    }
}
export default Customizer