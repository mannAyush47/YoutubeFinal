import React from "react";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  console.log("Comennnnnn");
  return (
    <div className="flex shadow-sm bg-gray-50 rounded-lg mt-2">
      <img
        className="w-8 h-10 m-1"
        src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
        alt="Menu hamburger"
      />
      <div>
        <p>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  console.log(comments + "comments");
  return comments.map((comment, index) => (
    <div className="m-3">
      <Comment key={index} data={comment} />
      <div className="pl-5 border border-l-black">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};
const CommentsContainer = () => {
  const commentsData = [
    {
      name: "Akshay saini",
      text: "Lorem ipsum dolor sit amet consectetur.",
      replies: [
        {
          name: "Akshay saini",
          text: "Lorem ipsum dolor sit amet consectetur.",
          replies: [{
            name:"ram",
            text:"sita maa",
            replies:[]
          }],
        },
        {
          name: "Akshay saini",
          text: "Lorem ipsum dolor sit amet consectetur.",
          replies: [],
        },
        {
          name: "Akshay saini",
          text: "Lorem ipsum dolor sit amet consectetur.",
          replies: [],
        },
      ],
    },
    {
      name: "Akshay Ram",
      text: "Lorem ipsum dolor sit amet consectetur.",
      replies: [
        {
          name: "Akshay saini",
          text: "Lorem ipsum dolor sit amet consectetur.",
          replies: [],
        },
      ],
    },
  ];
  return (
    <div className="p-2 m-5">
      <h1 className="text-2xl font-bold">Comments :</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
