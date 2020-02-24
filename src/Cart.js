import React from 'react'
import Summary from "./Summary";
import Total from "./Total";

class Cart extends React.Component {
    render() {
        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];
            return (
                <Summary
                    id={featureHash}
                    feature={feature}
                    selected={selectedOption}
                    format={this.props.format}
                />
            );
        });
        const total = Object.keys(this.props.selected).reduce(
            (acc, curr) => acc + this.props.selected[curr].cost,
            0
        );
        return(
            <section className="main__summary">
                <h2>Your cart</h2>
                {summary}
                <Total total={total} format={this.props.format}/>
            </section>
        )
    }
}
export default Cart