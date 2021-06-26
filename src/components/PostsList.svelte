<script lang="ts">
	import type { Post } from '../data/posts';

	import PostCard from '/src/components/PostCard.svelte';

	export let id: string;
	export let title: string;
	export let desc: string;
	export let posts: Post[] = [];
</script>

<section {id} class="flex flex-col px-4 py-8">
	<span class="mx-auto text-center mb-8">
		<h2 class="text-2xl font-semibold mb-4">{title}</h2>
		<p>{desc}</p>
	</span>
	<ul class="max-w-3xl mx-auto grid gap-16">
		{#each posts as post}
			<li>
				<PostCard {...post} />
			</li>
		{/each}
	</ul>
</section>
