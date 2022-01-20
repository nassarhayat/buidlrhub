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
		<h1>Grants and investment from DAOs</h1>
		<h3>Your single hub for applying for grants and incubator programmes</h3>
	</div>
	<DAOList daos={daos} />
	<FundedList funded={funded} />
</section>

<style>
	#intro {
		text-align: center;
		padding: 2rem;
		background: var(--color-green);
	}
	section {
		margin-top: 72px;
		display: grid;
		grid-template-columns: 0.5fr 1fr 0.5fr;
	}
	h3 {
	  margin-top: 20px;
	}
  </style>