import React, { Fragment, useEffect, useState } from 'react'
import socketIOClient from 'socket.io-client'
import Hero from '../components/Hero'
import Content from '../components/Content'
import SCRCarousel from '../components/Carousel/Carousel'
const ENDPOINT = 'http://0ed93a492609.ngrok.io'

const Homepage = () => {
  const [response, setResponse] = useState('')
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT)
    socket.on('FromAPI', data => {
      setResponse(data)
    })
  }, [])

  return <Fragment>Socket response: {response}</Fragment>
}

export default Homepage
