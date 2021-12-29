<script>
    export let funded;
</script>

<a href={`/${funded.name}`}>
    <div class="fundedcard">
        <div class="avatarrow">
            <img class="avatar" src={funded.image_url} alt="logo" />
            <div>
                <h4>{funded.name}</h4>
                <div class="links">
                    <p>{funded.amount}</p>
                    <a href={funded.website_url} target="_blank">learn more</a>
                </div>
            </div>
        </div>
    </div>
</a>

<style>
    h4 {
	  margin-top: 1vh;
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