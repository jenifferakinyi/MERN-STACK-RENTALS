const asyncHandler = require("express-async-handler");
const {prisma} = require ("../config/prismaConfig");

//creating new residency
 const createResidency = asyncHandler(async (req, res) => {
    const {
      title,
      description,
      price,
      address,
      country,
      city,
      facilities,
      image,
      userEmail,
    } = req.body.data;
  
    console.log(req.body.data);
    try {
      const residency = await prisma.residency.create({
        data: {
          title,
          description,
          price,
          address,
          country,
          city,
          facilities,
          image,
          owner: { connect: { email: userEmail } },
        },
      });
  
      res.send({ message: "Residency created successfully", residency });
    } catch (err) {
      if (err.code === "P2002") {
        throw new Error("A residency with address already there");
      }
      throw new Error(err.message);
    }
  });
  
  // function to get all the documents/residencies
  const getAllResidencies = asyncHandler(async (req, res) => {
    const residencies = await prisma.residency.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    res.send(residencies);
  });
  
  // function to get a specific document/residency
  const getResidency = asyncHandler(async (req, res) => {
    const { id } = req.params;
  
    try {
      const residency = await prisma.residency.findUnique({
        where: { id },
      });
      res.send(residency);
    } catch (err) {
      throw new Error(err.message);
    }
  });

  module.exports = {
    createResidency,getAllResidencies,getResidency
  };
  