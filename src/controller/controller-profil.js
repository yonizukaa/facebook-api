import * as importProfil from "../model/model-profil";

export const createOne = async (request, response) => {
  const { user } = request;
  const { firstname, lastname, userId } = request.body;

  const profil = await importProfil.createOne({
    firstname,
    lastname,
    userId: user.id,
  });

  response.status(201).json({ profil });
};

export const findOneById = async (request, response) => {
  const id = Number(request.params.id);

  response.json({
    profil: await importProfil.findOneById(id),
  });
};

export const findAll = async (_request, response) => {
  response.json({
    profil: await importProfil.findAll(),
  });
};

export const updateOne = async (request, response) => {
  const { user } = request;
  const { id } = request.params;
  const { message, updateAt, userId } = request.body;

  const profil = await importProfil.updateOne({
    id: Number(id),
    message,
    updateAt: new Date(),

    userId: user.id,
  });

  response.json({ profil });
};

export const deleteOne = async (request, response) => {
  const id = Number(request.params.id);

  await importProfil.deleteOne(id);

  response.status(204).end();
};
