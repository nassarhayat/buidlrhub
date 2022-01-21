<script>
	import DAOPreview from './DAOPreview.svelte';
	export let daos;
</script>

{#if daos.length === 0}
	<div>No partners are here... yet.</div>
{:else}
	<div>
        <div class="cardsheader">
			<h2>Partners</h2>
		</div>
        {#each daos as dao}
            <DAOPreview dao={dao} />
		{/each}
	</div>
{/if}

<style>
    .cardsheader {
		border-radius: var(--border-radius);
		background-color: var(--color-blue);
		border-bottom: 2px solid var(--color-black);
	}

	.cardsheader h2 {
		padding-left: 2rem;
	}
</style>