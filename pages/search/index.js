import { CircularProgress, Container, Grid } from '@mui/material'
import { Box } from '@mui/system'


import React, { useState } from 'react'
import CardComponent from '../../components/shared/cards/CardComponent'
import SearchInput from '../../components/shared/inputs/SearchInput'
import LoaderComponent from '../../components/shared/loader/LoaderComponent'
import DetailsModal from '../../components/shared/modals/DetailsModal'
import { getMovie } from '../../helpers/api-util'

const Search = () => {
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState("")
    const [movieDetail, setMovieDetail] = useState({});
    const [searchResults, setSearchResults] = useState([])

    const handleShowModal = () => {
        setShowModal(true);
    };
    const handleCloseModal = () => {
        setShowModal(false);
    };
    const searchChangeHandler = (e) => {
        setSearch(e.target.value);

    };
    const searchSubmitHandler = async (e) => {
        e.preventDefault();
        setLoading(true)
        const result = await getMovie(search);
        setLoading(false)
        setSearchResults(result);

    }
    const findMovie = (id) => {
        const movie = searchResults.find((movie) => movie.id === id);
        setMovieDetail(movie);
        handleShowModal();
    };

    if (loading) {
        return (
            <LoaderComponent />
        )
    }
    return (
        <Container >
            <SearchInput search={search} change={searchChangeHandler} submit={searchSubmitHandler} />
            <Grid my={2} container spacing={1}>


                {searchResults?.map((result, index) => (

                    <Grid item xs={12} sm={12} md={3} key={index} onClick={() => findMovie(result.id)} >

                        <CardComponent key={index} movie={result} />



                    </Grid>

                ))}
            </Grid>
            {showModal && (
                <DetailsModal
                    showModal={showModal}
                    close={handleCloseModal}
                    details={movieDetail} />
            )}
        </Container>
    )
}

export default Search
