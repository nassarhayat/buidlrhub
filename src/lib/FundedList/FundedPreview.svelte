<script>
    export let funded;
	import projects from "../../data/projects.json";

	// const from_project = projects.find((p) => p.id === funding.from_project_id);
	const to_project = projects.find((p) => p.id === funded.to_project_id);
</script>

<a href={`/${to_project.name}`}>
    <div class="fundedcard">
        <div class="avatarrow">
            <img class="avatar" src={to_project.image_url} alt="logo" />
            <div>
                <h4>{to_project.name}</h4>
                <div class="links">
                    <p>{funded.amount}</p>
                    <a href={to_project.website_url} target="_blank">learn more →</a>
                </div>
            </div>
        </div>
    </div>
</a>

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