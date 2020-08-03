import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements'

function RenderDish (props) {
    const dish = props.dish;

    if(dish != null) {
        return (
            <Card
                featuredTitle={dish.name}
                image={require('./images/buffet.png')}
            >
                <Text>
                    {dish.description}
                </Text>
            </Card>
        );
    }
    else {
        return (
            <View></View>
        )
    }
}

function DetailDish (props) {
    return (
        <RenderDish dish={props.dish} />
    );
}

export default DetailDish;