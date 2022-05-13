<script>
    export let project;
</script>

<a href={`/dao/${project.name}`}>
    <div class="card">
		<img class="avatar" src={project.image_url} alt="logo" />
		<h3 class="cardtitle">{project.name}</h3>
		<p>{project.description}</p>
    </div>
</a>

<style>
    .card {
	  background: var(--color-blue);
	  align-self: flex-end;
	  border-radius: var(--border-radius);
	  padding: 2rem;
	  margin-bottom: 2px;
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