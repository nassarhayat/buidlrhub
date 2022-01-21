<script context="module" lang="ts">
	import DAOList from "../lib/DAOList/index.svelte";
	import FundedList from "../lib/FundedList/index.svelte"
	import daos from "../data/daos.json"
	import funded from "../data/funded.json"
	export const prerender = true;
</script>

<script lang="ts">
	
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<div id="intro">
		<h2>Grants & investment from DAOs</h2>
		<p>Your single hub for applying for grants and incubator programmes</p>
	</div>
	<DAOList daos={daos} />
	<FundedList funded={funded} />
</section>

<style>
	#intro {
		border-radius: var(--border-radius);
		height: fit-content;
		border-right: 2px solid var(--color-black);
		margin-left: 2px;
	}
	section {
		display: grid;
		grid-template-columns: 0.5fr 1fr 0.5fr;
	}
	h3 {
		margin-top: 20px;
	}
	h2, p {
		padding: 1rem 2rem;
		background-color: var(--color-green);
		border-radius: var(--border-radius);
		margin: 0 0 2px;
	}
  </style>