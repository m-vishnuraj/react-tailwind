function App() {
  return (
    <div>
      <div className="flex  bg-yellow-500 mx-auto">
        <div className="flex-1 w-80 h-10 bg-red-500">1</div>
        <div className="flex-1 w-80 h-10 bg-green-500">2</div>
        <div className="flex-1 w-80 h-10 bg-blue-500">3</div>
      </div>
      <hr />
      <div className="flex  bg-yellow-500 mx-auto">
        <div className="flex-initial w-80 h-10 bg-red-500">1</div>
        <div className="flex-initial w-80 h-10 bg-green-500">2</div>
        <div className="flex-initial w-80 h-10 bg-blue-500">3</div>
      </div>
      <hr />
      <div className="flex  bg-yellow-500 mx-auto">
        <div className="flex-auto w-80 h-10 bg-red-500">1</div>
        <div className="flex-auto w-80 h-10 bg-green-500">2</div>
        <div className="flex-auto w-80 h-10 bg-blue-500">3</div>
      </div>
      <hr />
      <div className="flex  bg-yellow-500 mx-auto">
        <div className="flex-none w-80 h-10 bg-red-500">1</div>
        <div className="flex-none w-80 h-10 bg-green-500">2</div>
        <div className="flex-none w-80 h-10 bg-blue-500">3</div>
      </div>
      <hr />
      <div className="flex  bg-yellow-500 mx-auto">
        <div className="flex-grow w-80 h-10 bg-red-500">1</div>
        <div className="flex-grow w-80 h-10 bg-green-500">2</div>
        <div className="flex-grow w-80 h-10 bg-blue-500">3</div>
      </div>
      <hr />
      <div className="flex  bg-yellow-500 mx-auto">
        <div className="flex-grow-0 w-80 h-10 bg-red-500">1</div>
        <div className="flex-grow-0 w-80 h-10 bg-green-500">2</div>
        <div className="flex-grow-0 w-80 h-10 bg-blue-500">3</div>
      </div>
      <hr />
      <div className="flex  bg-yellow-500 mx-auto">
        <div className="flex-shrink w-80 h-10 bg-red-500">1</div>
        <div className="flex-shrink w-80 h-10 bg-green-500">2</div>
        <div className="flex-shrink w-80 h-10 bg-blue-500">3</div>
      </div>
      <hr />
      <div className="flex bg-yellow-500 mx-auto">
        <div className="flex-shrink-0 w-80 h-10 bg-red-500">1</div>
        <div className="flex-shrink-0 w-80 h-10 bg-green-500">2</div>
        <div className="flex-shrink-0 w-80 h-10 bg-blue-500">3</div>
      </div>
      <hr />
      <div className="flex bg-yellow-500 mx-auto">
        <div className="order-3 w-80 h-10 bg-red-500">1</div>
        <div className="order-1 w-80 h-10 bg-green-500">2</div>
        <div className="order-2 w-80 h-10 bg-blue-500">3</div>
      </div>
    </div>
  )
}

export default App;
