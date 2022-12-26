import { useState, useEffect, createRef} from 'react';

import Canvas from './Canvas';
import Performers from './Performer';
import Spawner from './Spawner';
// import gsap from 'gsap';

import './css/App.css';

function App() {
  /**
   * Performers is current page
   */
  const [performers, setPerformers] = useState([]);
  const [formations, setFormations] = useState([[]]);
  const [currPage, setCurrPage] = useState(0);

  const spawner = (id, x, y) => {
    setPerformers([...performers, {
      id: id,
      x: x,
      y: y,
      ref: createRef(),
    }]);
  }

  const update = (id, x, y) => {
    setPerformers(performers.map((a) => a.id === id ? {id: id, x: x, y: y, ref: a.ref} : a));

  }

  // const del = (id) => {
  //   setPerformers(performers.filter(a => a.id !== id))
  // }

  const handleCreate = () => {
    setCurrPage(currPage + 1);
    console.log(formations.length);
    if (currPage === 0 && formations.length === 1){
      setFormations([performers, []]);
    }
    else if (currPage + 1 === formations.length){
      setFormations([...formations, performers])
    }
    else{
      const temp = formations.map((form, i) => i === currPage ? performers : form);
      console.log([...temp, formations[formations.length - 1]]);
      setFormations([...temp, formations[formations.length - 1]]);
      setPerformers(formations[formations.length - 1])
      setCurrPage(formations.length);
    }
  }

  const handlePrev = () => {
    setFormations(formations.map((form, i) => i === currPage ? performers : form));
    setPerformers(formations[currPage - 1]);
    setCurrPage(currPage - 1);
  }

  const handleNext = () => {
    setFormations(formations.map((form, i) => i === currPage ? performers : form));
    setPerformers(formations[currPage + 1]);
    setCurrPage(currPage + 1);
  }

  useEffect(() => {
    console.log(performers);
  }, [performers])

  useEffect(() => {
    console.log(formations);
    console.log(currPage);
    console.log(formations[currPage]);
  }, [formations, currPage])

  return (
    <div className='app'>
      <div className='stage'>
        <Canvas/>
        <button onClick={handlePrev}>
          PrevPage
        </button>
        <button onClick={handleCreate}>
          AddPage
        </button>
        <button onClick={handleNext}>
          NextPage
        </button>
        <div className='spawner'>
          <Spawner spawner={spawner}/>
          <Performers performers={performers} update={update}/>
        </div>
      </div>
    </div>
  );
}

export default App;
