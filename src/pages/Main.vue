<script setup>
	import { useDark, useToggle } from '@vueuse/core';
	import HelloWorld from '../components/HelloWorld.vue';

	const isDark = useDark();
	const toggleDark = useToggle(isDark);
</script>

<template>
	<div>isDark: {{ isDark }}</div>
	<button @click="toggleDark()" class="rounded bg-green-500 px-4 py-2 dark:bg-purple-500">Dark Mode</button>
	<div>
		<a href="https://vitejs.dev" target="_blank">
			<img src="/vite.svg" class="logo" alt="Vite logo" />
		</a>
		<a href="https://vuejs.org/" target="_blank">
			<img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
		</a>
	</div>
	<HelloWorld msg="Vite + Vue" />
	<h1>{{ $t('welcome') }}</h1>
	<p>{{ $t('description') }}</p>

	<div class="locale-changer">
		<select v-model="$i18n.locale">
			<option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
				{{ locale }}
			</option>
		</select>
	</div>
</template>

<style scoped>
	.logo {
		height: 6em;
		padding: 1.5em;
		will-change: filter;
		transition: filter 300ms;
	}
	.logo:hover {
		filter: drop-shadow(0 0 2em #646cffaa);
	}
	.logo.vue:hover {
		filter: drop-shadow(0 0 2em #42b883aa);
	}
</style>
