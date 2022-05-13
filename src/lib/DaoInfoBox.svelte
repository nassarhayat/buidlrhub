<script context="module">
	import { page } from '$app/stores';
	import daos from "../data/programmes.json";
</script>

<script>
	const dao = daos.find(
		({ name }) => name.toLowerCase() === $page.params.slug.toLowerCase()
	);
	console.log(dao, $page.params)
</script>

<div class="partner">
    <img class="avatar" src={dao.image_url} alt="logo" />
    <h2>{dao.name}</h2>
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

<style>
    .links {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
	}
	.partner {
		margin-top: 30px;
		margin-bottom: auto;
		color: var(--color-white);
	}
</style>