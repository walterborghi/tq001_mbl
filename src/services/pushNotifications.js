import PushNotification from 'react-native-push-notification';
import { PushNotificationIOS, AsyncStorage } from 'react-native';

const configure = () => {
 PushNotification.configure({

   onRegister: function(token) {
     //process token
     console.log(token);
     
     try {
       AsyncStorage.setItem('deviceToken', token.token);
     } catch (error) {
      // Error saving data
     }
     
     try {
       AsyncStorage.setItem('osToken', token.os);
     } catch (error) {
      // Error saving data
     }
     
     

   },

   onNotification: function(notification) {
     // process the notification
     // required on iOS only
     console.log(notification);
     
     notification.finish(PushNotificationIOS.FetchResult.NoData);
   },

   permissions: {
     alert: true,
     badge: true,
     sound: true
   },

   popInitialNotification: true,
   requestPermissions: true,

 });
};



export {
 configure,
};