const Project = ({ id, name, img, description, mainProject }) => {
    return (
        <div className={mainProject ? null : 'md:cursor-pointer'}>
            <div className={'inline-block bg-transparent z-10 backdrop-blur-sm rounded-lg shadow-md px-4 py-6 mt-8 md:mt-0 md:px-8 md:py-12'}>
                <img className='rounded-lg' src={img} alt={name} />
            </div>
            <h2 className='text-md md:text-xl font-medium uppercase mt-2'>{name}</h2>


            {/* <div className='md:w-4/5 md:justify-self-end md:mr-[-15%] md:mb-8'>
                    <img className='md:blur-sm' src='/images/blackcoffee.jpg' alt='BLACKCOFFEE' />
            </div> */}

{/* || ${mainProject ? 'main-project w-full md:ml-4' : 'md:w-4/5 md:justify-self-end md:mr-[-15%] md:mb-8'} ${hidden && 'absolute top-20 right-[-8rem] max-w-[275px]'} */}

        </div>
    )
}

export default Project