import Section from './section.jsx';
import {useState} from 'react';
import TabButton from "./tabButton/tabButton.jsx";
import {EXAMPLES} from '../data.js';
import Tabs from './tabs.jsx';
function Examples() {
    const [ selectedTopic , setSelectedTopic ]=useState();

  function handleClick(item){ 
    setSelectedTopic(item);
  }
  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }


  return ( 
    <Section id="examples" title="Examples">
        <Tabs
        buttonsContainer ="menu" //use like this {Section} for  components 
        buttons={
          <>
        <TabButton 
          onClick={()=>handleClick('components')}
          isSelected={selectedTopic==='components'}>
           Components
         </TabButton>
         <TabButton 
          onClick={()=>handleClick('jsx')}
          isSelected={selectedTopic==='jsx'}>
           JSX
         </TabButton>          
         <TabButton 
          onClick={()=>handleClick('props')}
          isSelected={selectedTopic==='props'}>
           Props
         </TabButton>
         <TabButton 
          onClick={()=>handleClick('state')}
          isSelected={selectedTopic==='state'}>
           State
         </TabButton>
         </>}
         >{tabContent}</Tabs>
                                                                                                           
        
    </Section> );
}

export default Examples;