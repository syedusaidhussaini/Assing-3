import React from "react";

const Hero = () => {
	return (
		<>
			<div className='py-[150px] px-[180px] top-[92px] bg-[#043873] text-white flex items-center'>
				<div className='w-[656px] h-[361px]'>
					<div className='w-[656px] h-[238px]'>
						<h2 className='font-bold text-[64px] leading-[77.45px] tracking-[-0.02em] mb-6'>
							Get More Done with whitepace
						</h2>
						<p className='font-normal text-lg leading-[30px] tracking-[-0.02em]'>
							Project management software that enables your teams to
							collaborate, plan, analyze and manage everyday tasks
						</p>
            {/* <div className="font-normal text-lg leading-[30px] tracking-[-0.02em]"></div> */}
						<div className='w-[250px] h-[70px]'>
						<button className='mt-8 px-10 py-4 rounded-lg bg-blue-500 text-base'>
							Try WhiteSpace Free →
						</button>
					</div>
					</div>
				</div>
				<div className='ml-24 w-[824px] h-[400px] bg-[#C4DEFD]'>
					
				</div>
			</div>
		</>
	);
};

export default Hero;