import {useLayoutEffect,useRef} from 'react';import gsap from 'gsap';import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export default function useGsap(setup,deps=[]){const ref=useRef(null);useLayoutEffect(()=>{if(!ref.current)return;const ctx=gsap.context(()=>setup(gsap,ScrollTrigger,ref.current),ref);return()=>ctx.revert()},deps);return ref}
