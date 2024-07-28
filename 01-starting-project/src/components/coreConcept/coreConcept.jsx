import './coreConcept.css';
export default function CoreConcept(props){ //use {image,title,description} instead of props

  return(
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}