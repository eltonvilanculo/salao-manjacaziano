import React, { Component } from "react";
import { View, Text, Image ,StyleSheet,ScrollView,Dimensions} from "react-native";
import { Card, ListItem, Button, Icon,Avatar, Badge,  withBadge } from 'react-native-elements';
import Constants from 'expo-constants';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

const users = [

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



class ProfileActivity extends Component {
   

  render() {
    return (
     <ScrollView>
        <View style={styles.container}>


        <Card
  title='Luis Marquele'
  image={require('../assets/aio.jpg')}>
  <Text style={{marginBottom: 10}}>
    Funcionario do Manjacaziano e pronto a responder as necessidades dos clientes .
  </Text>
  <Button
    icon={<Icon name='code' color='#ffffff' />}
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='VIEW NOW' />
</Card>
      
<Card title="Resumo da semana">

<LineChart
              data={{
                labels: ['SEG', 'TER', 'QUA', 'QUI','SEX','SAB','DOM'],
                datasets: [
                  {
                    data: [
                   300 +   Math.random() * 100,
                   100 + Math.random() * 100,
                   400 + Math.random() * 100,
                   500 + Math.random() * 100,
                   100 + Math.random() * 100,
                   100 + Math.random() * 100,
                    ],
                  },
                ],
              }}
              width={350} // from react-native
              height={220}
          
              chartConfig={{
                backgroundColor: '#1cc910',
                backgroundGradientFrom: '#eff3ff',
                backgroundGradientTo: '#efefef',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />

</Card>

<Card title="Meus Clientes">

{
    users.map((l, i) => (
      <ListItem
        key={i}
        leftAvatar={{ source: require('../assets/aio.jpg') }}
        title={l.name}
        subtitle={l.subtitle}
        bottomDivider
      />
    ))
  }
</Card>

 



      
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

export default ProfileActivity;
