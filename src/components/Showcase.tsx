"use client"
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import ShowcaseHead from '@/assets/datar/female/flow/AnimateDiff_00058.gif'
import { progress } from 'framer-motion'
import { Pause, Play } from 'lucide-react'
type Props = {}

const Showcase = ({}: Props) => {
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoDur, setVideoDur] = useState<number>();
  const [videoProg, setVideoProg] = useState<number>(0);   
  useEffect(()=>{
    const video = videoRef.current;
    if(video){
        setVideoDur(video.duration);
    }
  },[]);

  useEffect(()=>{
    if(isPaused) return;
    const currentTime = videoRef.current?.currentTime;
    if(videoDur != null && currentTime != null){
        let loadingTimeout = setTimeout(()=>{
            if(videoProg == currentTime/videoDur){
                setVideoProg((prev)=> prev + 0.000001);
            } else {
                setVideoProg(currentTime/videoDur);
            }
        },10);
        return ()=>{
            clearTimeout(loadingTimeout);
        }
    }
  }, [videoProg, videoDur, isPaused]);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if(video){
        setIsPaused(!video.paused)
        video.paused ? video.play() : video.pause();
    }
  }  

  const size = 48;
  const width = 3;
  let progress = videoProg;
  let onPlayPause = togglePlayPause;

  const center = size/2;
  const radius = center - width;
  const dashArray = 2 * Math.PI * radius;
  const dashOffset = dashArray * (1 - progress);

  return (
    <div>
        <div className="relative mx-auto max-w-7xl p-4 overflow-hidden">
            <Image
                src={ShowcaseHead}
                alt="Showcase Image"
                className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bottom-0 bg-gradient-to-b from-transparent to-white dark:bg-gradient-to-b dark:from-transparent dark:to-black"></div>
        </div>
        <div>
            <p>No model needed <br />No camera needed <br />Just your product</p>
            <p>Upload an iPhone-taken photo of your clothing product and generate an endless number of premium high quality and resolution on-model photos of it.</p>
            <div>
                <div className='relative w-[90%] max-w-6xl my-8 rounded-xl overflow-hidden'>
                    <div className='absolute top-4 right-4 z-10'>
                        <div className='relative justify-center items-center'>
                            <svg className='-rotate-90' width={size} height={size}>
                                <circle cx={center} cy={center} r={radius} fill="transparent" stroke="#aaaaaa" strokeWidth={width}/>
                                <circle cx={center} cy={center} r={radius} fill="transparent" stroke="#ffffff" strokeWidth={width} strokeDasharray={dashArray} strokeDashoffset={dashOffset} strokeLinecap='round'/>
                            </svg>
                            <div className='absolute top-3 right-3 text-white'>
                                <button onClick={onPlayPause} className=' group cursor-pointer flex justify-center items-center'>
                                    <div className='fill-white group-hover:fill-[#aaaaaa] transition-colors duration-200 ease-in-out'>
                                        {isPaused ? <Play className='fill-white'/> : <Pause className='fill-white'/>}
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <video className='w-full' ref={videoRef} loop muted autoPlay>
                        <source src='/video.mp4' />
                    </video>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Showcase
