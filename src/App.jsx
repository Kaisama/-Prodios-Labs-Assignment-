import CodeEditor from './components/CodeEditor';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header leading-relaxed text-center">
        <h1 className="text-2xl font-bold text-[2rem] mb-5 mt-[8rem] ">react-simple-code-editor</h1>
        <div className='flex flex-col gap-3'>
          <div>
            <h1 className='text-[1rem] ml-[12rem] mr-[12rem]'>A simple no-frills code editor with syntax highlighting.</h1>
          </div>
          <div>
            <button className="border-1 px-3 bg-black text-white hover:bg-red-500" >
              <a href="https://github.com/Kaisama/-Prodios-Labs-Assignment-/tree/main/src"> Github</a>
             
            </button>
          </div>
        </div>
      </header>
      <main >
        <CodeEditor />
      </main>
    </div>
  );
}

export default App;
