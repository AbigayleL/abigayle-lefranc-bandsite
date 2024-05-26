const posts = [
  {
    name: "Isaac Tadesse",
    date: "10/20/2023",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
  {
    name: "Christina Cabrera",
    date: "10/28/2023",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Victor Pinto",
    date: "11/02/2023",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
];

// Submitting form

const commentForm = document.querySelector("#add-comment__div-form");
commentForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}/${currentDate.getDate()}/${currentDate.getFullYear()}`;

  const newPost = {
    name: event.target.name.value,
    date: formattedDate,
    comment: event.target.comment.value,
  };

  console.log(newPost);
  posts.push(newPost);

  commentForm.reset();
  renderComments();
});

function renderComments() {
  const commentsContainer = document.querySelector(".comments--section");
  commentsContainer.innerHTML = "";

  posts.reverse().forEach((post) => {
    const postDiv = document.createElement("div");
    postDiv.classList.add("comment-Container");

    const profilePicture = document.createElement("div");
    profilePicture.classList.add("profile-picture");

    const name = document.createElement("h3");
    name.innerText = post.name;

    const date = document.createElement("p");
    date.innerText = post.date;

    const comment = document.createElement("p");
    comment.innerText = post.comment;

    postDiv.appendChild(profilePicture);
    postDiv.appendChild(name);
    postDiv.appendChild(date);
    postDiv.appendChild(comment);

    commentsContainer.appendChild(postDiv);
  });
}

renderComments();
