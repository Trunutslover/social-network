import React, { useState, useEffect } from 'react'
import classes from './Paginator.module.scss'

const Paginator = props => {
  const pagesCount = Math.ceil(props.totalCount / props.count)
  const buttons = []
  const portionSize = 10
  const [currentPortion, setCurrentPortion] = useState(0)
  let currentPortionMinItem = portionSize * currentPortion
  let currentPortionMaxItem = portionSize * (currentPortion + 1) - 1

  useEffect(() => {
    setCurrentPortion(Math.floor((props.page - 1) / portionSize))
  }, [props.page])

  for (let i = 0; i <= pagesCount; i++) {
    buttons.push(i + 1)
  }

  const buttonsList = buttons.map((value, index) => {
    return (
      <button
        key={index}
        className={`${classes.pageButton} ${value === props.page && classes.activePage}`}
        onClick={() => {
          props.onPageChanged(value)
        }}
      >
        {value}
      </button>
    )
  })

  const buttonsListFiltered = buttonsList.filter((value, index) => {
    return index >= currentPortionMinItem && index <= currentPortionMaxItem
  })

  return (
    <div className={classes.pagination}>
      {currentPortion > 0 ? (
        <button className={classes.prevButton} onClick={() => setCurrentPortion(currentPortion - 1)}>
          Prev
        </button>
      ) : null}
      {buttonsListFiltered}
      {currentPortion < Math.ceil(pagesCount / portionSize) ? (
        <button className={classes.nextButton} onClick={() => setCurrentPortion(currentPortion + 1)}>
          Next
        </button>
      ) : null}
    </div>
  )
}

export default Paginator
