import { Title } from '@components/ui/Title'
import { SearchBar } from '@components/ui/searchBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHotel } from '@fortawesome/free-solid-svg-icons'

export const Search = () => {
    return (
        <section className='search__section'>
            <div className="search__box__section">
                <Title
                    value='Busca hoteles de tu interes'
                    type='small'
                    icon={<FontAwesomeIcon icon={faHotel} />}
                />
                <SearchBar />
            </div>
        </section>
    )
}
