import React, { FC, useState, useEffect } from 'react'
import classes from './Paginator.module.scss'
import Button from '../Button/Button'

interface IPaginatorProps {
  totalCount: number
  count: number
  page: number
  onPageChanged: (value: number) => void
}

const Paginator: FC<IPaginatorProps> = props => {
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
      <Button
        key={index}
        variety={value === props.page ? 'green' : undefined}
        onClick={() => {
          props.onPageChanged(value)
        }}
      >
        {value}
      </Button>
    )
  })

  const buttonsListFiltered = buttonsList.filter((value, index) => {
    return index >= currentPortionMinItem && index <= currentPortionMaxItem
  })

  return (
    <div className={classes.pagination}>
      {currentPortion > 0 ? (
        <Button onClick={() => setCurrentPortion(currentPortion - 1)}>
          Prev
        </Button>
      ) : null}
      {buttonsListFiltered}
      {currentPortion < Math.ceil(pagesCount / portionSize) ? (
        <Button onClick={() => setCurrentPortion(currentPortion + 1)}>
          Next
        </Button>
      ) : null}
    </div>
  )
}

export default Paginator
