import React, {useState, useEffect} from 'react'
// import Konva from 'konva';
import { Stage, Layer, Rect, Circle, Text } from 'react-konva'
import axiosWithAuth from '../util/axiosWithAuth';
// import axios from 'axios'

import ItemList from './Inventory';

function useKey(key) {
  const [pressed, setPressed] = useState(false)

  const match = event => key.toLowerCase() == event.key.toLowerCase()

  const onDown = event => {
    if(match(event)) setPressed(true)
  }

  const onUp = event => {
    if(match(event)) setPressed(false)
  }

  useEffect(() => {
    window.addEventListener('keydown', onDown)
    window.addEventListener('keyup', onUp)
    return () => {
      window.removeEventListener('keydown', onDown)
      window.removeEventListener('keyup', onUp)
    }
  }, [key])

  return pressed
}


export default function Map() {
  const [rooms, setRooms] = useState([])
  const [player, setPlayer] = useState({inventory: [], treasure: []})
  const [dots, setDots] = useState([])
  useEffect(() => {
    fetchRooms();
    initiate();
    movementInput();
  }, [])

  useEffect(() => {
    drawGrid()
  }, [rooms, player])

  const fetchRooms = async() => {
    const roomRes = await axiosWithAuth().get('/api/rooms/')
    setRooms(roomRes.data)
  }

  const initiate = async() => {
    const playerRes = await axiosWithAuth().get('/api/adv/init/')
    setPlayer(playerRes.data)
  }

  const drawGrid = () => {
    const dotsArr = []
    const num = Math.sqrt(rooms.length);
    const space = (480) / (num + 1);
    let roomIndex = 0

    for(let y = 1; y <= num; y ++) {
      for(let x = 1; x <= num; x ++) {
        const lat = y * space
        const lon = x * space
        const bool = player.room_id === roomIndex + 1
        const color = bool ? 'red' : 'black';
        const size = bool ? 8 : 4
        dotsArr.push(<>
          <Circle x={lon} y={lat} radius={size} fill={color} />
          {rooms[roomIndex].e_to !== 0 && <Rect x={lon - 1} y={lat - 1} width={space} height={2} fill='black' /> }
          {rooms[roomIndex].s_to !== 0 && <Rect x={lon - 1} y={lat - 1} width={2} height={space} fill='black' /> }
          </>
        )
        roomIndex++
      }
    }
    setDots(dotsArr);
  } 

  // const move = async(direction) => {
  //   try {
  //     await axiosWithAuth().post('/api/adv/move/', {direction})
  //     initiate()
  //     // console.log(resArr)
  //   } catch(err) {
  //     console.log(err)
  //   }
  // }

  const movementInput = (e) => {
    axiosWithAuth()
      .post(
        '/api/adv/move/',
        {direction:e}
        )
        .then(res=>{
          // console.log(res)
          // setMessageBoard(res.data)
          // setRoomInfo(res.data.room)
          initiate();
        })
        .catch(err=> console.log(err))
  }



  const take = async(id) => {
    await axiosWithAuth().post('/api/adv/take', {id})
    initiate();
  }

  const drop = async(id) => {
    await axiosWithAuth().post('/api/adv/drop', {id})
    initiate();
  }

  const down = useKey('arrowdown')
  const up = useKey('arrowup')
  const left = useKey('arrowleft')
  const right = useKey('arrowright')

  return (
    <div className='game-hud'>
      <div className='map-display'>
        <div className='room-description'>
          <p>{player.title}</p>
          <p>{player.description}</p>
        </div>
        <Stage width={480} height={480} className="map-container">
          <Layer>
            {rooms.length === 0 ? <Text test='Loading' fontSize={26} /> : dots}
          </Layer>
        </Stage>
      </div>
      <div className='game-controls'>
        {/* <div>
          {player.inventory && player.inventory.map(item => (
            <p>{item.name}   <span onClick={() => drop(item.id)}>X</span></p>
          ))}
        </div> */}
        <ItemList inventory={player.inventory} interact={drop} />
        <div className='btn-group'>
          <button id='north-btn' onClick={() => movementInput('n')}>North</button>
          <button id='west-btn' onClick={() => movementInput('w')}>West</button>
          <button id='south-btn' onClick={() => movementInput('s')}>South</button>
          <button id='east-btn' onClick={() => movementInput('e')}>East</button>
        </div>
        <ItemList full={player.inventory.length < 5 ? false : true} inventory={player.treasure} interact={take} />
        {/* <div>
          <p>{player.name}</p>
          {player.treasure && player.treasure.map(item => (
            <p>{item.name}  {player.inventory.length < 5 && <span onClick={() => take(item.id)}>X</span>}</p>
          ))}
        </div> */}
      </div>

        {down && movementInput("s") }

        {up && movementInput("n") }

        {left && movementInput("w") }

        {right && movementInput("e") } 
    </div>
  )
}
