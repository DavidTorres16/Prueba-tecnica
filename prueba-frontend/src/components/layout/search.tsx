import { Title } from '@components/ui/Title'
import { SearchBar } from '@components/ui/searchBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHotel } from '@fortawesome/free-solid-svg-icons'
import { useAppSelector } from '@app/hooks'
import { AdminSearchBar } from './adminSearch'

type Props = {
    title:string,
}

export const Search = ({title} : Props) => {

    const userData = useAppSelector((state: any) => state.user.userPermissions)

    return (
        <section className='search__section'>
            <div className="search__box__section">
                <Title
                    value={title}
                    type='small'
                    icon={<FontAwesomeIcon icon={faHotel} />}
                />
                {userData == "admin"
                ?
                <AdminSearchBar/>
                :
                <SearchBar />
                }
            </div>
        </section>
    )
}
