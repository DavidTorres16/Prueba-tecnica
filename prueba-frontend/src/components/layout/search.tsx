import { Title } from '@components/ui/Title'
import { SearchBar } from '@components/ui/searchBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHotel } from '@fortawesome/free-solid-svg-icons'

type Props = {
    title:string,
}

export const Search = ({title} : Props) => {
    return (
        <section className='search__section'>
            <div className="search__box__section">
                <Title
                    value={title}
                    type='small'
                    icon={<FontAwesomeIcon icon={faHotel} />}
                />
                <SearchBar />
            </div>
        </section>
    )
}
