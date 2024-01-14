import React from 'react';
import { useForm } from 'react-hook-form';
import './Croprecommend.css';

function Croprecommend() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('country', data.country);
    formData.append('state', data.state);
    formData.append('district', data.district);
    formData.append('phLevel', parseFloat(data.phLevel));
    formData.append('potassiumLevel', parseFloat(data.potassiumLevel));
    formData.append('nitrogenLevel', parseFloat(data.nitrogenLevel));
    formData.append('hydrogenLevel', parseFloat(data.hydrogenLevel));

    // Log FormData to the console
    console.log(formData);

    // Send FormData to http://localhost:5000/recommend
    fetch('http://localhost:5000/recommend', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => console.log('Recommendation response:', data))
      .catch(error => console.error('Error sending recommendation:', error));
  };

  return (
    <div className="main">
      <div id="backRect">
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
          {/* Add fields for location */}
          <div className="grid md:grid-cols-3 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input {...register('country', { required: true })} type="text" name="country" id="country" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label htmlFor="country" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Country</label>
              {errors.country && <p>This field is required</p>}
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input {...register('state', { required: true })} type="text" name="state" id="state" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label htmlFor="state" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">State</label>
              {errors.state && <p>This field is required</p>}
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input {...register('district', { required: true })} type="text" name="district" id="district" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label htmlFor="district" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">District</label>
              {errors.district && <p>This field is required</p>}
            </div>
          </div>

          {/* Add fields for soil parameters */}
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input {...register('phLevel', { required: true, pattern: /^[0-9]+(\.[0-9]{1,2})?$/ })} type="text" name="phLevel" id="phLevel" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label htmlFor="phLevel" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">pH Level (0-14)</label>
              {errors.phLevel && <p>This field is required and must be a valid number</p>}
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input {...register('potassiumLevel', { required: true, pattern: /^[0-9]+(\.[0-9]{1,2})?$/ })} type="text" name="potassiumLevel" id="potassiumLevel" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label htmlFor="potassiumLevel" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Potassium Level</label>
              {errors.potassiumLevel && <p>This field is required and must be a valid number</p>}
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input {...register('nitrogenLevel', { required: true, pattern: /^[0-9]+(\.[0-9]{1,2})?$/ })} type="text" name="nitrogenLevel" id="nitrogenLevel" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label htmlFor="nitrogenLevel" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nitrogen Level</label>
              {errors.nitrogenLevel && <p>This field is required and must be a valid number</p>}
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input {...register('hydrogenLevel', { required: true, pattern: /^[0-9]+(\.[0-9]{1,2})?$/ })} type="text" name="hydrogenLevel" id="hydrogenLevel" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label htmlFor="hydrogenLevel" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Hydrogen Level</label>
              {errors.hydrogenLevel && <p>This field is required and must be a valid number</p>}
            </div>
          </div>

          {/* Existing fields */}
          {/* ... */}

          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Croprecommend;
