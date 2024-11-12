import React from "react";
import Image from "next/image";
import Work from '@/app/Assets/Work.png'
const Project = () => {
	return (
		<>
			<div className='py-[200px] px-[180px] top-[92px] bg-white text-black flex items-center h-[700px]'>
				<div className='w-[656px] h-[200px] mb-10'>

					<div className='w-[600px] h-[238px] mb-96'>
						<h2 className='font-bold text-[64px] leading-[77.45px] tracking-[-0.02em] mb-6'>
							Project Management
						</h2>
						<p className='font-normal text-lg leading-[30px] tracking-[-0.02em]'>
            Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
						</p>
            {/* <div className="font-normal text-lg leading-[30px] tracking-[-0.02em]"></div> */}
						<div className='w-[290px] h-[70px]'>
						<button className='mt-8 px-10 py-4 rounded-lg bg-blue-400 text-base text-white font-medium'>
							Get Started Free →
						</button>
					</div>
					</div>
				</div>
				<div className='  ml-24 w-[824px] h-[400px] bg-blue-400'>
				</div>

        
			</div>
      <div className='px-[180px] top-[92px] bg-white text-black flex items-center '>
      <div className='w-[750px] h-[500px]'>
      <Image src={Work} alt='' />
      </div> 
					<div className='ml-44  w-[600px] h-[238px] mb-96'>
						<h2 className='font-bold text-[64px] leading-[77.45px] tracking-[-0.02em] mb-6'>
							Work Together
						</h2>
						<p className='font-normal text-lg leading-[30px] tracking-[-0.02em]'>
            With whitepace, share your notes with your colleagues and collaborate on them.
            You can also publish a note to the internet and share the URL with others.

						</p>
            {/* <div className="font-normal text-lg leading-[30px] tracking-[-0.02em]"></div> */}
						<div className='w-[290px] h-[70px]'>
						<button className='mt-8 px-10 py-4 round  ed-lg bg-blue-400 text-base text-white font-medium'>
							Try it now →
						</button>
					</div>
					</div>
           
				</div>
		</>
	);
};

export default Project;