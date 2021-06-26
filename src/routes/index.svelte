<script>
	import PostsList from '../components/PostsList.svelte';

	import { posts } from '../data/posts';

	import Button from '/src/components/Button.svelte';

	const featurePosts = posts.slice(0, 5);
</script>

<svelte:head>
	<title>WorkAttack Blog - Home page</title>
</svelte:head>

<main>
	<section class="grid grid-cols-2">
		<article class="flex flex-col justify-center p-8 bg-gradient-programming ">
			<h1 class="text-4xl font-semibold mb-8 text-white">WorkAttack Blog</h1>
			<p class="mb-4 text-white">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, quas rerum velit officia
				soluta eligendi sapiente iste aliquid adipisci, veniam dolorum sed quaerat reprehenderit
				nemo dolorem doloremque ad recusandae molestiae.
			</p>
			<span>
				<Button>
					<a href="#feature">Em Destaque</a>
				</Button>
				<a href="/blog" class="px-4 py-2 text-sm bg-workattack/20 text-workattack rounded-full"
					>Mais Recente</a
				>
			</span>
		</article>
		<picture>
			<img
				src="https://workattackangola.com/images/gallery/banners_services/01.jpeg"
				alt="workattack banner media social"
			/>
		</picture>
	</section>

	<PostsList
		id="feature"
		posts={featurePosts}
		title={'Secção de Destaque'}
		desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, natus.'}
	/>
</main>
