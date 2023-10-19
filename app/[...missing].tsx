import React from 'react';
import { Link, Stack } from 'expo-router';

import { Text, View } from '../components/Themed';

const NotFoundScreen = () => {
	return (
		<>
			<Stack.Screen options={{ title: 'Oops!' }} />
			<View className="flex-1">
				<Text className="color-white">This screen doesn't exist.</Text>

				<Link href="/" className="flex">
					<Text className="bg-teal-40 text-sm">
						Go to home screen!
					</Text>
				</Link>
			</View>
		</>
	);
};

export default NotFoundScreen;
