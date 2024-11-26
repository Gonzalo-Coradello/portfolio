import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const Description = ({ text, maxCh = 70 }) => {
  const { t } = useTranslation()

  const [show, setShow] = useState(false)

  if (!text) return null

  return (
    <div className='text-sm'>
      <p className={`inline ${show ? 'mr-0' : 'mr-2'}`}>
        {show
          ? text.split('\n').map((paragraph, idx) => (
              <p key={idx} style={{ marginTop: idx === 0 ? 0 : '0.5rem' }}>
                {paragraph}
              </p>
            ))
          : `${text.replace(/\n/g, ' ').slice(0, maxCh)}...`}
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
