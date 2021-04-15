import block from 'bem-cn'
import React from 'react'
import { BasePageProps } from '../../types/base'
import './Error404.css'

interface Props extends BasePageProps {
}


const b = block('error404')

export const Error404: React.FC<Props> = () => {
  return (
    <div className={b()}>
      <div>
  <aside><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4424790/Mirror.png" alt="404 Image" />
  </aside>
  <main>
    <h1>Sorry!</h1>
    <p>
      Either you aren't cool enough to visit this page or it doesn't exist <em>. . . like your social life.</em>
    </p>
   </main>
</div>


      {/* <h1 className={b('message')}>
        Ошибка 404, страница не найдена
      </h1> */}
    </div>
  )
}
