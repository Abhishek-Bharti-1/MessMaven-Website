import { useState, useRef } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import image from '../../assets/food-image2.jpg'
import { useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { app } from '../../firebase'
import { getFirestore, collection, doc, addDoc,setDoc } from "firebase/firestore";


const auth = getAuth(app)
const db = getFirestore(app);

function classNames(...classes) {

    return classes.filter(Boolean).join(' ')
}

function handleErrorCode(errorCode) {
    switch (errorCode) {
        case "auth/email-already-in-use":
            return "The email address is already in use.";
        case "auth/invalid-email":
            return "Please enter a valid email address.";
        case "auth/weak-password":
            return "Please enter a stronger password.";
        case "auth/wrong-password":
            return "Incorrect email or password.";
        case "fields are empty":
            return "Please fill the form correctly";
        default:
            return "An unknown error occurred.";
    }
}

function Signup() {

    const [inputValue, setInputValue] = useState("");
    const [error, setError] = useState(null);

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };
    const firstName = useRef(null);
    const lastName = useRef(null);
    const messName = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const phoneNumber = useRef(null);


    const signUpUser = async () => {

        if (firstName.current.value !== '' || lastName.current.value !== '' || messName.current.value !== '' || phoneNumber.current.value !== '') {
            // console.log(inputValue)
            try {
                await createUserWithEmailAndPassword(
                    auth,
                    email.current.value,
                    password.current.value
                );
                setError(null);
                await addUserData();
            } catch (e) {
                setError(e.code);
                alert(`${e.code}`);
            }
        }
        else {
            setError('fields are empty');
        }
    }

    const addUserData = async () => {
        const docRef = await setDoc(doc(db, "Admin",messName.current.value), {
            munimName: `${firstName.current.value} ${lastName.current.value}`,
            messName: messName.current.value,
            phone: phoneNumber.current.value
        }).then((va) => {
            navigate('/')
        });
    }

    const [agreed, setAgreed] = useState(false)

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        signUpUser();
        e.preventDefault();
    }
    return (
        <div style={{ height: 1000, backgroundImage: `url('${image}')`, }} className="  items-center justify-center flex ">
            <div style={{ width: 600, }} className='bg-white px-10 py-10 rounded-lg'>

                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Sign Up </h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Welcome to Mess Maven
                    </p>
                </div>
                <form onSubmit={handleSubmit} action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                Munim First name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="first-name"
                                    ref={firstName}
                                    //id="first-name"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                Munim Last name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="last-name"
                                    ref={lastName}
                                    //id="last-name"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                                Mess Name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="company"
                                    //id="company"
                                    ref={messName}
                                    autoComplete="organization"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                Email
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="email"
                                    name="email"
                                    value={inputValue}
                                    onChange={handleChange}
                                    //  id="email"
                                    ref={email}
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                Password
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="password"
                                    name="password"
                                    ref={password}
                                    // id="password"
                                    autoComplete="password"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                                Phone number
                            </label>

                            <input
                                type="tel"
                                name="phone-number"
                                // id="phone-number"
                                ref={phoneNumber}
                                autoComplete="tel"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
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
                    <div className="mt-10 text-red-800">
                        {error && <p className="error-message">Error: {handleErrorCode(error)}</p>}
                    </div>
                    <div className="mt-10">
                        <button
                            type="submit"
                            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign Up
                        </button>
                        <h1 className='mt-5 text-lg leading-6 text-gray-600'>
                            Already have an account ?{' '}
                            <a href="/" className="font-semibold text-indigo-600">
                                Login
                            </a>
                        </h1>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Signup