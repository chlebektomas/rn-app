import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs, useRouter } from 'expo-router';
import { Pressable, Text, useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>['name'];
	color: string;
}) {
	return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default () => {
	const colorScheme = useColorScheme();
	const router = useRouter();

	const handleLogout = () => {
		router.push('/');
	};

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
			}}
		>
			<Tabs.Screen
				name="account"
				options={{
					title: '',
					tabBarIcon: ({ color }) => (
						<TabBarIcon name="user" color={color} />
					),
					headerLeft: () => (
						<Link href="/modal" asChild>
							<Pressable>
								<FontAwesome
									name="info-circle"
									size={25}
									color={Colors[colorScheme ?? 'light'].text}
									style={{
										marginLeft: 15,
									}}
								/>
							</Pressable>
						</Link>
					),
					headerRight: () => (
						<Pressable onPress={handleLogout}>
							<FontAwesome
								name="sign-out"
								size={25}
								color={Colors[colorScheme ?? 'light'].text}
								style={{
									marginRight: 15,
								}}
							/>
						</Pressable>
					),
				}}
			/>
			<Tabs.Screen
				name="search"
				options={{
					title: '',
					tabBarIcon: ({ color }) => (
						<TabBarIcon name="search" color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="settings"
				options={{
					title: '',
					tabBarIcon: ({ color }) => (
						<TabBarIcon name="cogs" color={color} />
					),
				}}
			/>
		</Tabs>
	);
};
