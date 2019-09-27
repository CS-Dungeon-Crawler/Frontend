import React, {useState, useEffect} from 'react'
// import Konva from 'konva';
import { Stage, Layer, Rect, Circle, Text } from 'react-konva'
import axiosWithAuth from '../util/axiosWithAuth';

export default function Map() {
  const [rooms, setRooms] = useState([])
  const [dots, setDots] = useState([])
  useEffect(() => {
    fetchRooms();
  }, [])

  useEffect(() => {
    drawGrid()
  }, [rooms])

  const fetchRooms = async() => {
    const roomRes = await axiosWithAuth().get('/api/rooms/')
    setRooms(roomRes.data)
  }

  const drawGrid = () => {
    const dotsArr = []
    const num = Math.sqrt(rooms.length);
    const space = 580 / num;
    let roomIndex = 0

    for(let y = 1; y <= num; y ++) {
      for(let x = 1; x <= num; x ++) {
        const lat = x * space
        const lon = y * space
        dotsArr.push(<>
          <Circle x={lon} y={lat} radius={4} fill='black' />
          {/* <Layer> */}
            {/* <Rect x={lat - 1} y={lon - 1} width={space} height={2} fill='white' /> */}
          {rooms[roomIndex].e_to !== 0 && <Rect x={lat - 1} y={lon - 1} width={space} height={2} fill='black' /> }
          {rooms[roomIndex].s_to !== 0 && <Rect x={lat - 1} y={lon - 1} width={2} height={space} fill='black' /> }
          {/* </Layer> */}
          </>
        )
        roomIndex++
      }
    }
    setDots(dotsArr);
  }

  return (
    <Stage width={600} height={600}>
      <Layer>
        {rooms.length === 0 ? <Text test='Loading' fontSize={26} /> : dots}
        {/* <Circle x={20} y={0} radius={4} fill='black' /> */}
      </Layer>
    </Stage>
  )
}
