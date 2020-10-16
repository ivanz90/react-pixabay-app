import React, { ReactChild } from 'react'
import { splitByChunks } from '../../../shared/helpers'

interface IBreakPoints {
  default: number;
  [key: number]: number;
}

interface IMasonry {
  breakpointCols: IBreakPoints | number; 
  gutter: number; 
  children: React.ReactNode[];
}



type TColumnCount = {
  current: number
}

const DEFAULT_COLUMNS: number = 2,
  DEFAULT_GUTTER: number = 14

const renderItems = (items: React.ReactNode, columnCount: number, gutter: number) => {
  const childrenArray: Array<React.ReactNode[]> = splitByChunks(React.Children.toArray(items), columnCount)
  
  return (
    <>
      <div style={{ display: 'flex', margin: `${-(gutter / 2)}px` }}>
        {childrenArray.map((column, i) => {
          return (
            <div key={i} style={{ margin: gutter ? gutter / 2 : DEFAULT_GUTTER / 2 }}>
              {column.map((child: any, index: number) => {
                return (
                  <div key={child.key} style={{ marginTop: index === 0 ? '' : `${gutter}px` }}>
                    {child}
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </>
  )
}

const Masonry: React.FC<IMasonry> = ({ breakpointCols, gutter, children }) => {
  const columnCountRef: TColumnCount = React.useRef(0)
  const lastRecalculateAnimationFrame: {current: any} = React.useRef(null)

  if (typeof breakpointCols === 'object' && breakpointCols && breakpointCols.default) {
    columnCountRef.current = breakpointCols.default
  } else if (typeof breakpointCols === 'number') {
    columnCountRef.current = breakpointCols || DEFAULT_COLUMNS
  }

  const reCalculateColumnCount = () => {
    const windowWidth = (window && window.innerWidth) || Infinity
    
    let breakpointColsObject = breakpointCols
    
    if (typeof breakpointColsObject !== 'object') {
      breakpointColsObject = {
        default: breakpointColsObject || DEFAULT_COLUMNS
      }
    }
    
    let matchedBreakpoint = Infinity
    let columns = breakpointColsObject.default || DEFAULT_COLUMNS

    for (let breakpoint in breakpointColsObject) {
      const optBreakpoint = parseInt(breakpoint)
      const isCurrentBreakpoint = optBreakpoint > 0 && windowWidth <= optBreakpoint

      if (isCurrentBreakpoint && optBreakpoint < matchedBreakpoint) {
        matchedBreakpoint = optBreakpoint
        columns = breakpointColsObject[breakpoint]
      }
    }

    columns = Math.max(1, columns || 1)

    if (columnCount !== columns) {
      setColumnCount(columns)
    }
  }

  const reCalculateColumnCountDebounce = () => {
    if (!window || !window.requestAnimationFrame) {
      reCalculateColumnCount()
      return
    }

    if (window.cancelAnimationFrame) {
      window.cancelAnimationFrame(lastRecalculateAnimationFrame.current)
    }

    lastRecalculateAnimationFrame.current = window.requestAnimationFrame(() => {
      reCalculateColumnCount()
    })
  }

  const [columnCount, setColumnCount] = React.useState(columnCountRef.current)

  // Component did mount

  React.useEffect(() => {
    reCalculateColumnCount()
    window.addEventListener('resize', reCalculateColumnCountDebounce)
    return () => window.removeEventListener('resize', reCalculateColumnCountDebounce)
  }, [])

  // Component did update (need optimize)

  // React.useEffect(() => {
  //   console.log('update')
  //   reCalculateColumnCount()
  // }, [children])

  return <>{renderItems(children, columnCount, gutter)}</>
}

export default Masonry
