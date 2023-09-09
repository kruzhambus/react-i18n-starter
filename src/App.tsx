import React from 'react'
import { useTranslation } from 'react-i18next'

function App() {
  const { t } = useTranslation()

  return (
    <div>
      <h1
        className='text-5xl text-center text-blue-500 font-bold mt-40'
      >
        {t('say')}
      </h1>
    </div>
  )
}

export default App
