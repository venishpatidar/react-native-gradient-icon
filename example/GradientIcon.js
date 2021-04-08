import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Icon } from 'react-native-gradient-icon';
const {width,height} = Dimensions.get('screen')

const simple = [
  {type: 'feather',name: 'feather',color:'#FFD500'},
  {type: 'antdesgin',name: 'cloud',color:'#00FFF3'},
  {type: 'antdesgin',name: 'github',color:'#A9A9A9'},
  {type: 'entypo',name: 'clapperboard',color:'#2D6194'},
  {type: 'fontisto',name: 'bus-ticket',color:'#31DA1D'},
  {type: 'fontisto',name: 'bitcoin',color:'#1D45DA'},
  {type: 'entypo',name: 'app-store',color:'black'},
  {type: 'foundation',name: 'skull',color:'red'},
  {type: 'font-awesome-5',name: 'dharmachakra',color:'#06008A'},
  {type: 'font-awesome-5',name: 'cube',color:'#FE87FE'},
]
const LinearGradient = [
  {type: 'font-awesome-5',name: 'fire-alt',
    colors:[
      {color:"gold",offset:"0",opacity:"1"},
      {color:"red",offset:"1",opacity:"1"},
    ]
  },
      
  {type: 'font-awesome-5',name: 'flask',
    colors:[
      {color:"#CBB7D5",offset:"0",opacity:"1"},
      {color:"#6A3885",offset:"1",opacity:"1"},
    ]
  },
      
  {type: 'font-awesome-5',name: 'icicles',
    colors:[
      {color:"#66a9b7",offset:"0",opacity:"1"},
      {color:"#d1e5e9",offset:"1",opacity:"1"},
    ]
  },
      
  {type: 'font-awesome-5',name: 'thermometer',
    colors:[
      {color:"#fa3434",offset:"0",opacity:"1"},
      {color:"#7d1a1a",offset:"1",opacity:"1"},
    ]
  },
      
  {type: 'fontisto',name: 'battery-full',
    colors:[
      {color:"blue",offset:"0",opacity:"1"},
      {color:"red",offset:"1",opacity:"1"},
    ]
  },
  
      
  {type: 'font-awesome',name: 'eercast',
    colors:[
      {color:"#415d1c",offset:"0",opacity:"1"},
      {color:"#a8ce74",offset:"1",opacity:"1"},
    ]
  },
  {type: 'font-awesome-5',name: 'carrot',
    colors:[
      {color:"red",offset:"0",opacity:"1"},
      {color:"yellow",offset:"1",opacity:"1"},
    ]
  },
  {type: 'font-awesome',name: 'hand-scissors-o',
    colors:[
      {color:"grey",offset:"0",opacity:"1"},
      {color:"black",offset:"1",opacity:"1"},
    ]
  },
  {type: 'font-awesome-5',name: 'dungeon',
  colors:[
    {color:"#949043",offset:"0",opacity:"1"},
    {color:"#000000",offset:"1",opacity:"1"},
  ]
},
      
  {type: 'font-awesome-5',name: 'cubes',
    colors:[
      {color:"gold",offset:"0",opacity:"1"},
      {color:"red",offset:"1",opacity:"1"},
    ]
  },
      

]
const RadialGradient = [
  {type: 'font-awesome',name: 'group',
    colors:[
      {color:"gold",offset:"0",opacity:"1"},
      {color:"red",offset:"1",opacity:"1"},
    ]
  },
      
  
 
  {type: 'font-awesome',name: 'square',
    colors:[
      {color:"#fa3434",offset:"0",opacity:"1"},
      {color:"#7d1a1a",offset:"1",opacity:"1"},
    ]
  },
      
  {type: 'font-awesome',name: 'twitter-square',
    colors:[
      {color:"white",offset:"0",opacity:"1"},
      {color:"#1867A9",offset:"1",opacity:"1"},
    ]
  },
  {type: 'font-awesome-5',name: 'exclamation-circle',
    colors:[
      {color:"#CBB7D5",offset:"0",opacity:"1"},
      {color:"#6A3885",offset:"1",opacity:"1"},
    ]
  },
      
      
  {type: 'font-awesome',name: 'certificate',
    colors:[
      {color:"#dc93ec",offset:"0",opacity:"1"},
      {color:"#e6b2f2",offset:"1",opacity:"1"},
    ]
  },
  {type: 'font-awesome',name: 'star',
    colors:[
      {color:"white",offset:"0",opacity:"1"},
      {color:"gold",offset:"1",opacity:"1"},
    ]
  },
 

  
  {type: 'font-awesome-5',name: 'tint',
  colors:[
    {color:"#fa9090",offset:"0",opacity:"1"},
    {color:"red",offset:"1",opacity:"1"},
  ]
},
{type: 'font-awesome',name: 'heart',
colors:[
  {color:"red",offset:"0",opacity:"1"},
  {color:"black",offset:"1",opacity:"1"},
]
},
  {type: 'font-awesome-5',name: 'space-shuttle',
    colors:[
      {color:"gold",offset:"0",opacity:"1"},
      {color:"red",offset:"1",opacity:"1"},
    ]
  },
  
  {type: 'font-awesome-5',name: 'icicles',
  colors:[
    {color:"#66a9b7",offset:"0",opacity:"1"},
    {color:"#d1e5e9",offset:"1",opacity:"1"},
  ]
},
   
      

]
const Raised = [
  {type: 'font-awesome-5',name: 'child',raisedColors:"white",
    colors:[
      {color:"#fa3434",offset:"0",opacity:"1"},
      {color:"#7d1a1a",offset:"1",opacity:"1"},
    ]
  },
  {type: 'font-awesome-5',name: 'drupal',raisedColors:"black",
    colors:[
      {color:"gold",offset:"0",opacity:"1"},
      {color:"red",offset:"1",opacity:"1"},
    ]
  },
  {type: 'font-awesome',name: 'futbol-o',raisedColors:"blue",
    colors:[
      {color:"grey",offset:"0.5",opacity:"1"},
      {color:"black",offset:"1",opacity:"1"},
    ]
  },
  {type: 'font-awesome-5',name: 'tree',raisedColors:"white",
    colors:[
      {color:"#1c7801",offset:"0",opacity:"1"},
      {color:"#0e3c01",offset:"1",opacity:"1"},
    ]
  },
  {type: 'font-awesome-5',name: 'bomb',raisedColors:"orange",
    colors:[
      {color:"#CBB7D5",offset:"0",opacity:"1"},
      {color:"#6A3885",offset:"1",opacity:"1"},
    ]
  },
]
const size = 50;
export class GradIcon extends Component{
  render(){   
    return(
      <ScrollView style={{flex:1,backgroundColor:'#fafafa',paddingHorizontal:0,paddingTop:StatusBar.currentHeight+20}}>
          <SafeAreaView/>
          <View style={{marginTop:20,borderBottomWidth:0.4,marginHorizontal:20}}>
            <Text style={{fontSize:width/20,textAlign:'left'}}>Single Color</Text>
          </View>
          <View style={{marginVertical:10,flexDirection:'row',flexWrap:'wrap',justifyContent:'space-around'}}>
            {simple.map((data,index)=>{
              return(
                <Icon  
                  key={index} 
                  size={size}
                  style={{paddingHorizontal:10,paddingVertical:10}}
                  color={data.color}
                  name={data.name} type={data.type} />  
              )
            })}
          </View>
          <View style={{marginTop:20,borderBottomWidth:0.4,marginHorizontal:20}}>
            <Text style={{fontSize:width/20,textAlign:'left'}}>Linear Gradient</Text>
          </View>
          <View style={{marginVertical:10,flexDirection:'row',flexWrap:'wrap',justifyContent:'space-around'}}>
            {LinearGradient.map((data,index)=>{
              return(
                <Icon  
                  key={index} 
                  size={size}
                  style={{paddingHorizontal:10,paddingVertical:10}}
                  colors={data.colors}
                  name={data.name} type={data.type} />  
              )
            })}
          </View>
          <View style={{marginTop:20,borderBottomWidth:0.4,marginHorizontal:20}}>
            <Text style={{fontSize:width/20,textAlign:'left'}}>Radial Gradient</Text>
          </View>
          <View style={{marginVertical:10,flexDirection:'row',flexWrap:'wrap',justifyContent:'space-around'}}>
            {RadialGradient.map((data,index)=>{
              return(
                <Icon  
                  key={index} 
                  size={size}
                  mode='radial'
                  style={{paddingHorizontal:10,paddingVertical:10}}
                  colors={data.colors}
                  name={data.name} type={data.type} />  
              )
            })}
          </View>
          <View style={{marginTop:20,borderBottomWidth:0.4,marginHorizontal:20}}>
            <Text style={{fontSize:width/20,textAlign:'left'}}>Raised</Text>
          </View>
          <View style={{marginVertical:10,flexDirection:'row',flexWrap:'wrap',justifyContent:'space-around'}}>
            {Raised.map((data,index)=>{
              return(
                <Icon  
                  key={index} 
                  size={size/1.5}
                  mode='radial'
                  raised
                  raisedColor={data.raisedColors}
                  colors={data.colors}
                  name={data.name} type={data.type} />  
              )
            })}
          </View>
      </ScrollView>
    )
  }
}
