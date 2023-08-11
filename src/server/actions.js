import HttpError from '@wasp/core/HttpError.js'

export const createPost = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  return context.entities.Post.create({
    data: {
      description: args.description,
      userId: context.user.id
    }
  });
}

export const deletePost = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  const post = await context.entities.Post.findUnique({
    where: { id: args.postId },
    select: { userId: true }
  });
  if (post.userId !== context.user.id) { throw new HttpError(403) };

  await context.entities.Post.delete({
    where: { id: args.postId }
  });
}