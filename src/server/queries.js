import HttpError from '@wasp/core/HttpError.js'

export const getPosts = async (_, context) => {
  const posts = await context.entities.Post.findMany();
  return posts;
}

export const getUserPosts = async (args, context) => {
  if (!context.user) {
    throw new HttpError(401);
  }

  return context.entities.Post.findMany({
    where: { user: { id: context.user.id } },
    include: { user: true }
  });
}