import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'



function App() {
  const [mood, setmood] = useState(false);

  const targetmood = () => {
    setmood(!mood);
  };

  return (
    <div className={mood ? 'bg-green-800 min-h-screen' : ' min-h-screen'}>
      {/* Header Section */}
      <header className='text-center p-5'>
        <img
          src='hollywood.webp' // make sure this file is in "public" folder
          alt='Hollywood'
          className='mx-auto w-full max-w-3xl rounded-lg shadow-lg object-cover'
        />
        <h1 className='text-2xl md:text-4xl mt-5 font-bold'>
          Find <span className='text-pink-500'>movies</span> you'll Enjoy
          <br />
          Without the Hassle
        </h1>
      </header>

      {/* Movie Cards */}
      <section className='mt-10 px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {['project1.jpeg', 'project2.jpg', 'project3.jpeg', 'project4.jpeg'].map((img, i) => (
          <div key={i} className='border border-blue-400 rounded-lg p-4 shadow-md'>
            <img
              src={img} // make sure these images are in "public" folder
              alt={`project${i + 1}`}
              className='w-full h-48 object-cover rounded-md'
            />
            <p className='mt-3 text-sm'>
              Spiderman Peter is a child boy. <br />
              He is a great fighter.
            </p>
          </div>
        ))}
      </section>

      {/* Mood Toggle Button */}
      <div className='text-center mt-10'>
        <button
          onClick={targetmood}
          className='bg-indigo-500 text-white px-6 py-2 rounded-md hover:bg-indigo-600 transition-all'
        >
          Click here to {mood ? 'turn off' : 'light'} mood
        </button>
        <input  type='search'  placeholder='search here'    />
      </div>
    </div>
  );
}

export default App;
