function App() {
  return (
    <div>
      <div className="flex bg-yellow-500 mx-auto">
        <div className="w-10 h-10 bg-red-500">1</div>
        <div className="w-10 h-10 bg-green-500">2</div>
        <div className="w-10 h-10 bg-blue-500">3</div>
      </div>
      <div className="flex flex-col bg-violet-400 mx-auto">
        <div className="w-10 h-10 bg-red-500">1</div>
        <div className="w-10 h-10 bg-green-500">2</div>
        <div className="w-10 h-10 bg-blue-500">3</div>
      </div>
      <div className="flex flex-row-reverse bg-orange-400 mx-auto">
        <div className="w-10 h-10 bg-red-500">1</div>
        <div className="w-10 h-10 bg-green-500">2</div>
        <div className="w-10 h-10 bg-blue-500">3</div>
      </div>
      <div className="flex flex-col-reverse bg-yellow-400 mx-auto">
        <div className="w-10 h-10 bg-red-500">1</div>
        <div className="w-10 h-10 bg-green-500">2</div>
        <div className="w-10 h-10 bg-blue-500">3</div>
      </div>

 
    </div>
  )
}

export default App;
