<script lang="ts">
	import '../styles/tailwind-output.css';

	const links = [
		{ name: 'Iníco', href: '/' },
		{ name: 'Blog', href: '/blog' }
	];
</script>

<header class="bg-white">
	<div class="flex justify-between items-center max-w-5xl mx-auto py-4 px-8">
		<a href="/" class="text-2xl font-bold text-programming-secondary">WAB</a>
		<nav class="flex">
			{#each links as { href, name }}
				<a {href} class="mx-4 last:mr-0 font-semibold text-workattack hover:text-design">{name}</a>
			{/each}
		</nav>
	</div>
</header>

<slot />

<footer class="flex justify-center bg-gradient-programming text-white p-4 text-center">
	All rights reserved to WorkAttack.
</footer>
