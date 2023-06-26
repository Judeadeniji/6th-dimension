import { createData, memo } from 'brace-js';

const src = createData('');
const Image = (props) => {
   
  const load = async () => {
    const image = await import(`${props.src}`);
    alert(image.default)
    src.set(image.default);
  };
load();
  return <img src={src()} alt={props.alt} on:load={load} />;
};

export default Image