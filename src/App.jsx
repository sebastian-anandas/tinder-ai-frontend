import './App.css'
import {User, MessageCircle, X, Heart} from 'lucide-react';

const ProfileSelector = () => {
    return (
        <div className='rounded-lg overflow-hidden bg-white shadow-lg'>
            <div className='relative'>
                <img src='src/assets/0b1273d4-ab2f-4edd-858b-6f1ff1071fb9.jpg'/>
                <div className='absolute bottom-0 left-0 right-0 text-white p-4 bg-gradient-to-t from-black'>
                    <h2 className='text-3xl font-bold'>Foo Bar, 30</h2>
                </div>
            </div>
            <div className='p-4'>
                <p className='text-gray-600 mb-'>I'm a Software Engineer with 10 years of experience in the industry. I
                    am
                    looking for a new job.</p>
            </div>
            <div className='p-4 flex justify-center space-x-4'>
                <button className='bg-red-500 rounded-full p-4 text-white hover:bg-red-700'
                    onClick={() => console.log("left")}>
                    <X size='24'/>
                </button>
                <button className='bg-green-500 rounded-full p-4 text-white hover:bg-green-700'
                        onClick={() => console.log("right")}>
                    <Heart size='24'/>
                </button>
            </div>
        </div>
    )

}

function App() {

    return (<>
        <div className='max-w-md mx-auto p-4'>

            <nav className="flex justify-between mb-4">
                <User/>
                <MessageCircle/>
            </nav>
            <ProfileSelector/>
        </div>
    </>)
}

export default App
