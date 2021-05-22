import store from '@/app/store'
import { Json } from '@/common/base'
import { qiankunActions } from '@/micro-config'

class Shared {
  /**
   * 获取 UserInfo
   */
  public getUserInfo (): Json {
    return store.getters.userInfo
  }

  public setUserInfo (data) {
    store.commit('setUserInfo', data)
  }
}

const shared = new Shared()
export default shared
