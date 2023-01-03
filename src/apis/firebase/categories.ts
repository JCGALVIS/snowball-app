import {
  addDoc,
  collection,
  DocumentData,
  getDocs,
  query,
  QuerySnapshot,
  where,
} from "firebase/firestore/lite";
import { dataBase } from "../../apis/firebase/firebase-config";
import { Categories } from "../../interfaces/categories";

const categories = collection(dataBase, "categories");

export const create = async (category: Categories) => {
  const data = await addDoc(categories, { ...category });

  return data.id;
};

export const getCategoriesByCategory = async (category: Categories) => {
  const result = await getDocs(
    query(categories, where("category", "==", category.category))
  );

  return getArrayFromCollection(result);
};

const getArrayFromCollection = (collection: QuerySnapshot<DocumentData>) => {
  return collection.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
};
