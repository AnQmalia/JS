/*function addRandomPoint() {
  const success = graph.tryAddPoint(
    new Point(Math.random() * myCanvas.width, Math.random() * myCanvas.height),
  );
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  graph.draw(ctx);
  console.log(success);
}

function addRandomSegment() {
  const index1 = Math.floor(Math.random() * graph.points.length);
  const index2 = Math.floor(Math.random() * graph.points.length);

  const success = graph.tryAddSegment(
    new Segment(graph.points[index1], graph.points[index2]),
  );
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  graph.draw(ctx);
  console.log(success);
}

function removeRandomSegment() {
  if (graph.segments.length == 0) {
    console.log("no segments");
    return;
  }
  const index = Math.floor(Math.random() * graph.segments.length);
  graph.removeSegment(graph.segments[index]);
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  graph.draw(ctx);
}

function removeAll() {
  graph.dispose();
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  graph.draw(ctx);
}

function removeRandomPoint() {
  if (graph.points.length == 0) {
    console.log("no points");
    return;
  }
  const index = Math.floor(Math.random(), graph.points.length);
  graph.removePoint(graph.points[index]);
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  graph.draw(ctx);
}*/

const ctx = myCanvas.getContext("2d");

const graphString = localStorage.getItem("graph");
const graphInfo = graphString ? JSON.parse(graphString) : null;
const graph = graphInfo ? Graph.load(graphInfo) : new Graph();
const viewport = new Viewport(myCanvas);
const graphEditor = new GraphEditor(viewport, graph);

animate();

function animate() {
  viewport.reset();
  graphEditor.display();
  requestAnimationFrame(animate);
}

function dispose() {
  graphEditor.dispose();
}

function save() {
  localStorage.setItem("graph", JSON.stringify(graph));
}
