import * as ImportUser from "../model/model-user";

export const findOneById = async (request, response) => {
  const id = Number(request.params.id);

  response.json({
    user: await ImportUser.findOneById(id),
  });
};
export const findAll = async (request, response) => {
  response.json({
    user: await ImportUser.findAll(),
  });
};

export const deleteOne = async (request, response) => {
  const id = number(request.params.id);

  response.json({
    user: await ImportUser.deleteOne(),
  });
};

export const updateOne = async (request, response) => {
  const { user } = request;
  const { id } = params;
  const { email, password } = request.body;

  const updatedUser = await ImportUser.updateOne({
    id: Number(id),
    email,
    password,
    userId: user.id,
  });
};
