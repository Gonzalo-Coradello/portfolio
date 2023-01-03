const SkillsIcon = ({ label, children }) => {
    return <div after={label} className='relative font-light text-sm text-center after:absolute after:left-0 after:right-0 after:top-15 hover:after:content-[attr(after)] hover:scale-110 transition-all duration-300'>
        { children }
    </div>
}

export default SkillsIcon