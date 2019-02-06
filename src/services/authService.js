import Firebase from "../firebase";
import { toast } from "react-toastify";
import axios from "axios";
import config from "../config.json";
export async function signUp(data) {
  try {
    const res = await Firebase.auth.createUserWithEmailAndPassword(
      data.email,
      data.password
    );
    const { user } = res;
    if (user.uid) {
      data["uid"] = user.uid;
      data["rol_id"] = 2;
      return createUser(data, user.uid);
    }else {
        return {}
    }
  } catch (e) {
    toast.error(e.message);
  }
}
async function createUser(data ,id) {
  delete data["password"];
  return await axios.put(config.api_url + `users/${id}.json`, data);
}

export async function SignIn(data) {
  try {
    const res = await Firebase.auth.signInWithEmailAndPassword(
      data.email,
      data.password
    );
    const { user } = res;
    if (user.uid) {
      return getUser(user.uid);
    }
    console.log(res);
  } catch (e) {
    toast.error(e.message);
  }
}

export async function getUser(id) {
  const res = await axios.get(config.api_url + `users/${id}.json`);
  const { data } = res;
  return data;
}

export async function UpdateUser(id,user) {
  const res = await axios.put(config.api_url + `users/${id}.json`,user);
  const { data } = res;
  return data;
}