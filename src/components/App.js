import * as S from './styles/App'
import axios from 'axios';
import {React, useState, useEffect} from 'react'
import Modal from './modal'
import Movies from './movies'
import Header from './header'
import {disableScroll, enableScroll } from '../functions/set-scroll'

const base_url = process.env.REACT_APP_API_DOMAIN
const api_key = process.env.REACT_APP_MOVIE_DB_API_KEY
const base_poster_url = process.env.REACT_APP_API_BASE_IMAGE_URL
const api = axios.create({ baseURL: base_url })

const App = () => {

	const [movies, setMovies] = useState([])
	const [search, setSearch] = useState('')
	const [info, setInfo] = useState([])
	const [showModal, setShowModal] = useState(false)
	const [resultsTitle, setResultsTitle] = useState('Most Recent Movies')

	// find today's date to filter for most recent movies
	let today = new Date()
	const dd = String(today.getDate()).padStart(2, '0')
	const mm = String(today.getMonth() + 1).padStart(2, '0')
	const yyyy = today.getFullYear()
	today = mm + '/' + dd + '/' + yyyy; 
	const todayDate = new Date(today)

	// api call functions
	const getByRecent = () => {
		api.get("movie/upcoming", { params: { api_key } }).then(response => {
			const moviesSortedByDate = response.data.results
				.sort((a, b) => new Date(b.release_date) - new Date(a.release_date))
				.filter(movie => new Date(movie.release_date) <= todayDate)
				.filter((movie, index) => index < 12)
			setMovies(moviesSortedByDate)
			setResultsTitle('Most Recent Movies')
		})
	}
	const getBySearch = () => {
		api.get(`search/movie?query=${search}&api_key=${api_key}`).then(response => {
            const searchedMovies = response.data.results
            setMovies(searchedMovies)
            setResultsTitle(`Search results for '${search}'`)
        })
	}

	// fetch recent movies on mount
	useEffect(() => {
		getByRecent()
	}, [])

	// live search with 300ms delay
	useEffect(() => {
		const delaySearch = setTimeout(() => {
		  console.log(search)
		  getBySearch()
		}, 300)
	
		return () => clearTimeout(delaySearch)
	  }, [search])

	// disable scrolling when modal is open
	useEffect(() => {
		showModal === true ? disableScroll() : enableScroll()
	}, [showModal])

	// update state to properly display additional information after a card is clicked
	const displayInfo = (movie) => {
		setInfo(movie)
		setShowModal(!showModal)
	}

	return (
		<S.Container>
			<Header 
				setResultsTitle={setResultsTitle}
				setSearch={setSearch}
				getBySearch={getBySearch}
				getByRecent={getByRecent} />
			<Movies
				resultsTitle={resultsTitle}
				movies={movies} 
				displayInfo={displayInfo} 
				base_poster_url={base_poster_url} />
			<Modal 
				showModal={showModal} 
				setShowModal={setShowModal} 
				info={info} 
				base_poster_url={base_poster_url} />
		</S.Container>
	)
}

export default App;