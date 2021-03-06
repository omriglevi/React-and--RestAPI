import React , {useState} from 'react' ;
import {useSelector , useDispatch} from 'react-redux';
import {useEffect} from 'react' ;
import {Link} from 'react-router-dom';
import { register, signin } from '../action/userActions';




function RegisterScreen(props){
 const [name , setName] =useState('');
const [email , setEmail] =useState('');
const [password , setPassword] =useState('');
const [repassword , setRepassword] =useState('');
const [phoneNumber , setPhoneNumber]=useState('');
const [lastName , setLastName]=useState('');
const [city , setCity] =useState('');
const [streetAndBuilding , setStreetAndBuilding] =useState('');
const [floor , setFloor] =useState('');
const [apartmentNumber , setApartmentNumber] =useState('');
const userRegister = useSelector(state=>state.userRegister);
const {  loading ,userInfo , error} = userRegister;

const redirect=props.location.search? props.location.search.split("=")[1] : '/';

useEffect(() => {
   if(userInfo){
       props.history.push(redirect);
   }
    
    return () => {
        //
    };
}, [userInfo]);


const dispatch=  useDispatch () ;
const submitHandler = (e)=> {e.preventDefault() ;
dispatch(register(name , email , password , lastName , phoneNumber , city , floor , streetAndBuilding , apartmentNumber ));

}




return <div className='container'>
    <div>
   
    
<form onSubmit={submitHandler}>

<div className='row'>
    <div dir='rtl' className='  col-12 signin-col'> 
     <div className='mycard'> 
<ul>
   <li>  <h3 dir='rtl'> הרשמה</h3></li>
   <li> 
     
   </li>

   <li>
       <input dir='ltr' id='name' name='name' placeholder='שם' onChange={e=>setName(e.target.value)} type='name'/>
        
    </li>

    <li>
<input dir='ltr'  id= 'lastName' name='lastName' placeholder=' שם משפחה' onChange={e=>setLastName(e.target.value)} /> 
    </li>

        <li>
       <input dir='ltr' id='email' name='email' placeholder='אימייל' onChange={e=>setEmail(e.target.value)} type='email'/>
        
    </li>
   
        <li>
<input dir='ltr'  id= 'password' name='password' placeholder='סיסמא' onChange={e=>setPassword(e.target.value)} type='password'/> 
    </li>
    <li>
<input dir='ltr'  id= 'repassword' name='repassword' placeholder='אימות סיסמא' onChange={e=>setRepassword(e.target.value)} type='password'/> 
    </li>



    <li>
<input dir='ltr'  id= 'phoneNumber' name='phone' placeholder='טלפון ' onChange={e=>setPhoneNumber(e.target.value)} type='phone'/> 
    </li>
    
    <li>
<input dir='ltr'  id= 'adress' name='adress' placeholder=' כתובת' onChange={e=>setStreetAndBuilding(e.target.value)} /> 
    </li>
    <li>
<input dir='ltr'  id= 'floor' name='floor' placeholder=' קומה' onChange={e=>setFloor(e.target.value)} type='password'/> 
    </li>
    <li>
<input dir='ltr'  id= 'aptNum' name='aptNum' placeholder='אימות מספר בית' onChange={e=>setApartmentNumber(e.target.value)} type='password'/> 
    </li>
    <li>
<input dir='ltr'  id= 'city' name='city' placeholder=' עיר' onChange={e=>setCity(e.target.value)} /> 
    </li>
    

    {password !== repassword &&  
    <li>
        הסיסמאות לא זהות
    </li>}

    <li>
        <button  type='submit' disabled={password !==repassword} className=' signinbtn btn btn-primary'> יאללה , סיימתי</button>
    </li>

    <li>
  <Link to={redirect==='/' ? "signin" : "signin?redirect=" +redirect}>
           כבר רשום ? 
        </Link>
        
    </li>
   
  
</ul>
</div>
</div>

</div>
</form>
</div>
</div>

    
}
export default RegisterScreen