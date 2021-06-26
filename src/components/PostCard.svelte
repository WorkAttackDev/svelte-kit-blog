<script lang="ts">
	import Button from '../components/Button.svelte';

	export let title: string;
	export let desc: string;
	export let author: string;
	export let date: string;
	export let slug: string;
</script>

<article class="shadow py-6 px-8 rounded bg-white">
	<h4 class="text-lg font-bold mb-4">{title}</h4>
	<small class="text-opacity-80">Por <strong>{author}</strong> aos <strong>{date}</strong></small>
	<p class="my-4">
		{desc}
	</p>
	<Button>
		<a href={`/blog/${slug}`}>Continuar a ler</a>
	</Button>
</article>
