
"use client"
import React from 'react'
import './workoutpage.css'
const page = () => {
    const [workout,setWorkout]=React.useState<any>(null)
    const getworkout=async()=>{
        let data:any={
            type: 'Chest',
            imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
            durationInMin: 30,
            exercises: [
                {
                    exercise: 'Flat Bench Press',
                    videoUrl: 'https://i.pinimg.com/originals/f4/8e/5e/f48e5e546e3c414a84b074f77b2557d1.gif',
                    sets: 3,
                    reps: 10,
                    rest: 60,
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
                },
                {
                    exercise: 'Incline Bench Press',
                    videoUrl: 'https://i.pinimg.com/originals/5e/53/d4/5e53d49daddb624dbded8f7e2c210b99.gif',
                    sets: 3,
                    reps: 10,
                    rest: 60,
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'

                },
                {
                    exercise: 'Decline Bench Press',
                    videoUrl: 'https://i.pinimg.com/originals/bc/d2/05/bcd205cf9e64811981d715deebaa41da.gif',
                    sets: 3,
                    reps: 10,
                    rest: 60,
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'

                }
            ]
        }
        setWorkout(data)
    } 
    React.useEffect(() => {
        getworkout()
    }, [])
  return (
    <div className='workout'>
        <h1 className='main'>{workout?.type} Day</h1>
          <div className='w_exes'>
            {
                workout?.exercises.map((item: any, index: number)=>{
                    return(
                        <div className={
                            index % 2 === 0 ? 'w_exe' : 'w_exe w_exe--reverse'
                        }>
                         <h3>{index+1}</h3>
                         <div className='w_exe_image'>
                            <img src={item.videoUrl} alt=''/>
                            
                         </div>   
                         <div className='w_exe_content'>
                            <h2>{item.exercise}</h2>
                            <span>{item.sets} sets X {item.reps} reps</span>
                            <p>{item.description}</p>

                         </div>



                        </div>
                    )
                })
            }

          </div>
    </div>
  )
}

export default page