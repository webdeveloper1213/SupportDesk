import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { getTickets, reset } from '../features/tickets/ticketSlice';
import { getTickets , reset } from '../features/tickets/ticket-slice';
import Spinner from '../components/Spinner'
import React from 'react'

const Tickets = () => {
    const { tickets, isLoading, isSuccess } = useSelector(
        (state) => state.tickets
      )
    
      const dispatch = useDispatch()
    
      useEffect(() => {
        return () => {
          if (isSuccess) {
            dispatch(reset())
          }
        }
      }, [dispatch, isSuccess])
    
      useEffect(() => {
        dispatch(getTickets())
      }, [dispatch])
    
      if (isLoading) {
        return <Spinner />
      }
    

  return (
    <div>Tickets {tickets}</div>
  )
}

export default Tickets