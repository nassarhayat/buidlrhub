<script>
    export let dao;
</script>

<a href={`/dao/${dao.name}`}>
    <div class="card">
    <img class="avatar" src={dao.image_url} alt="logo" />
    <h4 class="cardtitle">{dao.name}</h4>
    <p>{dao.description}</p>
    <div class="options">
        {#if dao.twitter_url}
        <a href={dao.twitter_url} target="_blank">
            <img class="twitter" src="/logos/twitter.png" alt="twitter" />
        </a>
        {/if}
        <a class="programmeButton" href={dao.programme_url} target="_blank">Programme info</a>
    </div>
    </div>
</a>

<style>
    .card {
	  background: white;
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
    @media (min-width: 640px) { 
	  .avatar {
		width: 6vw;
		height: 6vw;
	  }
	}
</style>