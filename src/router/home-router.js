const home = [
	{
		path: '/',
		component: () => import('../layouts/Main-Layout.vue'),
		children: [
			{
				path: '',
				name: 'home',
				component: () => import('../pages/Portfolio.vue'),
			},
		],
	},
];

export default home;
