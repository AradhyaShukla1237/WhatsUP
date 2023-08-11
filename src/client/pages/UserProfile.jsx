import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@wasp/queries';
import { useAction } from '@wasp/actions';
import getUserPosts from '@wasp/queries/getUserPosts';
import deletePost from '@wasp/actions/deletePost';

export function UserProfile() {
  const { data: posts, isLoading, error } = useQuery(getUserPosts);
  const deletePostFn = useAction(deletePost);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  const handleDeletePost = (postId) => {
    deletePostFn({ postId });
  };

  return (
    <div className='p-4'>
      {posts.map((post) => (
        <div
          key={post.id}
          className='bg-gray-100 p-4 mb-4 rounded-lg'
        >
          <div>{post.description}</div>
          <button
            onClick={() => handleDeletePost(post.id)}
            className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
          >
            Delete
          </button>
        </div>
      ))}
      <Link
        to='/create-post'
        className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
      >
        Create Post
      </Link>
    </div>
  );
}