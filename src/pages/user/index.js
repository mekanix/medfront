import detail from './detail'
import list from './list'
import initial from './initial'
import { User } from 'freenit'


const user = {
  detail,
  initial,
  list,
  service: User.service,
  store: User.store,
}


export default user
