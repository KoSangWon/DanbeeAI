import React, { useEffect } from 'react';
import {useState} from 'react';
import { Text, Containe, Button, View, Form, Input, Label, Item, Container } from 'native-base'
import { StyleSheet, Image } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { d } from '../../utils/size';
import { c } from '../../utils/color';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import { gql, useMutation } from '@apollo/client';
import AsyncStorage from '@react-native-community/async-storage';
import { AsyncAccessToken } from '../../utils/asyncStorage';
import SubHeader from '../../components/headers/SubHeader';

const LOGIN_MUTATION = gql`
  mutation LoginUser($email:String!, $password:String!){
    login(email:$email, password:$password){
      token
      user{
        id
        email
      }
    }
  }
`;


const LoginMain = ({navigation}) => {

    const [Login] = useMutation(LOGIN_MUTATION);

    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);
    // console.log("LoginMain에서 isloggedin:", isLoggedIn);

    const setIsLoggedIn = (isLoggedIn) => {
      dispatch({type: "SET_IS_LOGGEDIN", isLoggedIn})
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  

    const submit = async () => {
      try {
        const { data } = await Login({ variables: { email, password } });
        console.log(data);
        if (data) {
          alert("로그인 성공");
          const token = JSON.stringify(data.login.token);
          await AsyncStorage.setItem(AsyncAccessToken, token);

          setIsLoggedIn(true);
          navigation.navigate("MyStack", { screen: "MyMain" });
        }
      } catch (err) {
        console.log("Err", err);
        if (err.toString().includes("Username not found"))
          alert("존재하지 않는 이메일입니다.");
        else if (err.toString().includes(`"email" must be a valid email`))
          alert("이메일을 형식에 맞게 입력해주세요.");
        else if (err.toString().includes(`"password" length must be at least 6 characters long`))
          alert("비밀번호를 6자 이상 입력해주세요.");
        else if (err.toString().includes("Invalid password"))
          alert("비밀번호가 일치하지 않습니다.")
        else alert("알 수 없는 오류입니다. 문의주세요.");
      }
    }


    return (
      <Container>
        <SubHeader title="로그인"/>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.logo}>
            <Image source={require("../../../assets/logo.png")} />
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: d.px * 40,
              marginBottom: d.px * 30,
            }}
          >
            {/* <SocialBtn
              name={"facebook"}
              title="Login with Facebook"
              onPress={() => alert("facebook로그인 구현해야함")}
            />
            <View style={{ margin: d.px * 5 }} />
            <SocialBtn
              name={"google"}
              title="Login with Google"
              onPress={() => alert("Google로그인 구현해야함")}
            /> */}
            <View style={styles.borderStyle}/>
            <Form style={{ width: d.px * 295 }}>
              <Item floatingLabel>
                <Label>Email</Label>
                <Input onChangeText={(text)=>setEmail(text)}/>
              </Item>
              <Item floatingLabel>
                <Label>Password</Label>
                <Input onChangeText={(text)=>setPassword(text)} secureTextEntry={true}/>
              </Item>
            </Form>
          </View>
          <Button rounded style={styles.buttonStyle} onPress={submit}>
            <Text style={{ fontSize: d.px * 17 }}>Login</Text>
          </Button>
          <View style={styles.subContainer}>
            <Text style={styles.textStyle} onPress={()=>navigation.navigate('MyStack',{screen:'SignUpScreen'})}>
                회원가입
            </Text>
            <Text  style={styles.textStyle}> | </Text>
            <Text
                style={styles.textStyle}
                onPress={() => {navigation.navigate('MyStack', {screen: 'FindPassword'})}}
            >
                비밀번호 찾기
            </Text>
          </View>
        </KeyboardAwareScrollView>
      </Container>
    );
}

export default LoginMain;

const styles = StyleSheet.create({
    logo: {
        marginTop: d.px*40,
        alignItems: 'center',
    },
    buttonStyle: {
        marginTop: d.px*20,
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: c.mainColor,
        width: d.px*250,
        height: d.px*55,
    },
    subContainer: {
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: d.px*22,
        marginBottom: d.px*22,
    },
    textStyle: {
        fontSize: d.px*12,
    },
    borderStyle: {
        marginTop:d.px*30,
        borderBottomWidth:d.px*1, 
        borderBottomColor:c.mainColor,
        alignItems:'center',
        height:d.px*1,
        width:d.px*320,
    }
})
