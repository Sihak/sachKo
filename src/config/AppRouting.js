import React from 'react';
import { createTabNavigator } from 'react-navigation';
import HomeScreen from '../app/home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HomeRouting } from './HomeRouting';

const activeColor = '#F15C53';
const color = '#373737';

export const AppRouting = createTabNavigator({
    Home: {
        screen: HomeRouting,
        navigationOptions: {
            title: 'Home',
            tabBarIcon: ({ focused }) => (
                focused ?
                    <Ionicons name="ios-home" size={24} iconStyle={{ paddingBottom: 0, paddingTop: 0 }} color={activeColor} /> :
                    <Ionicons name="ios-home-outline" size={24} iconStyle={{ paddingBottom: 0, paddingTop: 0 }} color={color} />
            ),
        }
    },
    Search: {
        screen: HomeScreen,

    },
    Notification: {
        screen: HomeScreen,

    },
    Order: {
        screen: HomeScreen,

    },
    Me: {
        screen: HomeScreen,

    }
}, {
        initialRouteName: 'Home',
        tabBarPosition: 'bottom',
        animationEnabled: true,
        lazy: true,
        tabBarOptions: {
            swipeEnabled: true,
            showLabel: true,
            showIcon: true,
            labelStyle: {
                fontSize: 12,
                fontWeight: '300'
            },
            activeTintColor: activeColor,
            style: {
                elevation: 0,
                borderTopWidth: 1,
                borderTopColor: '#F0F0F5',
                backgroundColor: '#fff',
                paddingTop: 5,
            },
            indicatorStyle: {
                backgroundColor: '#fff',
            },
        },
    })