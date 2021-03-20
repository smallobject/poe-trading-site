import SideBar from './components/SideBar';
import Search from './components/Search';
import ItemResult from './components/ItemResult';
import './assets/output.css';

function App() {
  return (
    <div className=''>
      <SideBar />
      <div className='w-full'>
        <div className='flex justify-center items-center'>
          <Search />
        </div>
        <div className='flex justify-center items-center'>
          <ItemResult />
        </div>
      </div>
    </div>
  );
}

export default App;
