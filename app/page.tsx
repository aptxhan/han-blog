'use client'
import 'aplayer/dist/APlayer.min.css'
import { useCallback, useEffect, useState } from 'react'
import Particles from 'react-particles'
import {loadFull} from 'tsparticles'
const jinrishici = require('jinrishici')
//引入今日诗词API

export const revalidate = 86400

export default function Home() {
  
  const [str, setStr] = useState('')
  useEffect(() => {
    jinrishici.load((res:any) => {
      setStr(res.data.content)
    })
  },[])

  const particlesInit = useCallback(async (engine:any) => {
    await loadFull(engine)
  }, [])


  return (
    <div className="mx-auto">
      <Particles className='z-0' id='tsparticles' init={particlesInit}
      options={{ background: {
        color: {
            value: 'transparent',
        },
    },
    fpsLimit: 60,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#ffffff",
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        collisions: {
            enable: true,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 6,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 5 },
        },
    },
    detectRetina: true,
      }}/>
      <div className="relative z-10 flex h-[calc(100vh_-_135px)] items-center justify-center"> 
        <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
          <span className="whitespace-nowrap">
            {str}
          </span>
        </p> 
      </div>
    </div>    
  )
}
