import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { Pressable } from 'react-native'
import { addToDo } from '../redux/createTodos'
const Navigation1 = () => {
    const dispath = useDispatch()
    const navi = useNavigation()
    const rou = useRoute()
    const todos = useSelector(state => state.todos.todos)
    const handle = async () => {
        // setRender(!render)

        dispath(addToDo({ name: 'toan2' }))
        await fetch(`https://65474b9e902874dff3ac2238.mockapi.io/news/${rou.params?.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                { createdAt: [...todos, { name: 'toan2' }] })
        })
        navi.navigate('lauout1')
    }
    return (
        <View>
            <Pressable onPress={() => handle()}>
                <Text>clcikToAdd</Text>
            </Pressable>
        </View>
    )
}

export default Navigation1

const styles = StyleSheet.create({})