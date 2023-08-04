import { useForm } from 'react-hook-form';

const Form = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const submitForm = (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className="w-full">
      <input 
        {...register('name', { required: true })}
        className="w-full p-3 border border-gray-300 rounded mt-3" 
        placeholder="Name" 
      />
      <p className="text-red-500 mt-1 text-xs italic h-4">{errors.name && "Please enter your name."}</p>

      <input 
        {...register('email', { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}
        className="w-full p-3 border border-gray-300 rounded mt-3" 
        placeholder="Email" 
      />
      <p className="text-red-500 mt-1 text-xs italic h-4">{errors.email && "Please enter a valid email address."}</p>

      <textarea 
        {...register('description', { required: true })}
        className="w-full p-3 border border-gray-300 rounded mt-3 h-32" 
        placeholder="Brief Description" 
      />
      <p className="text-red-500 mt-1 text-xs italic h-4">{errors.description && "Please provide a brief description."}</p>

      <button 
        type="submit" 
        className="w-full bg-blue-500 text-white rounded mt-5 py-2"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
