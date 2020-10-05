import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchOperations, searchSelectors } from '../../redux/ducks/search'

const InfinityScroll = ({ children }) => {
  const page = useSelector((state) => searchSelectors.selectPage(state))
  const isPending = useSelector(state => searchSelectors.selectIsPending(state)) 
  
  const dispatch = useDispatch()

  const fetchMoreItems = React.useCallback(
    (params, p) => {
      dispatch(searchOperations.fetchMore(params, p))
    },
    [dispatch]
  )

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [page, isPending])

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight
    const scrollPos = window.innerHeight + document.documentElement.scrollTop

    if (((scrollHeight - 300) >= scrollPos) / scrollHeight == 0) {
      const params = window.location.search[0] === '?' ? window.location.search.slice(1) : window.location.search
      !isPending && fetchMoreItems(params, page)
    }
    return
    
    // if (
    //   window.innerHeight + document.documentElement.scrollTop <
    //     document.documentElement.offsetHeight - 100 ||
    //   window.innerHeight + document.documentElement.scrollTop >
    //     document.documentElement.offsetHeight + 100
    // )
    //   return
    // if ((scrollHeight - scrollPos) / scrollHeight == 0) return
    // if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return
    // const params =
    //   window.location.search[0] === '?' ? window.location.search.slice(1) : window.location.search
    // fetchMoreItems(params, page)
  }

  return <>{children}</>
}

export default InfinityScroll
