import React from 'react'
import { Redirect, Switch } from 'react-router-dom'
import { Page } from '../components/Page/Page'
import { AuthLayout } from '../layouts/AuthLayout/AuthLayout'
import { AboutPage } from './AboutPage/AboutPage'
import { AuthPage } from './AuthPage/AuthPage'
import { CatalogPage } from './CatalogPage/CatalogPage'
import { Error404 } from './Error404/Error404'
import {Author} from '../components/Guids/Author/Author'
import {Genre} from '../components/Guids/Genre/Genre'
import { Language } from '../components/Guids/Language/Language'
import { Publisher } from '../components/Guids/Publisher/Publisher'
import { RegistrationPage } from './RegistrationPage/RegistrationPage'



interface Props {
}

export const Routes: React.FC<Props> = () => {
  return (
    <Switch>
      <Redirect exact from={'/'} to={'/catalog'} />
      <Page path={'/auth'} layout={AuthLayout} component={AuthPage} />
      <Page path={'/registration'} layout={AuthLayout} component={RegistrationPage} />
      <Page secured path={'/catalog'} component={CatalogPage} />
      <Page exact secured path={'/ref'} component={() => 'Guides'} />
      <Page secured path={'/ref/authors'} component={Author} />
      <Page secured path={'/ref/genre'} component={Genre} />
      <Page secured path={'/ref/languade'} component={Language} />
      <Page secured path={'/ref/publisher'} component={Publisher} />
      <Page secured path={'/about'} component={AboutPage} />
      <Page path={'*'} layout={AuthLayout} component={Error404} />
    </Switch>
  )
}
