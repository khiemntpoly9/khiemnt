const home = [
	{
		path: '/',
		component: () => import('../layouts/home.vue'),
		children: [
			{
				path: '',
				name: 'home',
				component: () => import('../pages/Main.vue'),
			},
		],
	},
];

export default home;
