// export function getImageUrl(person, size = "s") {
//   const res = "https://i.imgur.com/" + person.imageId + size + ".jpg";

//   return res;
// }

export function getImageUrl(imageId, size = "s") {
  return "https://i.imgur.com/" + imageId + size + ".jpg";
}
