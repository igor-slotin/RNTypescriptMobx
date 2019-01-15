import { action } from 'mobx';
import { Toast } from 'native-base';

class AppUIStore {
  @action
  showToast = () => {
    Toast.show({
      text: 'Hey There!',
      buttonText: 'Ok'
    })
  }
}

const store = new AppUIStore();
export default store;