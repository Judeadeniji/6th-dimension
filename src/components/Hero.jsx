import { memo } from "brace-js";

export function CTA() {
  return (
    <section className="bg-blue-900 text-white py-10 px-2 my-20 mx-auto
    rounded-2xl flex items-center justify-center md:py-16" style={{width: '94%'}}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold m-auto mb-4 text-center">Ready to create stunning images?</h2>
        <p className="text-lg mb-8 text-center">Sign up today and start using our AI-powered image creation tool!</p>
        <div className="flex justify-center">
          <button className="bg-white text-blue-900 py-3 px-7 rounded-md
          font-bold hover:bg-blue-800 hover:text-white mr-4">Get Started</button>
          <button className="bg-transparent text-white
          py-3 px-8 rounded-md font-bold hover:bg-white
          hover:text-blue-800">Try Now</button>
        </div>
      </div>
    </section>
  );
}


function Hero() {
  return (
    <div className="bg-gradient-to-br from-purple-200 via-gray-200 to-gray-100
    text-gray-600 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold leading-tight tracking-tight mb-4">
            <span className="text-purple-600">Sixth</span> <span className="text-blue-600">Dimension</span> Image Generator
          </h1>
          <p className="text-lg leading-relaxed mb-8">
            <span className="text-purple-600">Sixth</span> Dimension is a Stable Diffusion based latent text-to-image diffusion model capable of generating photo-realistic images given any text input, cultivates autonomous freedom to produce incredible imagery, empowers billions of people to create stunning art within seconds.
          </p>
          <p className="text-lg leading-relaxed mb-8">
            <span className="font-bold">Create beautiful art</span> using stable diffusion <span className="text-blue-600">ONLINE</span> for free.
          </p>
          <a href="#" className="bg-blue-600 text-white py-3 px-6 rounded-lg
          font-bold text-lg hover:bg-blue-500 hover:bg-transparent border-2
          hover:border-blue-500 hover:text-blue-500">
            Get Started for Free
          </a>
        </div>
      </div>
    </div>
  );
}

export default memo(Hero)