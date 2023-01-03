import './Projects.css'

const Projects = () => {
    return (
        <section className="md:h-[80vh] py-0 mt-20" id="projects">
            <h2 className='font-medium text-3xl'>My works</h2>
            <div className='grid md:grid-cols-3 items-center content-center h-[80%] mt-4'>
                <div>
                    <div>
                        <p className="projectsGradient text-3xl md:text-4xl font-medium text-left ml-4 mt-8 md:mt-0 w-fit md:pl-4">
                            delivering<br />
                            <span className='span'>beautiful & efficient</span><br />
                            <span>experiences</span>
                        </p>
                    </div>
                </div>
                <div className='grid gap-4'>
                    <div className='main-project bg-transparent z-10 backdrop-blur-sm rounded-lg shadow-md w-full md:ml-4 mt-8 md:mt-0 px-8 py-12'>
                        <img className='rounded-lg' src='/images/zara-for-men.jpg' alt='ZARA FOR MEN' />
                    </div>
                    <h2 className='text-xl font-medium'>ZARA FOR MEN</h2>
                </div>
                <div className='bg-transparent z-10 backdrop-blur-sm rounded-lg shadow-md md:w-4/5 md:justify-self-end md:mr-[-15%] mt-8 md:mt-0 px-8 py-12 md:mb-8'>
                    <img className='rounded-lg md:blur-sm' src='/images/blackcoffee.jpg' alt='BLACKCOFFEE' />
                </div>
            </div>
        </section>
    )
}

export default Projects