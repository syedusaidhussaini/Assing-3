import React from "react";
import sponsors from "@/app/Assets/sponsors.png"
import Image from "next/image";

const Work = () => {
	return (
		<>
			<div className='py-[80px] px-[170px] top-[92px] bg-[#043873] text-white flex items-center'>
				<div className='w-[656px] h-[300px] ml-12'>
					<div className='w-[900px] h-[238px] ml-20 items-center justify-between text-center'>
						<h2 className='mt-4 font-bold text-[60px] leading-[77.45px] tracking-[-0.02em] mb-6 ml-1'>
							Your work, everywhere you are
						</h2> 
						<p className='font-normal text-lg leading-[30px] tracking-[-0.02em] text'>
							Access your notes from your computer, phone or tablet by synchronising with various services, including whitespace, Dropbox, and OneDrive. The app is available on Windows, macOS, Linux, Android, and iOS. A terminal app is also available.
						</p>
						<div className='w-[600px] h-[60px]'>
							<button className='mt-8 px-10 py-4 rounded-lg bg-blue-500 text-base ml-64'>
								Lets Go
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className='py-[80px] px-[50px] top-[92px] bg-white text-black flex items-center'>
				<div className='w-[656px] h-[300px] '>
					<div className='w-[900px] h-[238px] ml-20 items-center justify-between text-center'>
						<h2 className='mt-4 font-bold text-[60px] leading-[77.45px] tracking-[-0.02em] mb-6 ml-96'>
							Our Sponsors
						</h2> 
						<div className=' mt-28 mr-24 w-[1300px] h-[100px]'>
            <Image src={sponsors} alt='' />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Work;
