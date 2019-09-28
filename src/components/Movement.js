import React, { useEffect, useState } from 'react'
// import Konva from 'konva'
import axios from 'axios'
import axiosWithAuth from '../util/axiosWithAuth';
// import ArrowKeysReact from 'arrow-keys-react'

//hooks

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

export default function Movement() {
  // const stage = new Konva.Stage({
  //   container: 'root',
  //   width: window.innerWidth,
  //   height: window.innerHeight
  // });

  // const layer = new Konva.Layer();
  // stage.add(layer);

  // const circle = new Konva.Circle({
  //   x: stage.width() / 2,
  //   y: stage.height() / 2 + 10,
  //   radius: 20,
  //   fill: 'yellow',
  //   stroke: 'black',
  //   strokeWidth: 2
  // });

  // layer.add(circle);
  // layer.draw();

  // const container = stage.container();

  // // make it focusable
  // container.tabIndex = 1;
  // container.focus();

  // const DELTA = 5;

  // container.addEventListener('keydown', function(e) {
  //   // 37-left, 38-up, 39-right, 40-down
  //   if (e.keyCode === 37) {
  //     circle.x(circle.x() - DELTA);
  //   } else if (e.keyCode === 38) {
  //     circle.y(circle.y() - DELTA);
  //   } else if (e.keyCode === 39) {
  //     circle.x(circle.x() + DELTA);
  //   } else if (e.keyCode === 40) {
  //     circle.y(circle.y() + DELTA);
  //   } else {
  //     return;
  //   }
  //   e.preventDefault();
  //   layer.batchDraw();
  // });
// ------------------------------------
  const [values, setValues] = useState({rooms:{}})
  const [playerInfo, setPlayerInfo] = useState({})
  const [roomInfo, setRoomInfo] = useState({})
  const [messageBoard, setMessageBoard] = useState({})
  // function setHeaders() {
  //   const token = `Token ${localStorage.getItem('jwt')}`;
  //   // const token = `Token 2d905f361f8ce895b7df1405a5f3bf823e122a97`;
  //   const headers = { "Authorization": token,
  //   'Content-Type': 'application/json;charset=UTF-8'
  //   };
  //   return headers;
  // }

  // const auth = setHeaders();
  // console.log(headers)
  useEffect(() => {
    fetchRooms()
    getInfo()
    movementInput()
    // console.log(values)
  }, [] )

  const fetchRooms = () => {
    // const token = `Token ${localStorage.getItem('jwt')}`;
      axiosWithAuth()
        .get(
        // .post(
            '/api/rooms/',
            // 'https://cors-anywhere.herokuapp.com/https://lambdamud-crawler.herokuapp.com/api/adv/init/',
            // 'https://cors-anywhere.herokuapp.com/https://lambdamud-crawler.herokuapp.com/api/adv/move/',
            // {direction:"n"},
        )
        .then(res => {
          console.log(res)
          setValues(res.data)
          // console.log(values)
        })
        .catch(err => console.log(err))
      }

  const getInfo = () => {
    axiosWithAuth()
      .get(
          '/api/adv/init/',
      ).then(res => {
        setPlayerInfo(res.data)
        setRoomInfo(res.data)
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }




  const movementInput = (e) => {
    axiosWithAuth()
      .post(
        '/api/adv/move/',
        {direction:e}
        )
        .then(res=>{
          console.log(res)
          setMessageBoard(res.data)
          setRoomInfo(res.data.room)
        })
        .catch(err=> console.log(err))
  }

  const down = useKey('arrowdown')
  const up = useKey('arrowup')
  const left = useKey('arrowleft')
  const right = useKey('arrowright')




  // fetchRooms()
    return (
      <div>
        {messageBoard.message ? messageBoard.message : null}
        <br/>
        {roomInfo.title}
        <br/>
        {roomInfo.description}
        <br/>
        Where do you want to go...use arrow keys
        <br/>
        {/* <button onClick={() => movementInput("n")}>N</button>  */}
        {down &&
          movementInput("s")
        }

        {up &&
          movementInput("n")
        }

        {left &&
          movementInput("w")
        }

        {right &&
          movementInput("e")
        }
      </div>
    )



}
