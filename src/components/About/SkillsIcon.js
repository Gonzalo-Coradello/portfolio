const SkillsIcon = ({ label, icon }) => {
    return (
    <div after={label} className='relative font-light text-xs md:text-sm text-left after:absolute after:left-0 after:right-0 after:top-15 after:leading-tight hover:after:content-[attr(after)]  after:mx-auto after:w-fit hover:scale-110 active:after:content-[attr(after)] active:scale-110 transition-all duration-300'>
        { icon }
    </div>
    )
}

export default SkillsIcon