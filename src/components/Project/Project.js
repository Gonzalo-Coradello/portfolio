const Project = ({ id, name, img, description, mainProject }) => {
    return (
        <div className={mainProject ? '' : 'cursor-pointer'}>
            <div className={'inline-block bg-transparent z-10 backdrop-blur-sm rounded-lg shadow-md mt-8 md:mt-0 px-8 py-12'}>
                <img className='rounded-lg' src={img} alt={name} />
            </div>
            <h2 className='text-xl font-medium uppercase'>{name}</h2>


            {/* <div className='md:w-4/5 md:justify-self-end md:mr-[-15%] md:mb-8'>
                    <img className='md:blur-sm' src='/images/blackcoffee.jpg' alt='BLACKCOFFEE' />
            </div> */}

{/* || ${mainProject ? 'main-project w-full md:ml-4' : 'md:w-4/5 md:justify-self-end md:mr-[-15%] md:mb-8'} ${hidden && 'absolute top-20 right-[-8rem] max-w-[275px]'} */}

        </div>
    )
}

export default Project