import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native'
import { Pressable } from 'react-native'
import axios from 'axios'
import { useNavigation, useRoute } from '@react-navigation/native'
const Layouttart = () => {
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [data, setData] = useState([])
    const nav = useNavigation()
    useEffect(() => {
        const renderDataa = async () => {
            const dataa = await axios.get(`https://65474b9e902874dff3ac2238.mockapi.io/news`)
            console.log(dataa.data);
            setData(dataa.data)
        }
        renderDataa()
    }, [])
    const clickTocheck = (arr, u, p) => {
        arr.some((it, id) => {
            if (it.id == u) {
                nav.navigate('lauout1', {
                    id: it.id
                })
            }
        })
    }
    return (
        <View>
            <TextInput value={user} onChangeText={setUser} placeholder='username' />
            <TextInput value={pass} onChangeText={setPass} placeholder='password' />
            <Pressable onPress={() => clickTocheck(data, user)}><Text>Click</Text> </Pressable>
        </View >
    )
}

export default Layouttart

const styles = StyleSheet.create({})