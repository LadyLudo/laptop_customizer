import React from 'react'
import slugify from "slugify";
import FeatureItem from "./FeatureItem";

class ComputerComponent extends React.Component {
    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = this.props.features[feature].map(item => {
                const itemHash = slugify(JSON.stringify(item));
                return (
                    <FeatureItem
                        id={itemHash}
                        update={this.props.update}
                        item={item}
                        feature={feature}
                        format={this.props.format}
                        selected={this.props.selected}
                    />
                );
            });
            return (
                <fieldset className="feature" key={featureHash}>
                    <legend className="feature__name">
                        <h3>{feature}</h3>
                    </legend>
                    {options}
                </fieldset>
            );
        });

        return (
            <div>
                {features}
            </div>
        )
    }
}
export default ComputerComponent