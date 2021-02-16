import {Schema, model} from 'mongoose';

const userSchema = new Schema({
  username : String,//이름
  email: String,//사용자 이메일(앱에서는 이걸로 로그인, 백오피스에서는 다른 id로 로그인)
  password: String,//비밀번호
  point : {type:Number, default:0},//포인트
  
},
{timestamps: true}//createdAt: 가입날짜, updatedAt: 정보 수정 날짜

);

const User = model('users', userSchema);

export default User;
