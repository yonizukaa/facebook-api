import * as importPost from "../model/model-post";

export const createOne = async (request, response) => {
  const { user } = request;
  const { message, author, authorId } = request.body;

  const post = await importPost.createOne({
    message,
    createdAt: new Date(),
    updatedAt: new Date(),
    authorId: author.id,
  });

  response.status(201).json({ post });
};

export const findOneById = async (request, response) => {
  const id = Number(request.params.id);

  response.json({
    post: await importPost.findOneById(id),
  });
};

export const findAll = async (_request, response) => {
  response.json({
    post: await importPost.findAll(),
  });
};

export const updateOne = async (request, response) => {
  const { user } = request;
  const { id } = request.params;
  const { message, author } = request.body;

  const post = await importPost.updateOne({
    id: Number(id),
    message,

    authorId: author.id,
  });

  response.json({ post });
};

export const deleteOne = async (request, response) => {
  const id = Number(request.params.id);

  await importPost.deleteOne(id);

  response.status(204).end();
};
