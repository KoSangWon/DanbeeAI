import React, {useState} from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Root, Header, Left, Body, Icon, Right, Content, Text, Button, Form, Item, Label, Input, CheckBox, View, Toast } from 'native-base'
import { gql, useMutation } from '@apollo/client';
import AsyncStorage from '@react-native-community/async-storage';
import { d } from '../../utils/size';
import { c } from '../../utils/color';
import { AsyncAccessToken } from '../../utils/asyncStorage';
import { useDispatch } from 'react-redux';
import SubHeader from '../../components/headers/SubHeader';

const SIGNUP_MUTATION = gql`
  mutation SignUp($email: String!, $username: String!, $password: String!) {
    register(email: $email, username: $username, password: $password) {
        user{
            id
            email
            username
        }
        token
        refreshToken
    }
  }
`;

const SignUpMain = ({navigation}) => {
    const dispatch = useDispatch();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');

    const [SignUp] = useMutation(SIGNUP_MUTATION)    
    const setIsLoggedIn = (isLoggedIn) => {
        dispatch({type: "SET_IS_LOGGEDIN", isLoggedIn})
      }

    const submit = async () => {
        if(password === passwordCheck){
            try{
                const { data } = await SignUp({variables: {email, username, password}})
                console.log('회원가입 성공, 리턴된 이메일 :', JSON.stringify(data.register.user.email));
                const token = JSON.stringify(data.register.token);
                console.log("token이다.", token)
                if(token) {
                    await AsyncStorage.setItem(AsyncAccessToken, token);
                    const tok = await AsyncStorage.getItem(AsyncAccessToken);
                    console.log("toktok:",tok);
                    setIsLoggedIn(true)
                    alert('회원가입 성공! 환영합니다~~');
                    navigation.navigate('MyStack', {screen: 'MyMain'});
                }
            } catch(err){
                console.log("에러", err);
                if(err.toString().includes(`"username" length must be at least 2`))
                    alert('닉네임을 2자 이상 입력해주세요.');
                else if(err.toString().includes("Username is already taken"))   
                    alert('존재하는 닉네임입니다. 다른 닉네임을 입력해주세요.');
                else if(err.toString().includes(`"email" must be a valid email`))   
                    alert('이메일을 형식에 맞게 입력해주세요.');
                else if(err.toString().includes("Email is already registered"))   
                    alert('존재하는 이메일입니다. 다른 이메일을 입력해주세요.');
                else if(err.toString().includes(`"password" length must be at least 6 characters long`))   
                    alert('비밀번호를 6자 이상 입력해주세요.');
                else
                    alert('알 수 없는 오류입니다. 문의주세요.');
            }
        }
        else{
            alert('비밀번호와 확인비밀번호가 일치하지 않습니다.');
        }
      }

    console.log("1.", username, email, password);

    return (
        <Container>
            <SubHeader title={'회원가입'}/>
            <View style={styles.container}>
                <View style={{flexDirection:'row', alignItems:'center', marginBottom: d.px*10,}}>
                    <View style={styles.textContainer}>
                        <Text style={styles.textStyle}>닉네임</Text>
                    </View>
                    <Item style={styles.inputContatiner} regular>
                        <Input 
                            onChangeText={(text)=>setUsername(text)} 
                            style={styles.placeholder}
                            placeholder='2자 이상 입력해주세요.' 
                         />
                    </Item>
                </View>
                <View style={{flexDirection:'row', alignItems:'center', marginBottom: d.px*10,}}>
                    <View style={styles.textContainer}>
                        <Text style={styles.textStyle}>이메일</Text>
                    </View>
                    <Item style={styles.inputContatiner} regular>
                        <Input 
                            onChangeText={(text)=>setEmail(text)} 
                            style={styles.placeholder}
                            placeholder='이메일을 입력해주세요.' 
                         />
                    </Item>
                </View>
                <View style={{flexDirection:'row', alignItems:'center', marginBottom: d.px*10,}}>
                    <View style={styles.textContainer}>
                        <Text style={styles.textStyle}>비밀번호</Text>
                    </View>
                    <Item style={styles.inputContatiner} regular>
                        <Input 
                            onChangeText={(text)=>setPassword(text)} 
                            secureTextEntry={true}
                            style={styles.placeholder} 
                            placeholder='6자 이상 입력해주세요.' 
                        />
                    </Item>
                </View>
                <View style={{flexDirection:'row', alignItems:'center', marginBottom: d.px*10,}}>
                    <View style={styles.textContainer}>
                        <Text style={styles.textStyle}>비밀번호 확인</Text>
                    </View>
                    <Item style={styles.inputContatiner} regular>
                        <Input 
                        onChangeText={(text)=>setPasswordCheck(text)}
                        secureTextEntry={true} 
                        style={styles.placeholder} 
                        placeholder='6자 이상 입력해주세요.'
                        />
                    </Item>
                </View>
            </View>
            <Button rounded style={styles.buttonStyle} onPress={submit}>
                <Text style={{ fontSize: d.px * 17 }}>회원가입</Text>
            </Button>
            <View style={styles.logo}>
                <Image source={require("../../../assets/logo.png")} />
            </View>
        </Container>
    )
}

export default SignUpMain;

const styles = StyleSheet.create({
    container: {
        marginTop: d.px*43,
        marginLeft: d.px*32,
        marginRight: d.px*32,
    },
    inputContatiner: {
        width: d.px*213,
        height:d.px*30,
        borderColor: '#979797'
    },
    placeholder: {
        fontSize: d.px*13,
    },
    textContainer: {
        width: d.px*100,
    },
    textStyle: {
        fontSize: d.px*15,
    },
    buttonStyle: {
        marginTop: d.px*20,
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: c.mainColor,
        width: d.px*250,
        height: d.px*55,
    },
    logo: {
        marginTop: d.px*80,
        alignItems: 'center',
    },
})