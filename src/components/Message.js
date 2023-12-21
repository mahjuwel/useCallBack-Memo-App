import React, {memo} from 'react'

const Message = ({messageNumber, onHandleIncrement}) => {
console.log('message rendering');

  return (
    <div>
      <p>Message number: {messageNumber}</p>
      <button onClick={onHandleIncrement}>Increment Message</button>
    </div>
  )
}

export default memo(Message);