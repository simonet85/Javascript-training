class GitHub{
    constructor(){
        //Inititializing 
        this.client_id = "YOUR_GITHUB_CLIENT" //https://github.com/settings/applications/new
        this.client_secret ="YOUR_GITHUB_SECRET"
        this.repos_count = 5
        this.repos_sort = 'created: asc'
    }

    async getUser( user ){
        //Fetching Github users
        const response = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id} & client_secret=${this.client_secret}`)

        //Fetching repos 
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}& client_id=${this.client_id}&client_secret=${this.client_secret}`)
        
        //Get data in json format
        const data = await response.json()
        const repos = await repoResponse.json()

        //returning data
        return {data,repos}
    }
}

