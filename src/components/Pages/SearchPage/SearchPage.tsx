import React, { useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import Search from '../../Forms/Search'
import Gallery from '../../Gallery'
import InfinityScroll from '../../InfinityScroll'
import useQuery from '../../../shared/useQuery'
import { searchOperations } from '../../../redux/ducks/search'
import { Container } from '../../../shared/style'
import { SearchSection } from './styles'

const SearchPage: React.FC = () => {
  const query = useQuery()
  const dispatch = useDispatch()

  const fetchData = useCallback(
    (data) => {
      dispatch(searchOperations.submitSearch(data))
    },
    [dispatch]
  )

  useEffect(() => {
    fetchData(query.toString())
  }, [query, fetchData])

  return (
    <SearchSection>
      <Container>
        <Search />
        <InfinityScroll>
          <Gallery />
        </InfinityScroll>
      </Container>
    </SearchSection>
  )
}

export default SearchPage
