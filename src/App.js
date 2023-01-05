import { useState, useEffect, useRef} from 'react';

import Canvas from './Canvas';
import Performers from './Performer';
import Spawner from './Spawner';

import './css/App.css';

function App() {
  /**
   * Performers is current page
   */
  const [performers, setPerformers] = useState([]);
  const [formations, setFormations] = useState([[]]);
  const [currPage, setCurrPage] = useState(0);
  const [nameField, setNameField] = useState("");
  const [focus, setFocus] = useState(0);

  const prevCoords = useRef(null);

  // const refs = useRef([]);

  const spawner = (id, x, y) => {
    setPerformers([...performers, {
      id: id,
      valid: true,
      x: x,
      y: y,
      name: id,
    }]);
    // refs.current=[...refs.current, createRef()];
  }

  const focusPerson = (id) => {
    setFocus(id);
  }

  const update = (id, x, y) => {
    setPerformers(performers.map((a) => a.id === id ? {id: id, valid: true, x: x, y: y} : a));
  }

  // const del = (id) => {
  //   setPerformers(performers.filter(a => a.id !== id))
  // }

  const handleCreate = () => {
    setCurrPage(currPage + 1);
    console.log(formations.length);
    if (currPage === 0 && formations.length === 1){
      setFormations([performers, performers]);
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

  const handleField = (e) => {
    setNameField(e.target.value);
  }

  useEffect(() => {
    // console.log("Performers: ", performers);
    // console.log("Formations: ", formations);
    console.log("Name: ", nameField);
    console.log("Focus: ", focus)
  }, [formations, performers, currPage, nameField, focus])
  
  useEffect(() => {
    // Sets previous locations
    prevCoords.current = performers;
  }, [currPage, performers])

  return (
    <div className='app'>
      <div className='stage'>
        <Canvas/>
        <button onClick={handlePrev} disabled={currPage - 1 < 0}>
          PrevPage
        </button>
        <button onClick={handleCreate}>
          AddPage
        </button>
        <button onClick={handleNext} disabled={currPage + 1 >= formations.length}>
          NextPage
        </button>
        <input type="text" onChange={handleField} value={nameField}/>
        <div className='spawner'>
          <Spawner spawner={spawner}/>
          <Performers 
            currCoords={performers} 
            currPage={currPage} 
            prevCoords={prevCoords.current} 
            // refs={refs} 
            focus={focus}
            update={update} 
            focusPerson={focusPerson}/>
        </div>
      </div>
    </div>
  );
}

export default App;
