import { createData, memo, If, For } from 'brace-js';
import { Core } from "utiliti-js";
const http = new Core.Http();

const predictionList$ = createData([]);
const prediction$ = createData('');

const setImage = (e) => {
  e.preventDefault();
  prediction$.set(e.target.imageUrl.value)
};

function Image(props) {
  return (
    <div className="w-full h-auto p-2 md:p-4">
      <img
        src={prediction$() || ''}
        alt="output"
        className="w-full h-auto rounded-lg border-2 border-gray-300"
      />
    </div>
  );
}

function Fallback() {
  return (
    <div className="w-full h-auto p-2 md:p-4">
      <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
        <p className="text-lg font-bold
        text-gray-600">{'Image output here'}</p>
      </div>
    </div>
  );
}

export function ImageList({toggle}) {
  if(predictionList$().length < 1) {
    http.get('/api/predictions').then(data => data.json()).then(res => {
      predictionList$.set(res.results);
    })
  }
  return (
   <div className="container mx-auto px-4">
   <div className="border rounded-lg mt-8 mb-8 sm:mt-16 sm:mb-16 md:mt-24
   md:mb-24 lg:mt-32 lg:mb-32 xl:mt-40 xl:mb-40 px-4">
      <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl
      font-bold text-center py-8 bg-gradient-to-br
      from-blue-500 via-blue-800 to-blue-500 text-transparent bg-clip-text m-auto">Try Our Stable Diffusion Model Now!</h1>
    </div>
    <p className="text-lg mt-8 mb-4">
      Dream something with{' '}
      <a
        href="#"
        className="underline"
      >
        sixth-dimension/stable-diffusion
      </a>
      :
    </p>

<form on:submit={setImage} className="mb-7" key="setImage">
  <select
    name="imageUrl"
    className="border border-gray-300 rounded py-2 px-4 w-full bg-white appearance-none"
  >
    <option value="">View Previously generated Images</option>
    <For each={predictionList$()}>
      {(item, key) => <option value={item.output[0]} key={item.id}
      className="text-gray-900 hover:bg-blue-200" value={item.output[0]}>{item.input?.prompt || 'Random Image'}</option>}
    </For>
  </select>
  <button
    type="submit"
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4
    rounded mt-4 mr-3">
    View
  </button>
  <button
  type="button"
  className="bg-amber-500 hover:bg-amber-400 text-white font-bold py-2 px-4
  rounded mt-4" on:click={() => toggle.update(hide => !hide)}>
  Generate New
</button>
</form>
    <div>
      <If
        eval={!!prediction$()}
        fallback={<Fallback />}
      >
        <Image />
      </If>
    </div>
  </div>
    )
}
