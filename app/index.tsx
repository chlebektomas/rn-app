import { Pressable, Text, View } from 'react-native';
import React from 'react';
import { SplashScreen, useRouter } from 'expo-router';

SplashScreen.preventAutoHideAsync();

const WelcomePage = () => {
	const router = useRouter();

	const handleLogin = () => {
		router.replace('account');
	};

	return (
		<View className="flex-grow align-middle justify-center">
			<Pressable onPress={handleLogin}>
				<Text className="text-center font-bold mb-5">Log in</Text>
			</Pressable>
		</View>
	);
};

export default WelcomePage;
