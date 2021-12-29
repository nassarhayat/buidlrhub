<script context="module">
	import { page } from '$app/stores';
	import funded from "../../data/funded.json"
</script>


<section>
	<div class="partner">
		<div>{$page.params.slug}</div>
		<div>funding range</div>
	</div>
	<div class="cardsheader">
		<h2>partner</h2>
	</div>
	<div class="container">
		<div class="fundedheader">
			<h2>funded</h2>
		</div>
		{#each funded as f}
			<a href={`/${f.name}`}>
			<div class="fundedcard">
				<div class="avatarrow">
				<img class="avatar" src={f.image_url} alt="logo" />
				<div>
					<h4>{f.name}</h4>
					<div class="links">
					<p>{f.amount}</p>
					<a href={f.website_url} target="_blank">learn more</a>
					</div>
				</div>
				</div>
			</div>
			</a>
		{/each}
	</div>
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
		color: white;
	}
	.container {
	  margin-left: 1rem;
	}
	.fundedheader {
	  color: white;
	  padding: 1rem;
	}
	.fundedcard {
	  background-color: #161b22;
	  border: 1px solid black;
	  color: white;
	  padding: 1rem;
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
	  flex-direction: row;
	  grid-gap: 10px;
	}
	@media (min-width: 640px) { 
	  .avatar {
		width: 3vw;
		height: 3vw;
	  }
	}
</style>
