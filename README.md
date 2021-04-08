## react-native-gradient-icon

<br />
<img src="https://github.com/venishpatidar/react-native-gradient-icon/blob/master/screenshot/visual.jpg?raw=true" width="360">

React native gradient icon provides icon having gradient fill, which can be either linear or radial, it also supports single color.

## Install

Npm
```shell
npm i --save react-native-gradient-icon
```

Yarn
```shell
yarn add react-native-gradient-icon
```
Don't forget to install dependencies
Npm
```shell
npm i --save @react-native-community/masked-view react-native-svg react-native-vector-icons
```
Yarn
```shell
yarn add @react-native-community/masked-view react-native-svg react-native-vector-icons
```



## Import
```jsx
import { Icon } from 'react-native-gradient-icon';
```

## Usage
Single Color
```jsx
import { Icon } from 'react-native-gradient-icon';
    <Icon  
        size={50}
        color="black"
        name="github" type="antdesgin" />  
```
Linear Gradient
```jsx
import { Icon } from 'react-native-gradient-icon';
    <Icon  
        size={50}
        colors={[
            {color:"gold",offset:"0",opacity:"1"},
            {color:"red",offset:"1",opacity:"1"},
        ]}
        name="font-awesome-5" type="fire-alt" />  
```
Radial Gradient
```jsx
import { Icon } from 'react-native-gradient-icon';
    <Icon  
        size={50}
        mode='radial'
        colors={[
            {color:"red",offset:"0",opacity:"1"},
            {color:"black",offset:"1",opacity:"1"},
        ]}
        name='font-awesome' type='heart' />  
```
Raised
```jsx
import { Icon } from 'react-native-gradient-icon';
    <Icon  
        raised
        color="#1c7801"
        name="tree" type="font-awesome-5" /> 
```
## Icon types
<ul>
<li>feather</li>
<li>zocial</li>
<li>octicon</li>
<li>material</li>
<li>material-community</li>
<li>ionicon</li>
<li>foundation</li>
<li>evilicon</li>
<li>entypo</li>
<li>font-awesome</li>
<li>font-awesome-5</li>
<li>simple-line-icon</li>
<li>antdesign</li>
<li>fontisto</li>
</ul>

Browse all icons [here](https://oblador.github.io/react-native-vector-icons/) .

## Props
| Prop        | Type                                                                                           | Optional | Default                                                                                       | Description                                                                                                                                                                                                                                                                                             |
|-------------|------------------------------------------------------------------------------------------------|----------|-----------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| style       | [style](http://facebook.github.io/react-native/docs/view.html#style)                           | yes      | none                                                                                          | For styling.                                                                                                                                                                                                                                                                                            |
| mode        | linear \| radial                                                                               | yes      | linear                                                                                        | mode of gradient default linear.                                                                                                                                                                                                                                                                        |
| type        | string                                                                                         | no       | feather                                                                                       | type of icon.                                                                                                                                                                                                                                                                                           |
| name        | string                                                                                         | no       | feather                                                                                       | name of icon.                                                                                                                                                                                                                                                                                           |
| size        | number                                                                                         | yes      | 24                                                                                            | size of icon.                                                                                                                                                                                                                                                                                           |
| color       | string                                                                                         | yes      | none                                                                                          | single color of icon.                                                                                                                                                                                                                                                                                   |
| colors      | array of <br>`{` <br>`color:string,`<br> `offset:string,`<br>`opacity:string`<br> `}`          | yes      | [<br>`{`<br>`color:"gold",`<br>`offset:"0",`<br>`opacity:"1"`<br>`}`,<br> `{`<br>`color:"red",`<br>`offset:"1",`<br>`opacity:"1"`<br>`}`<br>] | array of gradient of color for linear or radial gradient both, <br>`color` is the color of respective gradient, takes all color strings,<br>`offset` defines the the offset of of corresponding color it ranges between 0 to 1,<br>`opacity` is the opacity of corresponding color, it ranges between 0 to 1. |
| start       | object `{x:number, y:number}`                                                                  | yes      | `{x:0,y:0}`                                                                                   | works only in 'linear' mode, it is starting position of gradient.                                                                                                                                                                                                                                       |
| end         | object `{x:number, y:number}`                                                                  | yes      | `{x:1,y:0}`                                                                                   | works only in 'linear' mode, it is end position of gradient.                                                                                                                                                                                                                                            |
| innerRing   | object `{x:number, y:number}`                                                                  | yes      | `{x:size/2,y: size/2}`                                                                        | works only in 'radial' mode, it is position of inner ring.                                                                                                                                                                                                                                              |
| outterRing  | object `{x:number, y:number}`                                                                  | yes      | `{x:size/2, y:size/2}`                                                                        | works only in 'radial' mode, it is position of outer ring.                                                                                                                                                                                                                                              |
| raised      | boolean                                                                                        | yes      | false                                                                                         | for applying raised effect.                                                                                                                                                                                                                                                                             |
| raisedColor | string                                                                                         | yes      | white                                                                                         | background color of raised effect, works only when raised is true.                                                                                                                                                                                                                                      |
<br/>


---

**MIT Licensed**
