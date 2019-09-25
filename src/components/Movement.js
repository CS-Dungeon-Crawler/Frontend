import React, { useState } from 'react'
import Konva from 'konva'
import axios from 'axios'
export default function Movement() {
  const stage = new Konva.Stage({
    container: 'root',
    width: window.innerWidth,
    height: window.innerHeight
  });

  const layer = new Konva.Layer();
  stage.add(layer);

  const circle = new Konva.Circle({
    x: stage.width() / 2,
    y: stage.height() / 2 + 10,
    radius: 20,
    fill: 'yellow',
    stroke: 'black',
    strokeWidth: 2
  });

  layer.add(circle);
  layer.draw();

  const container = stage.container();

  // make it focusable
  container.tabIndex = 1;
  container.focus();

  const DELTA = 5;

  container.addEventListener('keydown', function(e) {
    // 37-left, 38-up, 39-right, 40-down
    if (e.keyCode === 37) {
      circle.x(circle.x() - DELTA);
    } else if (e.keyCode === 38) {
      circle.y(circle.y() - DELTA);
    } else if (e.keyCode === 39) {
      circle.x(circle.x() + DELTA);
    } else if (e.keyCode === 40) {
      circle.y(circle.y() + DELTA);
    } else {
      return;
    }
    e.preventDefault();
    layer.batchDraw();
  });
// ------------------------------------
  const [values, setValues] = useState({rooms:{}})

  function setHeaders() {
    const token = `Token ${localStorage.getItem('jwt')}`;
    const headers = { Authorization: token };
    return headers;
  }

  const headers = setHeaders();
  console.log(headers)


  const fetchRooms = () => {
      axios
        .post('https://lambdamud-crawler.herokuapp.com/api/adv/genworld/', {size:20},  headers.Authorization )
        .then(res => {
          console.log(res)
        })
        .catch(err => console.log(err))
      }

  fetchRooms()

    return (
      <div>
        Select Size of Room
      </div>
    )
  


}
