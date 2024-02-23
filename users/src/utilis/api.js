import axios from "axios";
import dayjs from "dayjs";
import { toast } from "react-toastify";

// export const api = axios.create({
//   baseURL: "https://localhost:4000/api",
//   withCredentials: true,
// });
export const getAllProperties = async () => {
  try {
    const response = await axios.get("http://localhost:4000/api/residency/allresidency", {
      timeout: 10 * 1000,
    });

    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }

    console.log("Success:", response.data);
    toast.success("Data fetched successfully", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });

    // You may want to replace the following line with the actual logic for handling the data
    return response.data;

  } catch (error) {
    console.error("Error:", error);
    toast.error("Something went wrong", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });

    throw error;
  }
};

export const getProperty = async (id) => {
  try {
    const response = await axios.get(`http://localhost:4000/api/residency/${id}`, {
      timeout: 10 * 1000,
    });

    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }
    console.log("Success:", response.data);
    toast.success("Data fetched successfully", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
    return response.data;
  }catch (error) {
    console.error("Error:", error);
    toast.error("Something went wrong", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });

    throw error;
  }
};

export const createUser = async (email, token) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/api/user/register",
      { email },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("Success:", response);
    toast.success("User created successfully", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });

    
    return response.data;

  } catch (error) {
    console.error("Error:", error);
    toast.error("Something went wrong, Please try again", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });

    throw error;
  }
};
export const bookVisit = async (date, propertyId, email, token) => {
  try {
    await axios.post(
      `http://localhost:4000/api/user/bookVisit/${propertyId}`,
      {
        email,
        id: propertyId,
        date: dayjs(date).format("DD/MM/YYYY"),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    toast.error("Something went wrong, Please try again");
    throw error;
  }
};

export const removeBooking = async (id, email, token) => {
  try {
    await axios.post(
      `http://localhost:4000/api/user/removeBooking/${id}`,
      {
        email,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    toast.error("Something went wrong, Please try again");

    throw error;
  }
};

export const toFav = async (id, email, token) => {
  try {
    await axios.post(
      `http://localhost:4000/api/user/toFav/${id}`,
      {
        email,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (e) {
    throw e;
  }
};


export const getAllFav = async (email, token) => {
  if(!token) return 
  try{

    const res = await axios.post(
      "http://localhost:4000/api/user/allFav",
      {
        email,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
      
    return res.data["favResidenciesID"]

  }catch(e)
  {
    toast.error("Something went wrong while fetching favs");
    throw e
  }
} 


export const getAllBookings = async (email, token) => {
  
  if(!token) return 
  try {
    const res = await axios.post(
      "http://localhost:4000/api/user/allBookings",
      {
        email,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data["bookedVisits"];

    
  } catch (error) {
    toast.error("Something went wrong while fetching bookings");
    throw error
  }
}


export const createResidency = async (data, token) => {
  console.log(data)
  try{
    const res = await axios.post(
      "http://localhost:4000/api/residency/create",
      {
        data
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
  }catch(error)
  {
    throw error
  }
}