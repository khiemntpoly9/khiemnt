<script setup>
	import Navbar from '../components/Navbar.vue';
</script>

<template>
	<div class="relative">
		<Navbar />
		<main class="container h-screen min-w-full snap-y snap-mandatory overflow-y-scroll scroll-smooth">
			<div class="flex h-screen min-w-full snap-start items-center justify-center">
				<div class="flex flex-row justify-center gap-5">
					<div class="w-2/6">
						<img src="../assets/me.png" class="w-full" alt="" />
					</div>
					<div class="flex">
						<div>
							<h1 class="text-4xl font-bold">Trung Khiêm</h1>
							<p class="text-lg">Frontend Developer</p>
							<p class="text-lg">Học viên tại Techmaster</p>
						</div>
					</div>
				</div>
			</div>
			<div class="flex h-screen min-w-full snap-start items-center justify-center">Khu vực 2</div>
			<div class="flex h-screen min-w-full snap-start items-center justify-center">Khu vực 3</div>
		</main>
	</div>
</template>
