<script context="module">
	import { page } from '$app/stores';
	import FundedList from "$lib/FundedList/index.svelte";
	import funded from "../../data/funded.json";
	import daos from "../../data/daos.json";
</script>

<script>
	const dao = daos.find((d) => d.name === $page.url.pathname.replace('/dao/', ''));
</script>


<section>
	<div class="partner">
		<img class="avatar" src={dao.image_url} alt="logo" />
		<h1>{dao.name}</h1>
		<div>{dao.description}</div>
		<div class="links">
			<a href={dao.website_url} target="_blank">website</a>
			<a href={dao.twitter_url} target="_blank">twitter</a>
			<a href={dao.discord_url} target="_blank">discord</a>
			<a href={dao.forum_url} target="_blank">forum</a>
			<a href={dao.github_url} target="_blank">github</a>
			<a href={dao.programme_url} target="_blank">more info</a>
		</div>
		<div>
			<h3>team</h3>
			{#each dao.team as m}
				<div>{m.name}</div>
			{/each}
		</div>
	</div>
	<div class="cardsheader">
		<slot />
	</div>
	<FundedList funded={funded} />
</section>

<style>
	section {
		margin-top: 72px;
		display: grid;
		grid-template-columns: 0.5fr 1fr 0.5fr;
	}
	.cardsheader {
		background-color: var(--color-blue);
		border-left: 2px solid var(--color-black);
	}
	.links {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
	}
	a {
		padding: 10px;
	}
	.partner {
		margin-bottom: auto;
		color: white;
		background-color: grey;
	}
</style>
