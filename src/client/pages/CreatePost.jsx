import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAction } from '@wasp/actions';
import createPost from '@wasp/actions/createPost';

export function CreatePost() {
  const createPostFn = useAction(createPost);
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    createPostFn({ description });
    setDescription('');
  };

  return (
    <div className='mx-auto max-w-lg p-4'>
      <h1 className='text-2xl font-bold mb-4'>Create a New Post</h1>
      <form
        onSubmit={handleSubmit}
        className='flex items-center gap-x-4'
      >
        <input
          type='text'
          placeholder='Enter post description'
          className='flex-grow px-2 py-1 border'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'
        >
          Create Post
        </button>
      </form>
      <Link to='/' className='text-blue-500 hover:text-blue-700 mt-2'>Go back</Link>
    </div>
  );
}