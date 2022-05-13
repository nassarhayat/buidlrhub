<script>
	import DAOPreview from './DAOPreview.svelte';
	export let projects;
</script>

{#if projects.length === 0}
	<div>No partners are here... yet.</div>
{:else}
	<div>
        <div class="cardsheader">
			<h2>DAOs</h2>
		</div>
        {#each projects as project}
			{#if project.type === "funder"}
				<DAOPreview project={project} />
			{/if}
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