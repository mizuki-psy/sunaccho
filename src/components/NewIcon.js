import React from 'react'
import moment from 'moment'
import Img from 'gatsby-image'

const NewIcon = ({ date }) => {
  const Today= moment(new Date())
  const Posted = moment( date )
  const Diff = Today.diff(Posted, 'days')
  return (
    <div>
      { Diff < 3 ? (
        <img src="/img/NewPostSmall.png" width="40" align="left" alt='NEW' />
      ) : (
        <></>
      )
      }
    </div>
  )
}

export default NewIcon
