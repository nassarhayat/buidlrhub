<script>
	import { onMount } from 'svelte';
    export let funded;
	import projects from "../../data/projects.json";

	let to_project = projects.find((p) => p.id === funded.to_project_id);
	to_project = to_project
</script>

{#if to_project}
	<a href={to_project.website_url} target="_blank">
		<div class="fundedcard">
			<div class="avatarrow">
				<img class="avatar" src={to_project.image_url} alt="logo" />
				<div>
					<h4>{to_project.name}</h4>
					<div class="links">
						<p>{funded.amount}</p>
					</div>
				</div>
			</div>
		</div>
	</a>
{/if}

<style>
    h4 {
		margin-top: 1vh;
	}
	.avatarrow {
		display: flex;
		flex-direction: row;
		grid-gap: 1rem;
	}
	.avatar {
		border-radius: 100%;
		width: 15vw;
		height: 15vw;
	}
	p, a {
		margin: 5px 0;
	}
	.links {
		display: flex;
		align-items: center;
		flex-direction: row;
		grid-gap: 10px;
	}
	.fundedcard {
		background-color: var(--color-purple);
		margin-bottom: 2px;
		border-radius: var(--border-radius);
		padding: 1rem;
	}
    @media (min-width: 640px) { 
		.avatar {
		width: 3rem;
		height: 3rem;
		}
	}
</style>