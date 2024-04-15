import {
  decrement,
  increment,
  incrementByValue,
} from './Redux/Features/CounterSlice';
import { useAppDispatch, useAppSelector } from './Redux/Hooks';

function App() {
  const count = useAppSelector(state => state.counter.count);
  const dispatch = useAppDispatch();

  const renderAdditionalDivs = () => {
    const additionalDivs = [];
    // Loop to generate divs for each multiple of 5 up to the current count
    for (let i = 5; i <= count; i += 5) {
      additionalDivs.push(<div className='mx-2'>
        <div key={i} className=" flex gap-2">
        <div className='h-8 w-1 bg-slate-300'>
        </div>
        <div className='h-8 w-1 bg-slate-300'>
        </div>
        <div className='h-8 w-1 bg-slate-300'>
        </div>
        <div className='h-8 w-1 bg-slate-300'>
        </div>
        <div className='h-8 w-1 bg-slate-300'>
        </div>
      </div>
      </div>);
    }
    return additionalDivs;
  };

  return (
    <div>
      <div className="flex w-full justify-center items-center h-screen">
      <div className="flex w-[550px] border border-gray-400 rounded justify-center p-8 ">
        <button
          onClick={() => dispatch(increment())}
          className="px-3 py-2 rounded-md font-semibold text-xl text-white bg-green-600 mr-2"
        >
          Increment
        </button>
        <button className="text-3xl font-bold">{count}</button>
        <button
          onClick={() => dispatch(decrement())}
          className="px-3 py-2 rounded-md font-semibold text-xl text-white bg-red-600 ml-2"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(incrementByValue({ value: 5 }))}
          className="px-3 py-2 rounded-md font-semibold text-xl text-white bg-red-600 ml-2"
        >
          Increment By 5
        </button>
      </div>
      
      </div>
      
    </div>
  );
}

export default App;
