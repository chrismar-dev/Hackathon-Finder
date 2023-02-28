import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import hacktober from './hacktober.jpg'
import calhacks from './calhacks.png'
import hackthe6 from './hackthe6.png'
import robohacks from './robohacks.png'
import bonvoyagehacks from './bonvoyagehacks.png'
import toonhacks from './toonhacks.png'
import selfiehacks from './selfiehacks.png'
import slamdunkhacks from './slamdunkhacks.png'
import shark from './sharkhacks(1).png'
import hnk from './hnk.png'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='container'>
      <App 
      card_title={"Hacktoberfest"}
      description={'Worldwide'}
      image={hacktober}
      link={'https://hacktoberfest.com/'}
      />

<App 
      card_title={"Calhacks"}
      description={'California'}
      image={calhacks}
      link={'https://www.calhacks.io/'}
            />

<App 
      card_title={"Hack the 6th"}
      description={'Worldwide'}
      image={hackthe6}
      link={'https://hackthe6ix.com/'}
      />

<App 
      card_title={"Robo Hacks"}
      description={'Worldwide'}
      image={robohacks}
      link={'https://organize.mlh.io/participants/events/7144-robohacks'}
      />

<App 
      card_title={"Bon Voyage Hacks"}
      description={'Worldwide'}
      image={bonvoyagehacks}
      link={'https://organize.mlh.io/participants/events/7141-bon-voyage-hacks'}
      />

<App 
      card_title={"Hacktoon"}
      description={'Worldwide'}
      image={toonhacks}
      link={'https://organize.mlh.io/participants/events/7140-hacktoon'}
      />

<App 
      card_title={"SelfieHacks"}
      description={'Worldwide'}
      image={selfiehacks}
      link={'https://organize.mlh.io/participants/events/7143-selfiehacks'}
      />

<App 
      card_title={"Slam Dunk Hacks"}
      description={'Worldwide'}
      image={slamdunkhacks}
      link={'https://organize.mlh.io/participants/events/7157-slam-dunk-hacks'}
      />

<App 
      card_title={"SharkHacks"}
      description={'Worldwide'}
      image={shark}
      link={'https://organize.mlh.io/participants/events/7158-sharkhacks3'}
      />

<App 
      card_title={"Hack the North"}
      description={'Worldwide'}
      image={hnk}
      link={'https://hackthenorth.com/'}
      />
    </div>
  </React.StrictMode>,
)
