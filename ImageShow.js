import React, { Component } from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Animated,   //使用Animated组件
    Easing,     //引入Easing渐变函数
} from 'react-native';

export default class ImageShow extends Component {
    constructor(props) {
        super(props);
        //使用Animated.Value设定初始化值（缩放度，角度等等）
        this.state = {
            bounceValue: new Animated.Value(1), //你可以改变这个值看看效果是什么
            rotateValue: new Animated.Value(0),//旋转角度的初始值
        };
    }
 
    componentDidMount() {
        //在初始化渲染执行之后立刻调用动画执行函数
        this.startAnimation();
    }
 
    startAnimation() {
        this.state.bounceValue.setValue(1);//和上面初始值一样，所以
//弹动没有变化
        this.state.rotateValue.setValue(0);
        Animated.parallel([
            //通过Animated.spring等函数设定动画参数
            //可选的基本动画类型: spring, decay, timing
            Animated.spring(this.state.bounceValue, {
                toValue: 1,      //变化目标值，也没有变化
                friction: 20,    //friction 摩擦系数，默认40
            }),
            Animated.timing(this.state.rotateValue, {
                toValue: 1,  //角度从0变1
                duration: 15000,  //从0到1的时间
                easing: Easing.out(Easing.linear),//线性变化，匀速旋转
            }),
            //调用start启动动画,start可以回调一个函数,从而实现动画循环
        ]).start(()=>this.startAnimation());
    }
      render() {
        let { fadeAnim } = this.state;
    
        return (
               //插入一张图片
            <Animated.Image source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544688258390&di=3bec0483b2dedc9cc6f4249b88fe642e&imgtype=0&src=http%3A%2F%2Fstatic.open-open.com%2Flib%2FuploadImg%2F20160117%2F20160117152222_31.png'}}
                            style={{width:100,height: 100,marginBottom: 50,borderRadius:50, //图片变园
                            transform: [
                            //将初始化值绑定到动画目标的style属性上
                            {scale: this.state.bounceValue},
                            //使用interpolate插值函数,实现了从数值单位的映
//射转换,上面角度从0到1，这里把它变成0-360的变化
                            {rotateZ: this.state.rotateValue.interpolate({
                            inputRange: [0,1],
                            outputRange: ['0deg', '360deg'],
                            })},
                            ]
            }}>
            </Animated.Image>
        );
      }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});