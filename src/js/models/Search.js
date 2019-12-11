import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query
    }
    async getResults() {
        try {
            const res = await axios.get(`https://forkify-api.herokuapp.com/api/search?q=${this.query}`);
            this.result=res.data.recipes
        } catch (error) {
            console.error(error);
        }
    }
}