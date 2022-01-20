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
		<div class="cardinfo">
			<h1>{dao.name}</h1>
			<div class="description">{dao.description}</div>
			<div class="links">
				<a href={dao.website_url} target="_blank">
					<img src="../static/icons/globe.svg" alt="website" />
					Website
				</a>
				<a href={dao.twitter_url} target="_blank">
					<img src="../static/icons/twitter.svg" alt="twitter" />
					Twitter
				</a>
				<a href={dao.discord_url} target="_blank">
					<img src="../static/icons/discord.svg" alt="discord" />
					Discord
				</a>
				<a href={dao.forum_url} target="_blank">
					<img src="../static/icons/chat.svg" alt="forum" />
					Forum
				</a>
				<a href={dao.github_url} target="_blank">
					<img src="../static/icons/github.svg" alt="github" />
					Github
				</a>
				<a href={dao.programme_url} target="_blank">
					<img src="../static/icons/infoCircle.svg" alt="more info" />
					Info
				</a>
			</div>
			<div>
				<h3>Team</h3>
				{#each dao.team as m}
					<div class="name">{m.name}</div>
				{/each}
			</div>
		</div>
	</div>
	<div class="cardsheader">
		<slot />
	</div>
	<FundedList funded={funded} />
</section>

<style>
	img.avatar {
		width: 100%;
		height: auto;
	}	
	.cardinfo div, .cardinfo h1 {
		margin: 0 0 2px 0;
		padding: 6%;
		background-color: var(--color-green);
	}
	div.name {
		border-bottom: none;
		padding: 0;
		margin-bottom: 1rem;
	}
	section {
		margin-top: 72px;
		display: grid;
		grid-template-columns: 0.5fr 1fr 0.5fr;
	}
	.cardsheader {
		padding: 4% 5%;
		background-color: var(--color-blue);
		border-left: 2px solid var(--color-black);
	}
	.description {
		margin-bottom: 2rem;
	}
	.links {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
	.links a {
		display: flex;
		align-items: center;
		padding: .5rem;
		margin: .25rem 0;
		border-radius: 50rem;
		border: 2px solid var(--color-black);
	}
	.links a:nth-child(2n) {
		margin-left: .25rem;
	}
	.links a:nth-child(2n-1) {
		margin-right: .25rem;
	}
	.links a img {
		margin-right: .25rem;
	}
	.partner {
		margin-bottom: auto;
		border-left: 2px solid var(--color-black);
	}
</style>
