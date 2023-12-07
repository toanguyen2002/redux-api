import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { createStackNavigator } from '@react-navigation/stack'
import Navigation from './Navigation'
import Navigation1 from './Navigation1'
import Layouttart from './Layouttart'
import UpdateForm from './UpdateForm'

const Container = () => {
    const Stack = createStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen component={Layouttart} name='lauout' />
                <Stack.Screen component={Navigation} name='lauout1' />
                <Stack.Screen component={Navigation1} name='lauout2' />
                <Stack.Screen component={UpdateForm} name='updateform' />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Container

const styles = StyleSheet.create({})