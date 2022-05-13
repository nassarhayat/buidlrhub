<script>
	import FundedPreview from './FundedPreview.svelte';
	export let funding;
</script>

<section>
    <div class="fundedheader">
        <h2>Funded</h2>
    </div>
    {#each funding as f}
        <FundedPreview funded={f} />
    {/each}
</section>

<style>
    section {
	  margin-left: 2px;
	}
    h2 {
        padding: 1rem 2rem;
    }
    section * {
        margin-bottom: 2px;
        background-color: var(--color-purple);
        border-radius: var(--border-radius);
    }
</style>

