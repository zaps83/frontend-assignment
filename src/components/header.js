import React from 'react'
import * as S from './styles/header'
import searchIcon from '../images/Union.png'
import logo from '../images/logo.svg'

function Header({ getByRecent, setSearch, getBySearch }) {

    // search on form submit
    const handleSubmit = (e) => {
        e.preventDefault()
        getBySearch()
    }

    return (
        <S.Header>
            <S.Logo src={logo} alt="Timescale" onClick={() => getByRecent()}/>
            <S.Form onSubmit={handleSubmit}>
                <S.SearchIcon type='image' src={searchIcon} alt='' />
                <S.Search 
                    placeholder='Search for a movie' 
                    type='text' 
                    onChange={(e) => setSearch(e.target.value)} />
            </S.Form>
        </S.Header>
    )
}

export default Header
