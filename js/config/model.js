import Realm from "realm";

const FaveSchema = {
  name: "Fave",
  primaryKey: "id",
  properties: {
    id: "string",
    faved_on: "date"
  }
};

const realm = new Realm({ schema: [FaveSchema] });

export const queryAllFaves = () => {
  return realm.objects("Fave");
};

export const addFave = id => {
  realm.write(() => {
    realm.create("Fave", { id: id + "", faved_on: new Date() });
  });
};

export const deleteFave = id => {
  realm.write(() => {
    const FaveToDelete = realm.objects("Fave").filtered("id == $0", id);
    realm.delete(FaveToDelete);
  });
};

export default realm;
