import './Dashboard.css'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Exercise from '../components/Exercise/Exercises'
import Tracker from '../components/Tracker/Tracker'
import Calendar from '../components/Calendar/Calendar'
import BMICalculator from '../components/BMICalculator/BMICalculator'


function Dashboard(){

    const [token, setToken] = useState(localStorage.getItem('token'))
    const [ele, setEle] = useState("")
    const navigate = useNavigate()


    useEffect(()=>{

        setToken(localStorage.getItem('token'))

        if(token){

            const response = fetch('http://localhost:1337/login',{
                method: 'GET',
                headers: {
                    "x-access-token": token
                }
            }).then((res)=>{
                return res.json()
                
            }).then((data) => {
                
                if (data.verified){
                    setEle(data.user)
                }
                else{
                    localStorage.removeItem('token')
                    navigate('/login')
                }

            })

        } else{
            navigate('/login')
        }

    }, [token])

    return(
        <>
        <Navbar link="/" linkName='Logout'/>
        <div className="greetings">Hi, <span className="name">{ele}</span> <br /> <p className='desc'>We have some widgets for you, to help in your fitness journey !!!</p></div>
        <br />
        <div className="widget--heading">Find some new exercises...</div>
        <Exercise />
        <br />
        <div className="widget--heading">Log your measurements, and see your progress...</div>

        <Tracker 
            token= {token}
        />
        <br />
        <div className="widget--heading">Lets calculate your BMI too...</div>
        <BMICalculator />

        <div className="widget--heading">Log and plan your exercises...</div>
        
        <Calendar 
            token = {token}
        />
        
        <Footer />
        </>
    )
}

export default Dashboard