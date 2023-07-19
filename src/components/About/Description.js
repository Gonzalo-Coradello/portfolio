import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const Description = ({ text, maxCh = 70 }) => {
  const { t } = useTranslation()

  const [show, setShow] = useState(false)

  if (!text) return null

  return (
    <div className='text-sm'>
      <p className='mr-2 inline'>
        {show ? text : `${text.slice(0, maxCh)}...`}
      </p>
      <button
        className='underline underline-offset-2 hover:opacity-50'
        onClick={() => setShow(!show)}
      >
        {show ? t('about.experience.showLess') : t('about.experience.showMore')}
      </button>
    </div>
  )
}

export default Description
