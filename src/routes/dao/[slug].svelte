<script context="module">
	import { page } from '$app/stores';
	import FundedList from "../../lib/FundedList/index.svelte"
	import funded from "../../data/funded.json"
</script>


<section>
	<div class="partner">
		<div>{$page.params.slug}</div>
		<div>twitter, discord, discourse, website, radicle/github</div>
		<div>funding range</div>
	</div>
	<div class="cardsheader">
		<h2>partner</h2>
		<div>funding range</div>
	</div>
	<FundedList funded={funded} />
</section>

<style>
	section {
		margin-top: 36px;
		display: grid;
		grid-template-columns: 0.5fr 1fr 0.5fr;
	}
	.cardsheader {
		background-color: white;
		padding: 1rem;
		border-bottom:1px solid rgba(0, 0, 0, 0.3);
	}
	.partner {
		margin-top: 30px;
		color: white;
	}
</style>
