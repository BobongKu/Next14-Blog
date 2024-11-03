import { sortBlogs } from '@/src/utils'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Tag from '../Elements/Tag';
import { slug } from 'github-slugger';

const HomeCoverSection = ({blogs}) => {

    const sortedBlogs = sortBlogs(blogs);
    const blog = sortedBlogs[0];

  return (
    <div className='inline-block'>
        <article className='flex flex-col items-start justify-center mx-5 sm:mx-10 relative h-[50vh] sm:h-[75vh]'>
        <div className='w-full flex items-center justify-center z-0 text-light'>
                <div className="flex flex-col text-center w-full mb-20 group justify-center">
                    <span className="dark:text-white text-black transition-all duration-500 text-6xl -skew-x-12 -skew-y-12 group-hover:transform-none">Bo</span>
                    <span className="dark:text-white text-black transition duration-500 text-5xl skew-x-12 skew-y-12 group-hover:transform-none -rotate-[23deg]">INFOSEC</span>
                    <span className="dark:text-white text-black transition duration-500 text-6xl -skew-x-12 -skew-y-12 group-hover:transform-none">Blog</span>
                </div>
        </div>
    </article>
    </div>
  )
}

export default HomeCoverSection