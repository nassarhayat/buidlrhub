<script context="module" lang="ts">
	import DAOList from "../lib/DAOList/index.svelte";
	import FundedList from "../lib/FundedList/index.svelte"
	import projects from "../data/projects.json"
	import funding from "../data/funding.json"
	export const prerender = true;
</script>

<script lang="ts">
	
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<div id="intro">
		<h2>Support and funding from DAOs</h2>
		<p>One place to apply for integration, grants, investments, and growth support</p>
	</div>
	<DAOList projects={projects} />
	<FundedList funding={funding} />
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
	h2, p {
		padding: 1rem 2rem;
		background-color: var(--color-green);
		border-radius: var(--border-radius);
		margin: 0 0 2px;
	}
  </style>