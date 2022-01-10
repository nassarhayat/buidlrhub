<script context="module">
	import { page } from '$app/stores';
	import FundedList from "../../lib/FundedList/index.svelte";
	import funded from "../../data/funded.json";
	import partnerPages from "../../data/partner-pages.json"
	import Arweave from "../../data/partner-pages/arweave.md";
</script>

<script>
	const partnerPage = partnerPages.find(
		({ name }) => name.toLowerCase() === $page.params.slug.toLowerCase()
	);
</script>


<section>
	<div class="partner">
		<div>{$page.params.slug}</div>
		<div>twitter, discord, discourse, website, radicle/github</div>
		<div>funding range</div>
		<div>grant programme treasury amount + incubator treasury amount</div>
	</div>
	<div class="cardsheader">
		<div>funding range</div>
		<Arweave />
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
		margin-bottom: auto;
		padding: 1rem;
		color: white;
		background-color: pink;
	}
</style>
