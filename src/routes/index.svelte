<script context="module" lang="ts">
	import partners from "../data/partners.json"
	import funded from "../data/funded.json"
	export const prerender = true;
</script>

<script lang="ts">
	
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<div>
		<h1>Grants and investment from DAOs</h1>
		<h3>Your single hub for applying for grants and incubator programmes</h3>
	</div>
	<div>
		<div class="cardsheader">
			<h2>partners</h2>
		</div>
		{#each partners as partner}
			<a href={`/dao/${partner.name}`}>
				<div class="card">
				<img class="avatar" src={partner.image_url} alt="logo" />
				<h4 class="cardtitle">{partner.name}</h4>
				<p>{partner.description}</p>
				<div class="options">
					{#if partner.twitter_url}
					<a href={partner.twitter_url} target="_blank">
						<img class="twitter" src="/logos/twitter.png" alt="twitter" />
					</a>
					{/if}
					<a class="programmeButton" href={partner.programme_url} target="_blank">Programme info</a>
				</div>
				</div>
			</a>
		{/each}
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
	h1, h3 {
	  color: white;
	}
	h3 {
	  margin-top: 20px;
	}
	.cardsheader {
	  background-color: white;
	  padding: 1rem;
	  border-bottom:1px solid rgba(0, 0, 0, 0.3);
	}
	.card {
	  background: white;
	  padding: 1rem;
	  border-bottom:1px solid rgba(0, 0, 0, 0.3);
	  align-self: flex-end;
	}
  
	.avatar {
	  border-radius: 100%;
	  width: 15vw;
	}
  
	.options {
	  display: flex;
	  flex-direction: row;
	  grid-gap: 10px;
	}
  
	.twitter {
	  background-color: #00ACEE;
	  max-width: 20px;
	  padding: 5px;
	  border-radius: 10px;
	}
  
	.programmeButton {
	  border: solid 2px black;
	  border-radius: 10px;
	  padding: 10px;
	}
	h4 {
	  margin-top: 1vh;
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
	a {
	  color: white;
	}
	h4 {
	  font-size: 1rem;
	}
	@media (min-width: 640px) { 
	  .avatar {
		width: 3vw;
		height: 3vw;
	  }
	}
  </style>