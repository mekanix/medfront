import Detail from './detail'
import List from './list'
import initial from './initial'
import { User } from 'freenit'


const user = {
  Detail,
  List,
  initial,
  service: User.service,
  store: User.store,
}


export default user
