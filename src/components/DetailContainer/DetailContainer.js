import { useParams } from 'react-router-dom'
import AboutBackground from '../AboutBackground/AboutBackground'
import ProjectDetail from '../ProjectDetail/ProjectDetail'
import { projects } from '../../data/projects'

const DetailContainer = () => {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)

  return (
    <>
      <AboutBackground />
      <ProjectDetail {...project} />
    </>
  )
}

export default DetailContainer
