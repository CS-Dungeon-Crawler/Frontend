import React from 'react'
import Konva from 'konva'

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
  return (
    <div>
      
    </div>
  )
}
