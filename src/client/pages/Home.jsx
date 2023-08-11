import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@wasp/queries';
import getPosts from '@wasp/queries/getPosts';

export function HomePage() {
  const { data: posts, isLoading, error } = useQuery(getPosts);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  return (
    <div className='p-4'>
      {posts.map((post) => (
        <div
          key={post.id}
          className='bg-gray-100 p-4 mb-4 rounded-lg'
        >
          <h3 className='text-xl font-bold mb-2'>{post.description}</h3>
          <p>By <Link to={`/user/${post.userId}`}>{post.user.username}</Link></p>
        </div>
      ))}
    </div>
  );
}