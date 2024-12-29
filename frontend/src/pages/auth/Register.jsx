import React, { useState } from "react";
import logo from '../../assets/logo.png'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faAt,
  faLock,
  faUser,
  faPhone
} from "@fortawesome/free-solid-svg-icons";

const SignUpForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      className="mt-6"
    >
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 px-2">
          <div className="w-full flex flex-col relative mb-6">
            <label className="opacity-80 font-medium mb-2" htmlFor="fname">
              Full Name:
            </label>
            <input
              type="text"
              className="bg-transparent border border-gray-300 focus:outline-none focus:border-blue-600  duration-300 min-h-[48px] leading-none px-3 pl-10"
              id="fname"
              placeholder="John Smith"
            />
            <FontAwesomeIcon
              icon={faUser}
              className="absolute top-12 text-sm left-4 opacity-80"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 px-2">
          <div className="w-full flex flex-col relative mb-6">
            <label className="opacity-80 font-medium mb-2" htmlFor="email">
              EMAIL:
            </label>
            <input
              type="email"
              className="bg-transparent border border-gray-300 focus:outline-none focus:border-blue-600 duration-300 min-h-[48px] leading-none px-3 pl-10"
              id="email"
              placeholder="johnsmith@gmail.com"
            />
            <FontAwesomeIcon
              icon={faAt}
              className="absolute top-12 text-sm left-4 opacity-80"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 px-2">
          <div className="w-full flex flex-col relative mb-6">
            <label className="opacity-80 font-medium mb-2" htmlFor="pass">
              PASSWORD:
            </label>
            <input
              type="password"
              className="bg-transparent border border-gray-300 focus:outline-none focus:border-blue-600 duration-300 min-h-[48px] leading-none px-3 pl-10"
              id="pass"
              placeholder="******"
            />
            <FontAwesomeIcon
              icon={faLock}
              className="absolute top-12 text-sm left-4 opacity-80"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 px-2">
          <div className="w-full flex flex-col relative mb-6">
            <label className="opacity-80 font-medium mb-2" htmlFor="pn">
              Phone Number:
            </label>
            <input
              type="numbers"
              className="bg-transparent border border-gray-300 focus:outline-none focus:border-blue-600 duration-300 min-h-[48px] leading-none px-3 pl-10"
              id="pn"
              placeholder="03xxxxxxxxx"
            />
            <FontAwesomeIcon
              icon={faPhone}
              className="absolute top-12 text-sm left-4 opacity-80"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 px-2">
          <div className="w-full flex flex-col mb-6">
            <label htmlFor="bg" className="font-medium mb-2">
              BLOOD GROUP:
            </label>
            <div className="w-full">
              <select
                type="text"
                className="w-full bg-transparent border border-gray-300 focus:outline-none focus:border-blue-600 duration-300 min-h-[48px] leading-none px-3 opacity-80"
              >
                <option
                  value="A+"
                  selected
                  className="bg-white"
                >
                  A+
                </option>
                <option value="A-" className="bg-white">
                 A-
                </option>
                <option value="B+" className="bg-white ">
                  B+
                </option>
                <option value="B-" className="bg-white ">
                  B-
                </option>
                <option value="O+" className="bg-white ">
                  O+
                </option>
                <option value="O-" className="bg-white ">
                  O-
                </option>
                <option value="AB+" className="bg-white ">
                  AB+
                </option>
                <option value="AB-" className="bg-white ">
                  AB-
                </option>
              </select>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 px-2">
          <div className="w-full flex flex-col relative mb-6">
            <label className="opacity-80 font-medium mb-2" htmlFor="age">
              AGE:
            </label>
            <input
              type="number"
              className="bg-transparent border border-gray-300 focus:outline-none focus:border-blue-600 duration-300 min-h-[48px] leading-none px-3 pl-4"
              id="age"
              placeholder="30"
            />
            
          </div>
        </div>
        <div className="w-full md:w-1/2 px-2">
          <div className="w-full flex flex-col mb-6">
            <label htmlFor="area" className="font-medium mb-2">
              AREA
            </label>
            <div className="w-full">
              <select
                type="text"
                className="w-full bg-transparent border border-gray-300 focus:outline-none focus:border-blue-600 duration-300 min-h-[48px] leading-none px-3 opacity-80"
              >
                <option
                  value=""
                  selected
                  className="bg-white"
                >
                  United State
                </option>
                <option value="" className="bg-white">
                  Bangladesh
                </option>
                <option value="" className="bg-white ">
                  Canada
                </option>
              </select>
            </div>
          </div>
        </div>




        <div className="w-full md:w-1/2 px-2">
          <div className="w-full flex flex-col mb-6">
            <label htmlFor="role" className="font-medium mb-2">
              REGISTER AS:
            </label>
            <div className="w-full">
              <select
                type="text"
                className="w-full bg-transparent border border-gray-300 focus:outline-none focus:border-blue-600 min-h-[48px] leading-none px-3 opacity-80"
              >
                <option
                  value="donor"
                  selected
                  className="bg-white"
                >
                  Donor
                </option>
                <option value="recipient" className="bg-white">
                  Recipient
                </option>
              </select>
            </div>
          </div>
        </div>
        {/* <div className="w-full md:w-1/2">
          <div className="form-group flex items-center h-full mb-3 mt-2">
            <div>
              <input className="" type="checkbox" value="" id="remember-me" />
              <label className="font-medium" htmlFor="remember-me">
                I agree all statements in
                <a href="#!" className="underline hover:text-blue-600">
                  Terms & Conditions
                </a>
              </label>
            </div>
          </div>
        </div> */}
        <div className="w-full">
          <div className="flex md:justify-end mt-4">
            <button
              type="submit"
              className="rounded-full bg-red-600 px-5 py-2.5 my-6 text-sm md:text-base font-medium text-white shadow hover:bg-red-500 transition-all duration-300 ease-in-out flex items-center justify-between gap-2"
            >
              Register <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

const Register = () => {
  return (
    <section className="flex items-center flex-col justify-center py-14 md:py-8 bg-red-50  text-zinc-900  overflow-hidden">
      <div className="flex items-start justify-start container">
      <Link to='/' className="flex items-start w-16 h-16">
            <img className="object-cover w-full h-full"
            src={logo}></img>
          
          </Link>
      </div>
      <div className="container px-4 mx-auto">
        <div className="flex justify-center">
          <div className="w-full md:w-2/3">
            <div className="bg-white rounded-xl shadow-xl p-4">
              <div className="p-6 lg:p-12">
                <h2 className="text-3xl font-bold mb-2 text-center">
                  REGISTRATION FORM
                </h2>

                <SignUpForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register
