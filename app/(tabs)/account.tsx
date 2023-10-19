import React from 'react';

import { Text, View } from '../../components/Themed';
import { Link, useRouter } from 'expo-router';
import { Pressable } from 'react-native';

const Account = () => {
	const router = useRouter();
	return (
		<View className="flex flex-grow">
			<Text className="text-center text-lg mt-5">User account</Text>

			<Link
				href="detail"
				asChild
				className="m-5 bg-slate-400 rounded-sm p-2"
			>
				<Pressable>
					<Text>Detail...</Text>
				</Pressable>
			</Link>
		</View>
	);
};

export default Account;
