import { App } from '../../types/app'
import { AppAction } from './appAction'
import { AppState } from './types'
import { apiAuthLogin } from '../../api/auth'
 import {apiUserRegistration} from '../../api/user'
import { User } from '../../types/user'
import { browserHistory } from '../../browserHistory'


 const appFetch = (): AppState.Action.Fetch => ({
  type: AppAction.Fetch
})

 const appFetchSuccess = (payload: App.Token): AppState.Action.FetchSuccess => ({
  type: AppAction.FetchSuccess,
  payload
})

 const appFetchError = (payload: string): AppState.Action.FetchError => ({
  type: AppAction.FetchError,
  payload
})
// функция для регистрации
const appSuccessRegistration = (payload: User.Data): AppState.Action.SuccessRegistration => ({
  type: AppAction.SuccessRegistration,
  payload
})



export const appActions: AppState.ActionThunk = {
  //авторизация
  appLogin: params => async (dispatch) => {
    dispatch(appFetch())

    try {
      const tokenPair = await apiAuthLogin(params)
      dispatch(appFetchSuccess(tokenPair))
      browserHistory.push('/')
    } catch (err) {
      dispatch(appFetchError('Ошибка авторизации.'))
    }
  },
  //регистрация
  appRegistration: param=> async (dispatch) => {
    dispatch (appFetch())

  try {
    const createUser = await apiUserRegistration(param)
    dispatch(appSuccessRegistration(createUser))
  } catch (err) {
    dispatch(appFetchError('Ошибка регистрации'))
  }}}
