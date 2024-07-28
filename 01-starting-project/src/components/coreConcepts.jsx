import Section from "./section.jsx";
import CoreConcept from "./coreConcept/coreConcept.jsx";
import{CORE_CONCEPTS} from '../data.js';
function CoreConcepts() {
    return (
    <Section id="core-concepts" title="Core Concepts">
        <ul>
            {CORE_CONCEPTS.map((item)=>(
              <CoreConcept key={item.title} {...item}/>
            ))} 
        </ul>
    </Section>);
}

export default CoreConcepts;