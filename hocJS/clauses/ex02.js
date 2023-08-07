var action = "add";
// switch (action) {
//   case "create":
//   case "insert":
//   case "add":
//     console.log("Them");
//     break;
//   case "edit":
//   case "Update":
//     console.log("Sua");
//     break;
//   case "delete":
//   case "remove":
//     console.log("Xoa");
//     break;
//   default:
//     console.log("Danh sach");
//     break;
// }

if (action === "create" || action === "insert" || action === "add") {
  console.log("Them");
} else if (action === "edit" || action === "update") {
  console.log("Sua");
} else if (action === "delete" || action === "remove") {
  console.log("Xoa");
} else {
  console.log("Danh sach");
}
