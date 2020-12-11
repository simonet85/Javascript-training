class GitHub{
    constructor(){
        //Inititializing 
        this.client_id = "7019069d99722ae02675"
        this.client_secret ="7a2bb391cfb163a89604d4983eb8dc7f69feb81b"
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

