
import { useState,useRef } from 'react'
//import { Link } from 'react-router-dom';
import { Switch } from '@headlessui/react'
import image from '../../assets/food-image2.jpg'
import { useNavigate, useNavigation } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [agreed, setAgreed] = useState(false)

    const navigate = useNavigate();
    const email = useRef(null);
    const password = useRef(null);

    const handleSubmit = (e) => {
        loginUser()
        e.preventDefault();
       
    }

    function loginUser() {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigate('/')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            });
    }
    

    return (
        <div style={{ height: 1000, backgroundImage: `url('${image}')`, }} className="  items-center justify-center flex ">
            <div style={{ width: 600, }} className='bg-white px-10 py-10 rounded-lg'>
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Login</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Welcome to Mess Maven
                    </p>
                </div>
                <form onSubmit={handleSubmit} action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-10">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                Email
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="email"
                                    name="email"
                                    ref={email}
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="password" className="block text-sm font-semibold leading-6 text-gray-900">
                                Password
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="password"
                                    name="password"
                                    ref={password}
                                    autoComplete="password"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
                            <div className="flex h-6 items-center">
                                <Switch
                                    checked={agreed}
                                    onChange={setAgreed}
                                    className={classNames(
                                        agreed ? 'bg-indigo-600' : 'bg-gray-200',
                                        'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                    )}
                                >
                                    <span className="sr-only">Agree to policies</span>
                                    <span
                                        aria-hidden="true"
                                        className={classNames(
                                            agreed ? 'translate-x-3.5' : 'translate-x-0',
                                            'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                                        )}
                                    />
                                </Switch>
                            </div>
                            <Switch.Label className="text-sm leading-6 text-gray-600">
                                By selecting this, you agree to our{' '}
                                <a href="#" className="font-semibold text-indigo-600">
                                    privacy&nbsp;policy
                                </a>
                                .
                            </Switch.Label>
                        </Switch.Group>
                    </div>
                    <div className="mt-7">
                        <button
                            type="submit"
                            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Login


                        </button>
                        <h1 className='mt-5 text-lg leading-6 text-gray-600'>
                            Dont have an account ?{' '}
                            <a href="/signup" className="font-semibold text-indigo-600">
                                SignUp
                            </a>
                        </h1>
                    </div>
                </form>
            </div>
        </div>
    )
}
