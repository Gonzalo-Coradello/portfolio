const ProjectDetail = ({ name, screenshots, description, url }) => {
  return (
    <div>
        <h1>{name}</h1>
        {screenshots.map(img => (
            <img width={500} key={img} src={img} alt='screenshot' />
        ))}
    </div>
  )
}

export default ProjectDetail