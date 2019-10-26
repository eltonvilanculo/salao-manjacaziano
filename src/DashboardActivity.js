import React, { Component } from "react";
import { View,
   Button, 
   StyleSheet, 
   Text,
   ActivityIndicator,
    ToastAndroid,
    ToolbarAndroid

} from "react-native";
import Dashboard from 'react-native-dashboard';
import {Header} from 'react-native-elements';


const items = [
    { name: 'Me', background: '#3498db', icon: 'user' },
    { name: 'Clientes', background: '#ef0202', icon: 'address-book' },
    { name: 'Dívidas', background: '#efcf02', icon: 'money' },
    { name: 'Colaboradores', background:'#02cbef', icon: 'users' },
    {name:'Cronograma',background:'#ef5802',icon:'calendar'},
    { name: 'Relatórios', background: '#ef5802', icon: 'signal' },
  ];

class DashboardActivity extends Component {
   
  state = { works: true };
  _card = el => {
    console.log('Card: ' + el.name)
    if(el.name=='Colaboradores'){
      this.props.navigation.navigate('colabactivity');
    }
    if(el.name == 'Me'){
    this.props.navigation.navigate('profileactivity');

    }
    if(el.name == 'Relatórios'){
      this.props.navigation.navigate('reportactivity');
    }
   

  };
  render() {
    return (
    
        <View style={styles.container}>
              <ToolbarAndroid
      // logo={require('./app_logo.png')}
      title="AwesomeApp"
      
      actions={[{title: 'Settings',  show: 'always'}]}
       />

        <Dashboard items={items} background={true} card={this._card} column={2} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  }
});

export default DashboardActivity;
