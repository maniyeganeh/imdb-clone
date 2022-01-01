import axios from "axios"

export const getMovies = async () => {
    try {
        const { data } = await axios("https://imdb-api.com/API/Top250Movies/k_kzm3j843")

        return data.items
    }
    catch (err) {
        console.log(err);
    }

}
export const getMovie = async (search) => {
    try {
        const { data } = await axios(`https://imdb-api.com/API/SearchMovie/k_kzm3j843/${search}`)
        return data.results
    } catch (err) {
        console.log(err);
    }
}