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
		<div class="cardinfo">
			<h2><img class="avatar" src={dao.image_url} alt="logo" />{dao.name}</h2>
			<div class="description">{dao.description}</div>
			<div class="links">
				<a href={dao.website_url} target="_blank">
					<img src="../static/icons/globe.svg" alt="website" />
					<span class="text">Website</span>
					<span>↗</span>
				</a>
				<a href={dao.twitter_url} target="_blank">
					<img src="../static/icons/twitter.svg" alt="twitter" />
					<span class="text">Twitter</span>
					<span>↗</span>
				</a>
				<a href={dao.discord_url} target="_blank">
					<img src="../static/icons/discord.svg" alt="discord" />
					<span class="text">Discord</span>
					<span>↗</span>
				</a>
				<a href={dao.forum_url} target="_blank">
					<img src="../static/icons/chat.svg" alt="forum" />
					<span class="text">Forum</span>
					<span>↗</span>
				</a>
				<a href={dao.github_url} target="_blank">
					<img src="../static/icons/github.svg" alt="github" />
					<span class="text">Github</span>
					<span>↗</span>
				</a>
				<a href={dao.programme_url} target="_blank">
					<img src="../static/icons/infoCircle.svg" alt="more info" />
					<span class="text">Info</span>
					<span>↗</span>
				</a>
			</div>
			<div>
				<h3>Team</h3>
				{#each dao.team as m}
					<div class="teamrow">
						<img class="teamavatar" src={m.image_url} alt="" />
						<div class="name">{m.name}</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
	<div>
		<div class="cardsheader">
			<a class="back" href="../">← Back to all grants</a>
			<slot />
		</div>
	</div>
	<FundedList funded={funded} />
</section>

<style>
	h2 {
		display: flex;
		justify-items: center;
		overflow-wrap: anywhere;
	}
	a.back {
		background-color: var(--color-blue);
		padding: .5rem 1rem .5rem 1rem;
		display: inline-block;
		border: 2px solid var(--color-black);
		border-radius: var(--border-radius);
	}
	a.back:hover {
		background-color: var(--color-white);
		border-color: var(--color-white);
		box-shadow: var(--shadow);
	}
	.teamrow {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.teamavatar {
		width: 3rem;
		height: 3rem;
		display: inline-block;
		border-radius: 50%;
		margin-right: 1rem;
	}
	img.avatar {
		width: 4rem;
		height: 4rem;
		display: inline-block;
		border-radius: 50%;
		margin-right: 1rem;
	}
	.cardinfo div, .cardinfo h2 {
		margin: 0 0 2px 0;
		padding: 6%;
		border-radius: var(--border-radius);
		background-color: var(--color-green);
		/* border-right: 2px solid var(--color-black); */
	}
	div.name {
		border: none;
		padding: 0;
		margin-bottom: 1rem;
	}
	section {
		display: grid;
		grid-template-columns: 0.5fr 1fr 0.5fr;
	}
	.description {
		margin-bottom: 2rem;
	}
	.links {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
	span.text {
		margin-right: auto;
	}
	.links a {
		display: flex;
		align-items: center;
		padding: .5rem 1rem .5rem .5rem;
		margin: .25rem 0;
		border-radius: var(--border-radius);
		border: 2px solid var(--color-black);
		place-content: space-between;
	}
	.links a:hover {
		background-color: var(--color-white);
		border-color: var(--color-white);
		box-shadow: var(--shadow);
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
	.cardsheader {
		background-color: var(--color-blue);
		border-radius: var(--border-radius);
		padding: 1.5rem;
	}
</style>
