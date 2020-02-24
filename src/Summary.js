import React from 'react'

class Summary extends React.Component {
    render() {
        return(
            <div className="summary__option" key={this.props.id}>
                <div className="summary__option__label">{this.props.feature} </div>
                <div className="summary__option__value">{this.props.selected.name}</div>
                <div className="summary__option__cost">
                    {this.props.format.format(this.props.selected.cost)}
                </div>
            </div>
        )
    }
}
export default Summary