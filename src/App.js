import React from 'react';
import family from './family.jpg';
import 'react-accessible-accordion/dist/fancy-example.css';
import './App.css';
import Spiritual from './Spiritual.js'
import Work from './Work.js'
import Community from './Community.js'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={family} className="App-family" alt="family" />
        Reggie Bradshaw's Personal Mission Statement
      </header>
      <section className="statement-container">
        <Accordion allowZeroExpanded="true">
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                I will strive to live worthy of the inspiration of the Holy Ghost by acting in accordance with the teachings of Jesus Christ, His Prophets, and the instructions of the Holy Ghost in all aspects of my life.
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <Spiritual />
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                I will work to provide spiritually, temporally, and emotionally for my wife and children.
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <Work />
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                I will look for and act on opportunities to lift others through inclusion, instruction, and service.
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <Community />
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
}

export default App;
