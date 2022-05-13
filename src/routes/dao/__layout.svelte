<script context="module">
	import { page } from '$app/stores';
	import FundedList from "$lib/FundedList/index.svelte";
	import funding from "../../data/funding.json";
	import projects from "../../data/projects.json";
</script>

<script>
	const project = projects.find((d) => d.name === $page.url.pathname.replace('/dao/', ''));
	const funded = funding.filter((f) => f.from_project_id === project.id);
</script>


<section>
	<div class="partner">
		<div class="cardinfo">
			<h2><img class="avatar" src={project.image_url} alt="logo" />{project.name}</h2>
			<div class="description">{project.description}</div>
			<div class="links">
				<a href={project.website_url} target="_blank">
					<img src="/icons/globe.svg" alt="website" />
					<span class="text">Website</span>
					<span>↗</span>
				</a>
				<a href={project.twitter_url} target="_blank">
					<img src="/icons/twitter.svg" alt="twitter" />
					<span class="text">Twitter</span>
					<span>↗</span>
				</a>
				<a href={project.discord_url} target="_blank">
					<img src="/icons/discord.svg" alt="discord" />
					<span class="text">Discord</span>
					<span>↗</span>
				</a>
				<a href={project.forum_url} target="_blank">
					<img src="/icons/chat.svg" alt="forum" />
					<span class="text">Forum</span>
					<span>↗</span>
				</a>
				<a href={project.github_url} target="_blank">
					<img src="/icons/github.svg" alt="github" />
					<span class="text">Github</span>
					<span>↗</span>
				</a>
				<a href={project.programme_url} target="_blank">
					<img src="/icons/infoCircle.svg" alt="more info" />
					<span class="text">Info</span>
					<span>↗</span>
				</a>
			</div>
			<div>
				<h3>Team</h3>
				{#each project.team as m}
					<div class="member">
						<img class="avatar" src={m.image_url} alt="logo" />
						<h4 class="name">{m.name}</h4>
					</div>
				{/each}
			</div>
		</div>
	</div>
	<div>
		<div class="cardsheader">
			<a class="back" href="../">← Back to all DAOs</a>
			<slot />
		</div>
	</div>
	<FundedList funding={funded} />
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
	}
	.name {
		border: none;
		padding: 0;
		margin-bottom: 1rem;
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
	.member {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.avatar {
		border-radius: 100%;
		width: 10vw;
		height: 10vw;
	}
    @media (min-width: 700px) { 
		.avatar {
			width: 2rem;
			height: 2rem;
		}
		section {
			display: grid;
			grid-template-columns: 0.5fr 1fr 0.5fr;
		}
	}
</style>
