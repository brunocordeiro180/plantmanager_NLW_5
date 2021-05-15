import React, {useEffect, useState} from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import colors from '../styles/colors';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import  usrImg from '../assets/bruno.png';
import fonts from '../styles/fonts';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Header = () => {

	const [username, setUsername] = useState<string>();

	useEffect(() => {
		async function loadStorageUserName(){
			const user = await AsyncStorage.getItem('@plantmanager:user');
			setUsername(user || '');
		}

		loadStorageUserName()  ;
	}, [])

	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.greeting}>Olá,</Text>
				<Text style={styles.userName}>{username}</Text>
			</View>

			<Image style={styles.image} source={usrImg} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 20,
		marginTop: getStatusBarHeight(),
	},
	image:{
		width: 70,
		height: 70,
		borderRadius: 40
	},
	greeting:{
		fontSize: 32,
		color: colors.heading,
		fontFamily: fonts.text
	},
	userName:{
		fontSize: 32,
		fontFamily: fonts.heading,
		color: colors.heading,
		lineHeight: 40

	}
})
