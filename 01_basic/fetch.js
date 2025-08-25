// fetch()...fetch()...
//fetch
//fetch
//async function() { await 호출.}

async function getPost() {
  let response = await fetch("http://localhost:3000/post");
  let data = await response.json();
  console.log(data);
  data.forEach(async (post) => {
    console.log("post번호" + post.id + " 에 대한 comments List");
    let response = await fetch("http://localhost:3000/comments");
    let data = await response.json();
    data.forEach((comment) => {
      if (comment.postId == post.id) {
        console.log("    내용:" + comment.body);
      }
    });
  });
}
getPost();

// fetch("http://localhost:3000/post")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     data.forEach((post) => {
//       console.log("post번호 " + post.id + " 에 대한 comments list");
//       // post에 대한 comments 조회
//       fetch("http://localhost:3000/comments")
//         .then((response) => response.json())
//         .then((data) => {
//           data.forEach((comment) => {
//             if (comment.postId == post.id) {
//               console.log("   내용: " + comment.body);
//             }
//           });
//         })
//         .catch(console.log);
//     });
//   })
//   .catch(console.log);
