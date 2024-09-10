//  import logo from './logo.svg';
import './App.css';
import { Dropzone } from './Dropzone';

function App() {
  return (
  <>
  <div className="flex h-screen min-w-64 items-center justify-center ">
  <div className="min-w-96  max-w-sm mx-auto p-6 shadow-lg rounded-md bg-white">
    <h1 className="text-2xl font-bold mb-4 text-center"> Font upload</h1>
    <div className="bg-gray-200 p-4 rounded">
      <Dropzone />
    </div>
  </div>
  <div> 
    <h3> View fonts </h3>
  </div>
  <div> 
    <h3> Create Font groups etc </h3>
  </div>
</div>
  
    </>
  );
}

export default App;
