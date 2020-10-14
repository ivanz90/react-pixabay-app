import React from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { searchOperations, searchSelectors } from '../../redux/ducks/search'
import { IRootState } from '../../redux/ducks/search/types'

type TPrevPage = {
  current: number | null
}

const InfinityScroll: React.FC<{children: React.ReactNode}> = ({ children }) => {
  
  const prevPage: TPrevPage = React.useRef(null)
  const dispatch = useDispatch()
  const { page, isLoading } =  useSelector((state: IRootState) => searchSelectors.selectInfinityScrollSettings(state), shallowEqual)

  const fetchMoreItems = React.useCallback(
    (params: string, p: number) => {
      p !== prevPage.current && dispatch(searchOperations.fetchMore(params, p))
    },
    [dispatch]
  )

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [page, isLoading])

  React.useEffect(() => { 
    prevPage.current = page - 1
  }, [page])

  const handleScroll = (): void => {
    const scrollHeight: number = document.documentElement.scrollHeight
    const scrollPos: number = window.innerHeight + document.documentElement.scrollTop

    if (+((scrollHeight - 300) >= scrollPos) / scrollHeight === 0) {
      const params = window.location.search[0] === '?' ? window.location.search.slice(1) : window.location.search
      !isLoading && fetchMoreItems(params, page)
    }
    return
  }
 
  return <>{children}</>
}

export default InfinityScroll
