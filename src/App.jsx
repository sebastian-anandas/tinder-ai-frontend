import './App.css'
import {User, MessageCircle, X, Heart} from 'lucide-react';

const ProfileSelector = () => {
    return (<div className='rounded-lg overflow-hidden bg-white shadow-lg'>
        <div className='relative'>
            <img src='src/assets/0b1273d4-ab2f-4edd-858b-6f1ff1071fb9.jpg'/>
            <div className='absolute bottom-0 left-0 right-0 text-white p-4 bg-gradient-to-t from-black'>
                <h2 className='text-3xl font-bold'>Foo Bar, 30</h2>
            </div>
        </div>
        <div className='p-4'>
            <p className='text-gray-600 mb-'>I&#39;m a Software Engineer with 10 years of experience in the
                industry. I
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
    </div>)

}

const MatchesList = () => {
    return <div className="rounded-lg shadow-lg p-4">
        <h2 className="text-2xl font-bold mb-4">Matches</h2>
        <u1>
            {[{
                id: 1,
                firstName: 'foo',
                lastname: 'bar',
                imageUrl: 'http://localhost:8080/images/women/0e985a4b-6944-4dec-b0f7-4a4453592dd0.jpg'
            }, {
                id: 2,
                firstName: 'foo',
                lastname: 'bar',
                imageUrl: 'http://localhost:8080/images/women/0eaa5932-be8c-48b0-b2b1-8dfe41002995.jpg'
            },].map((match) => {
                return <li key={match.id} className="mb-2 text list-none">
                    <button className="w-full hover:bg-gray-100 rounded flex item-center">
                        <img src={match.imageUrl} className="w-16 h-16 rounded-full mr-3 object-cover"/>
                        <span className='font-bold'>
                            <h3>{match.firstName} {match.lastname}</h3>
                        </span>
                    </button>
                </li>
            })

            }
        </u1>
    </div>
}

function App() {

    return (<>
        <div className='max-w-md mx-auto p-4'>

            <nav className="flex justify-between mb-4">
                <User/>
                <MessageCircle/>
            </nav>
            {/*<ProfileSelector/>*/}
            <MatchesList/>
        </div>
    </>)
}

export default App
