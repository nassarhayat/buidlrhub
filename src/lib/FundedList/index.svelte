<script>
	import FundedPreview from './FundedPreview.svelte';
	export let funded;
</script>

<section>
    <div class="fundedheader">
        <h2>funded</h2>
    </div>
    {#each funded as f}
        <FundedPreview funded={f} />
    {/each}
</section>

<style>
    section {
	  margin-left: 1rem;
	}
	.fundedheader {
	  color: white;
	  padding: 1rem;
	}
</style>

