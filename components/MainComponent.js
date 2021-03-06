import React, { Component } from 'react';
import Menu from './MenuComponent';
import DetailDish from './DetailDishComponent';
import { DISHES } from '../shared/dishes';
import { View } from 'react-native';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null,
    }
  }

  onDishSelect = (dishId) => {
    this.setState({selectedDish: dishId})
  }

  render() {
    return (
      <View>
        <Menu 
        dishes={this.state.dishes} 
        onPress={(dishId) => this.onDishSelect(dishId)}
        />
        <DetailDish
          dish={this.state.dishes.filter(item => item.id === this.state.selectedDish)[0]}
        />
      </View>
    );
  }
}

export default Main;
