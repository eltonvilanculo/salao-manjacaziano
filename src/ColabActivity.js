import React, { Component } from "react";
import { View, Button, StyleSheet, Text, FlatList,ScrollView,SafeAreaView ,TouchableOpacity} from "react-native";

import Constants from 'expo-constants';
import { ListItem } from 'react-native-elements'


const list = [

  {
    name: 'Luis Mariquele',
   
    subtitle: 'CO-Admin'
  },
  {
    name: 'Luis Mariquele',
    source: require('../assets/aio.jpg'),
    subtitle: 'CO-Admin'
  },
  {
    name: 'Luis Mariquele',
    source: require('../assets/aio.jpg'),
    subtitle: 'CO-Admin'
  },
  {
    name: 'Luis Mariquele',
    source: require('../assets/aio.jpg'),
    subtitle: 'CO-Admin'
  },
  {
    name: 'Luis Mariquele',
    source: require('../assets/aio.jpg'),
    subtitle: 'CO-Admin'
  },
  
]
// criei um componente que sera reutilizado!
// function Item({ id, title, selected, onSelect}) {
//   return (
//     <View style={styles.item}>

// <TouchableOpacity
//       onPress={() => onSelect(id)}
//       style={[
//         styles.item,
//         { backgroundColor: selected ? '#6e3b6e' : '#f9c2ff' },
//       ]}
//     >
//           <Text >IMG</Text>
//       <Text style={styles.title}>{title}</Text>
//     </TouchableOpacity>
   
//     </View>
//   );
// }


class ColabActivity extends Component {
   

  render() {
    return (
     <ScrollView>
        <View style={styles.container}>
   
        <View>
  {
    list.map((l, i) => (
      <ListItem
        key={i}
        leftAvatar={{ source: { uri: l.avatar_url } }}
        title={l.name}
        subtitle={l.subtitle}
        bottomDivider
      />
    ))
  }
</View>
        
      
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  title: {
    
  },
});

export default ColabActivity;
