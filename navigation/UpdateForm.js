import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { addToDo, getTodo, removeAll, removeTodpo, updateTodo } from '../redux/createTodos'
import { useDispatch, useSelector } from 'react-redux'
import { Pressable } from 'react-native'
const UpdateForm = () => {
    const dispath = useDispatch()
    const nav = useNavigation()
    const rou = useRoute()
    const todos = useSelector(state => state.todos.todos)
    const handleupdate = async (index1, name1) => {
        dispath(updateTodo({ id: index1, name: name1 }))
        const dataa = todos.map((item, index) => {
            if (item.id == index1) {
                console.log({ ...item, name: name1 });
                return { ...item, name: name1 };
            }
            return item;
        })
        await fetch(`https://65474b9e902874dff3ac2238.mockapi.io/news/${rou.params?.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    createdAt: [
                        ...dataa,
                    ]
                })
        });
        nav.navigate('lauout1')
    }
    return (
        <View>
            <Pressable onPress={() => handleupdate(2, 'anh')}>
                <Text>UpdateForm</Text>
            </Pressable>
        </View>
    )
}

export default UpdateForm

const styles = StyleSheet.create({})