import { useTranslation } from 'react-i18next'
import SkillsIcon from './SkillsIcon'
import { mainIcons } from '../../data/icons'

const Skills = () => {
  const { t } = useTranslation()

  return (
    <div className='max-w-[800px] mx-auto mb-4'>
      <h2 className='text-left text-3xl font-medium mb-8 md:ml-8'>
        {t('about.skills')}
      </h2>
      <div className='grid grid-cols-3 md:grid-cols-4 gap-6 md:gap-10 justify-items-center py-12 px-8 bg-white/10 backdrop-blur-sm rounded-lg shadow-md'>
        {mainIcons.map(i => (
          <SkillsIcon label={i.label} icon={i.icon} key={i.label} />
        ))}
      </div>
    </div>
  )
}

export default Skills
