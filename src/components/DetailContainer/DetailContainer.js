import { useParams } from "react-router-dom"
import ProjectDetail from "../ProjectDetail/ProjectDetail"
import { projects } from "../ProjectsContainer/ProjectsContainer"

const DetailContainer = () => {

    const { id } = useParams()
    const project = projects.find(p => p.id == id)

  return (
    <section>
      <ProjectDetail { ...project } />
    </section>
  )
}

export default DetailContainer
