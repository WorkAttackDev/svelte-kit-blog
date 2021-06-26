<script>
	import { page } from '$app/stores';
	import { posts } from '../../data/posts';

	const slug = $page.params.slug;

	const post = posts.find((_p) => _p.slug === slug);
</script>

<svelte:head>
	<title>WorkAttack Blog - Post {post.title || 'Não Encontrado'}</title>
</svelte:head>

<main class="min-h-screen">
	{#if !post}
		<div class="max-w-5xl py-6 px-8 flex justify-center text-center">
			<h1 class="text-4xl text-programming-secondary">Post não encontrado</h1>
		</div>
	{:else}
		<div class="bg-gradient-programming py-6 px-8 mb-8 ">
			<header class="max-w-5xl flex flex-col justify-center mx-auto">
				<h1 class="text-4xl mb-8 text-white">{post.title}</h1>
				<p class="text-base text-opacity-80 text-white ">
					Por <strong>{post.author}</strong> aos <strong>{post.date}</strong>
				</p>
			</header>
		</div>
		<div class="max-w-5xl mx-auto px-8">
			<p class="text-lg font-medium">{post.desc}</p>
		</div>
	{/if}
</main>
