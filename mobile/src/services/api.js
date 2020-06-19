import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333'
});


export default api;

// iOS com emulador: localhost
// iOS com dispositivo físico: ip
//  Android com Emulador: localhost // adb reverse tcp:3333 tcp:3333 (adb reverse)
//  Android com Emulador: localhost // 10.0.2.2 (Android Studio)
//  Android com Emulador: localhost // 10.0.3.2 (Genymotion)
//  Android com Emulador: localhost // adb reverse tcp:3333 tcp:3333 
//  Android físico: ip da maquina
