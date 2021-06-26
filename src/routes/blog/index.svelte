<script>
	import { posts } from '../../data/posts';

	import PostsList from '../../components/PostsList.svelte';
</script>

<svelte:head>
	<title>WorkAttack Blog - Posts</title>
</svelte:head>

<main>
	<PostsList
		{posts}
		title={'Todos os Posts'}
		desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, natus.'}
	/>
</main>
