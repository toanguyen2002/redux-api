import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToDo, getTodo, removeAll, removeTodpo, updateTodo } from '../redux/createTodos'

import { Pressable } from 'react-native'
import axios from 'axios'
import { render } from 'react-dom'
import { useNavigation, useRoute } from '@react-navigation/native'

const Navigation = () => {
    var todos = useSelector(state => state.todos.todos)
    const [data, setData] = useState([])
    const [render, setRender] = useState(true)
    const dispath = useDispatch()
    const nav = useNavigation()
    const rou = useRoute()
    useEffect(() => {
        const renderItem = async () => {
            const datasRender = await axios.get(`https://65474b9e902874dff3ac2238.mockapi.io/news/${rou.params?.id}`)
            setData(datasRender.data)
            dispath(removeAll())
            dispath(getTodo(datasRender.data.createdAt))
        }
        renderItem()

    }, [])

    const handleupdate = async (index1, name1) => {
        // setRender(!render)
        dispath(updateTodo({ index: index1, name: name1 }))
        dispath(addToDo({ name: 'toan3' }))
        const dataa = todos.map((item, index) => {
            if (index == index1) {
                console.log({ ...item, name: name1 });
                return { ...item, name: name1 };
            }
            return item;
        })
        console.log(todos);
        console.log(dataa);
        await fetch(`https://65474b9e902874dff3ac2238.mockapi.io/news/45`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    createdAt: [
                        ...dataa, { name: 'toan3' }
                    ]
                })
        });

    }
    const handle = () => {
        dispath(addToDo({ name: 'toan1' }))
        console.log(todos);
    }
    const handleDelete = async (name) => {
        const dataa = dispath(removeTodpo({ name: name }))
        const todo = todos.filter((item) => item.name != name)
        await fetch(`https://65474b9e902874dff3ac2238.mockapi.io/news/${rou.params?.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    createdAt: [
                        ...todo
                    ]
                })
        });
    }
    return (
        <View>
            <View>
                {todos.map((item, index) => (
                    <View key={index}>
                        <Text>{item.id}</Text>
                        <Text>{item.name}</Text>
                        <Pressable onPress={() => handleDelete(item.name)}>
                            <Text>handleDelete</Text>
                        </Pressable>
                    </View>
                ))}
            </View>
            <Pressable onPress={() => handle()}>
                <Text>click</Text>
            </Pressable>
            <Pressable onPress={() => nav.navigate('updateform', {
                id: rou.params?.id
            })}>
                <Text>handleupdate</Text>
            </Pressable>

            <Pressable onPress={() => nav.navigate('lauout2', {
                id: rou.params?.id
            })}>
                <Text>handtoScreen</Text>
            </Pressable>
        </View>
    )
}

export default Navigation

const styles = StyleSheet.create({})