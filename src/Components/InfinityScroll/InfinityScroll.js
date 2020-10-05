import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchOperations, searchSelectors } from '../../redux/ducks/search'

const InfinityScroll = ({ children }) => {
  const page = useSelector((state) => searchSelectors.selectPage(state))
  const isPending = useSelector(state => searchSelectors.selectIsPending(state))
  const prevPage = React.useRef(null)

  const dispatch = useDispatch()

  const fetchMoreItems = React.useCallback(
    (params, p) => {
      p > prevPage.current && dispatch(searchOperations.fetchMore(params, p))
    },
    [dispatch]
  )

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [page, isPending])

  React.useEffect(() => { 
    prevPage.current = page - 1
  }, [page])

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight
    const scrollPos = window.innerHeight + document.documentElement.scrollTop

    if (((scrollHeight - 300) >= scrollPos) / scrollHeight == 0) {
      const params = window.location.search[0] === '?' ? window.location.search.slice(1) : window.location.search
      !isPending && fetchMoreItems(params, page)
    }
    return
  }

  return <>{children}</>
}

export default InfinityScroll
