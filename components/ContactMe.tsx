import React from 'react';
import {
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:salomonj1121@gmail.com?subject=${formData.subject}&body=${formData.message}`;
  };
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl hidden md:block">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-3xl sm:text-4xl font-semibold text-center px-4 ml-4 sm:ml-0 mr-2 sm:mr-0">
          I&apos;ve got just what you need.{' '}
          <br className="sm:hidden" />
          <span className="decoration-[#f7ab0a]/50 underline">
            Let&apos;s Talk.
          </span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-2xl">314-736-9946</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-2xl">
              salomonj1121@gmail.com
            </p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-2xl">Chicago, IL</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register('name')}
              placeholder="Name"
              className="contactInput w-full sm:w-auto"
              type="text"
            />
            <input
              {...register('email')}
              placeholder="Email"
              className="contactInput w-full sm:w-auto"
              type="email"
            ></input>
          </div>

          <input
            {...register('subject')}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register('message')}
            placeholder="Message"
            className="contactInput h-16 sm:h-auto"
          />
          <button
            type="submit"
            className="bg-[#f7AB0A] py-3 px-6 rounded-md text-black font-bold text-base sm:py-5 sm:px-10 sm:text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
