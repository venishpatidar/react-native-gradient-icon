import React from 'react';
import {
  Platform,
  View,
  StyleSheet,
  ViewStyle,
  StyleProp,
} from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view'
import Svg, { Defs,RadialGradient,Stop,LinearGradient, Rect } from 'react-native-svg';

export type iconType =
    | 'feather'
    | 'material-community'
    | 'ionicon'
    | 'simple-line-icon'
    | 'material'
    | 'zocial'
    | 'font-awesome-5'
    | 'font-awesome'
    | 'octicon'
    | 'foundation'
    | 'evilicon'
    | 'entypo'
    | 'antdesign'
| string;

const iconTypes:object={
    'antdesign':require('react-native-vector-icons/AntDesign').default,
    'entypo':require('react-native-vector-icons/Entypo').default,
    'evilicon':require('react-native-vector-icons/EvilIcons').default,
    'feather':require('react-native-vector-icons/Feather').default,
    'font-awesome':require('react-native-vector-icons/FontAwesome').default,
    'font-awesome-5':require('react-native-vector-icons/FontAwesome5').default,
    'fontisto':require('react-native-vector-icons/Fontisto').default,
    'foundation':require('react-native-vector-icons/Foundation').default,
    'ionicon':require('react-native-vector-icons/Ionicons').default,
    'material':require('react-native-vector-icons/MaterialIcons').default,
    'material-community':require('react-native-vector-icons/MaterialCommunityIcons').default,
    'octicon':require('react-native-vector-icons/Octicons').default,
    'zocial':require('react-native-vector-icons/Zocial').default,
    'simple-line-icon':require('react-native-vector-icons/SimpleLineIcons').default,
}

export type colorProps = {
    color:string;
    offset:string;
    opacity:string;
}

export type IconProps =   {
    mode?:'linear'|'radial';
    name?:string;
    type?:iconType;
    size?:number;
    start?:{x:number, y:number};
    end?:{x:number, y:number};
    colors?:colorProps[];
    innerRing?:{x:number,y: number};
    outterRing?:{x:number, y:number};
    style?: StyleProp<ViewStyle>;
    color?:string;
    raised?: boolean;
    raisedColor?:string;
    androidRenderingMode?:'software'|'hardware';
};
const Icon: React.FunctionComponent<IconProps> = (props) => {
    const {
        mode='linear',
        androidRenderingMode='software',
        type,
        name,
        size=24,
        start={x:0,y:0},
        end={x:1,y:0},
        colors=[
            {color:"gold",offset:"0",opacity:"1"},
            {color:"red",offset:"1",opacity:"1"},
        ],
        color,
        raised=false,
        raisedColor="white",
        innerRing={x:size/2,y: size/2},
        outterRing={x:size/2, y:size/2},
        style

    } = props;
    const IconComponent  =  Object.prototype.hasOwnProperty.call(iconTypes, type)?iconTypes[type]:iconTypes['feather'];
    return(
        <View style={StyleSheet.flatten([
            {
                alignSelf:'flex-start',
            },
            style,
            raised && { 
                backgroundColor:raisedColor,
                padding:size/2.5, 
                borderRadius:size,
            },
            raised && styles.raised,
            ])}>
            <MaskedView 
                androidRenderingMode={androidRenderingMode}
                style={{ height:size,width:size }}
                maskElement={
                    <View style={{width:size,height:size,alignItems:'center'}}>
                        <IconComponent name={name} type={type} size={size} />
                    </View>
                    }>
                    <View style={{ flex: 1, height: size,width:size, backgroundColor: 'transparent' }} >
                        <Svg height={size} width={size}>
                            {mode ==='linear'?
                                <Defs>
                                    <LinearGradient 
                                        id="Grad" x1={start.x} y1={start.y} x2={end.x} y2={end.y}>
                                        
                                        {color?
                                            <Stop offset='0' stopColor={color} stopOpacity='1' />
                                            :
                                            colors.map((data:colorProps,index:number) =>{
                                                return (
                                                    <Stop key={index} offset={data.offset} stopColor={data.color} stopOpacity={data.opacity} />
                                                )
                                        })}
                                    </LinearGradient>
                                </Defs>
                                :
                                <Defs>
                                    <RadialGradient
                                        id="Grad"
                                        cx={innerRing.x}
                                        cy={innerRing.y}
                                        rx={outterRing.x}
                                        ry={outterRing.y}
                                        fx={innerRing.x}
                                        fy={innerRing.y}
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        {color?
                                            <Stop offset='0' stopColor={color} stopOpacity='1' />
                                            :
                                            colors.map((data:colorProps,index:number) =>{
                                                return (
                                                    <Stop key={index} offset={data.offset} stopColor={data.color} stopOpacity={data.opacity} />
                                                )
                                        })}
                                    </RadialGradient>
                                </Defs>
                            }
                            <Rect x="0" y="0" width="100%" height="100%" fill="url(#Grad)" />
                        </Svg>
                    </View>
            </MaskedView>
        </View>
    )
}
const styles = StyleSheet.create({
    raised: {
        ...Platform.select({
            android: {
                elevation: 2,
            },
            default: {
                shadowColor:'black',
                shadowOffset:{width:1,height:1},
                shadowOpacity: 0.4,
                shadowRadius: 1,
            },
        }),
    },
})

export {Icon};