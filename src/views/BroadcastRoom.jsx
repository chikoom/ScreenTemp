import React, { Fragment, useEffect, useState } from 'react'
import socketIOClient from 'socket.io-client'
import Hero from '../components/Hero'
import Content from '../components/Content'
import SCRCarousel from '../components/Carousel/Carousel'
import { observer } from 'mobx-react'
import axios from 'axios'
const ENDPOINT = 'http://0ed93a492609.ngrok.io'
<<<<<<< HEAD
const ENDPOINT2 = "https://c3671c6ed694.ngrok.io"
const ID = 321;

=======
const ID = 321
>>>>>>> 491ffa1a6cc328c313bb2c61b594415165ee929b

const Homepage = observer(() => {
  const [response, setResponse] = useState('')

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `http://0ed93a492609.ngrok.io/broadcast/534534534`,
        { params: { ID } }
      )
      console.log(response.data)
      if (!response.data.error) {
        const socket = socketIOClient(ENDPOINT)
        socket.on('FromAPI', data => {
          setResponse(data)
        })
      } else {
        console.log(response.data.error)
      }
    }
    // getData()
    // socket.emit("toAPI" , )
  }, [])

  return <Fragment>Socket response: {response}</Fragment>
})

export default Homepage
