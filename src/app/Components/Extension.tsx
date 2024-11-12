import React from "react";

const Extension = () => {
	return (
		<>
			<div className='py-[80px] px-[170px] top-[92px] bg-[#043873] text-white flex items-center'>
				<div className='w-[656px] h-[200px]'>
					<div className='w-[630px] h-[238px]'>
						<h2 className='mt-4 font-bold text-[64px] leading-[77.45px] tracking-[-0.02em] mb-6'>
							Use as Extension
						</h2>
						<p className='font-normal text-lg leading-[30px] tracking-[-0.02em]'>
							Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
						</p>
						<div className='w-[250px] h-[70px]'>
							<button className='mt-8 px-10 py-4 rounded-lg bg-blue-500 text-base'>
								Lets Go
							</button>
						</div>
					</div>
				</div>
				<div className='ml-24 w-[700px] h-[300px] bg-[#C4DEFD]'>
				</div>
			</div>

			<div className='py-[80px] px-[170px] top-[92px] bg-white text-black flex items-center '>
				<div className='w-[550px] h-[380px] bg-blue-300 mt-12'>
				</div> 
				<div className='ml-44 w-[600px] h-[238px]'>
					<h2 className='font-bold text-[64px] leading-[77.45px] tracking-[-0.02em] mb-6'>
						Customise it to your needs
					</h2>
					<p className='font-normal text-lg leading-[30px] tracking-[-0.02em]'>
          Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
					</p>
					<div className='w-[290px] h-[70px]'>
						<button className='mt-8 px-10 py-4 rounded-lg bg-blue-400 text-base text-white font-medium'>
							Try it now →
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Extension;
