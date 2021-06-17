import ReactDOM from 'react-dom'
import * as S from './styles/modal'
import { useClickOutside } from '../functions/use-click-outside'
import { dateReformatter } from '../functions/date-reformatter'

const Info = ({ showModal, setShowModal, info, base_poster_url }) => {

    // click outside modal to close it
    let domNode = useClickOutside(() => {
        setShowModal(false);
      })

    return (
        <>
            {showModal ? ReactDOM.createPortal(
                <S.Background>
                    <S.Body ref={domNode}>
                        <S.TopContainer>
                            <S.Title>{info?.title}</S.Title>
                            <S.CloseButtonContainer onClick={() => setShowModal(false)}>
                                <S.CloseButton />
                            </S.CloseButtonContainer>
                        </S.TopContainer>
                        <S.BottomContainer>
                            <S.Poster img={base_poster_url + info.poster_path}/>
                            <S.BottomRightContainer>
                                <S.ReleaseDate>
                                    <strong>Release date: </strong>{dateReformatter(info?.release_date)}
                                </S.ReleaseDate>
                                <S.Description>{info?.overview}</S.Description>
                                <S.Rating>
                                    <strong>{info?.vote_average}</strong>/10 ({info?.vote_count} total votes)
                                </S.Rating>
                            </S.BottomRightContainer>
                        </S.BottomContainer>
                    </S.Body>
                </S.Background>,
                document.body
            ) : null}
        </>
    )
}

export default Info
