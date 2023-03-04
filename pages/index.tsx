import type { NextPage } from 'next'
import Head from 'next/head'
import BackgroundImage from '../components/BackgroundImage'

const Home: NextPage = () => {
  return (
    <div className="w-[100vw] h-[100vh] bg-black">
      <Head>
        <title>Image Crossfade</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="absolute bottom-[20vh] lg:bottom-0 text-center w-full pb-32 text-white z-20" style={{ textShadow: "0 0 2px #000" }}>
          <h1 className="text-4xl font-bold pb-4">Next.js Image Crossfade</h1>
          <div className="opacity-80">
            <p className="pb-2">Image credits:</p>
            <p>Bird in flight by <a className="underline" href="https://unsplash.com/photos/_BsZKOlhuyo">Sina Bahar</a></p>
            <p>Full moon rising by <a className="underline" href="https://unsplash.com/photos/gmejHJ6k-VY">Maciek Sulkowski</a></p>
            <p>City at night by <a className="underline" href="https://unsplash.com/photos/jEeksuy9SMk">Itadaki</a></p>
          </div>
          <h2 className="pt-4">
            <a className="font-bold underline text-lg" href="https://github.com/johnpolacek/image-crossfade">github.com/johnpolacek/image-crossfade</a>
          </h2>
        </div>
        <div className="relative lg:-top-[25vh]">
          <BackgroundImage />
        </div>
      </main>
    </div>
  )
}

export default Home
