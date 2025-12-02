import  prisma from "../../src/prisma/client.js"

export const createUserService = async (data)=>{
    return await prisma.user.create({data})
}

export const getUserService = async()=>{
  return await prisma.user.findMany()
}

export const updateUserService = async (id,data)=>{
  return await prisma.user.update({
        where:{id:Number(id)},
    data
  })
}

export const deleteUserService = async (id) => {
  return await prisma.user.delete({
    where: { id: Number(id) },
  })
}