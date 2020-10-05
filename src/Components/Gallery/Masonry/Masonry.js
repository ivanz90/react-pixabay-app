import React from 'react'

const DEFAULT_COLUMNS = 2,
  DEFAULT_GUTTER = 14

const selectFromArray = (arr, step, acc = []) => {
  if (arr.length && step >= 0) {
    let selected = arr.filter((_, index) => index % step === 0)
    acc.push(selected)
    let newArr = arr.filter((_, index) => index % step !== 0)
    step -= 1
    selectFromArray(newArr, step, acc)
  }

  return acc
}

const renderItems = (items, columnCount, gutter) => {
  const childrenArray = selectFromArray(React.Children.toArray(items), columnCount)

  return (
    <>
      <div style={{ display: 'flex', margin: `${-(gutter / 2)}px` }}>
        {childrenArray.map((column, i) => {
          return (
            <div key={i} style={{ margin: gutter ? gutter / 2 : DEFAULT_GUTTER / 2 }}>
              {column.map((child, index) => {
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

const Masonry = ({ items, breakpointCols, gutter, children }) => {
  const columnCountRef = React.useRef()
  const lastRecalculateAnimationFrame = React.useRef(null)

  if (breakpointCols && breakpointCols.default) {
    columnCountRef.current = breakpointCols.default
  } else {
    columnCountRef.current = parseInt(breakpointCols) || DEFAULT_COLUMNS
  }

  const reCalculateColumnCount = () => {
    const windowWidth = (window && window.innerWidth) || Infinity
    let breakpointColsObject = breakpointCols
    if (typeof breakpointColsObject !== 'object') {
      breakpointColsObject = {
        default: parseInt(breakpointColsObject) || DEFAULT_COLUMNS
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

    columns = Math.max(1, parseInt(columns) || 1)

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

  // Component did update

  React.useEffect(() => {
    reCalculateColumnCount()
  }, [JSON.stringify(items)])

  return <>{renderItems(children, columnCount, gutter)}</>
}

export default Masonry
