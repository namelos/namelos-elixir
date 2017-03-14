export const set = key => value =>
  localStorage.setItem(key, value)

export const get = key => () =>
  localStorage.getItem(key)

export const setToken = set('token')
export const getToken = get('token')