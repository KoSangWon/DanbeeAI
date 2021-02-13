import React from 'react';
import {useEffect} from 'react';
import AsyncStorage, { useAsyncStorage } from '@react-native-community/async-storage';
import { useSelector, useDispatch } from 'react-redux';
import BottomNavigator from './BottomNavigator';
import { AsyncAccessToken } from '../utils/asyncStorage';


export default () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);
    // console.log('NavController의 loggedin', isLoggedIn);

    const setIsLoggedIn = (isLoggedIn) => {
        dispatch({type: "SET_IS_LOGGEDIN", isLoggedIn})
      }

    
    const settingIsLoggedIn = async () => {
        const token = await AsyncStorage.getItem(AsyncAccessToken);
        if(token){
            // console.log('token 있다.', token);
            setIsLoggedIn(true);
        }else{
            // console.log('token 없다.', token);
            setIsLoggedIn(false);
        }
    }


    settingIsLoggedIn();


    return <BottomNavigator/>
}