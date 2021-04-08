import React from 'react';
import { ViewStyle, StyleProp } from 'react-native';
export declare type iconType = 'feather' | 'material-community' | 'ionicon' | 'simple-line-icon' | 'material' | 'zocial' | 'font-awesome-5' | 'font-awesome' | 'octicon' | 'foundation' | 'evilicon' | 'entypo' | 'antdesign' | string;
export declare type colorProps = {
    color: string;
    offset: string;
    opacity: string;
};
export declare type IconProps = {
    mode?: 'linear' | 'radial';
    name?: string;
    type?: iconType;
    size?: number;
    start?: {
        x: number;
        y: number;
    };
    end?: {
        x: number;
        y: number;
    };
    colors?: colorProps[];
    innerRing?: {
        x: number;
        y: number;
    };
    outterRing?: {
        x: number;
        y: number;
    };
    style?: StyleProp<ViewStyle>;
    color?: string;
    raised?: boolean;
    raisedColor?: string;
};
declare const Icon: React.FunctionComponent<IconProps>;
export { Icon };
