import React from "react";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  // console.log("Comennnnnn");
  return (
    <div className="flex shadow-sm bg-gray-50 rounded-lg mt-2 w-full">
      <img
        className="w-6 h-6 m-1"
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
  // console.log(comments + "comments");
  return comments.map((comment, index) => (
    <div className="mt-3 w-full">
      <Comment key={index} data={comment} />
      <div className="pl-5 ">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};
const CommentsContainer = () => {
  const commentsData = [
    {
      name: "Akshay saini",
      text: "Lorem ipsum dolor sit amet sum dolor sit aconsectetur.",
      replies: [
        {
          name: "Akshay saini",
          text: "Lorsum dolor sit aem ipsum dolor sit amet consectetur.",
          replies: [{
            name:"ram",
            text:"sita maa",
            replies:[]
          }],
        },
        {
          name: "Akshay saini",
          text: "Lorem ipssum dolor sit aum dolor sit amet consectetur.",
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
      name: "Akshay saini",
      text: "Lorem ipsum dolor sum dolor sit asit amet consectetur.",
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
          text: "Lorem ipLorem ipsum dolor sit amet consectetur.sum dolor sit amet consectetur.",
          replies: [],
        },
      ],
    },,
    {
      name: "Akshay saini",
      text: "Lorem ipsum dolor sit amet consectetur.",
      replies: [
        {
          name: "Akshay saini",
          text: "Lorem ipsuLorem ipsum dolor sit amet consectetur.m dolor sit amet consectetur.",
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
          text: "Lorem ipsum dolorLorem ipsum dolor sit amet consectetur. sit amet consectetur.",
          replies: [],
        },
      ],
    },
    {
      name: "Akshay saini",
      text: "Lorem ipsum dolor sit amet consectetur.",
      replies: [
        {
          name: "Akshay saini",
          text: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur. consectetur.",
          replies: [{
            name:"ram",
            text:"sita maa",
            replies:[]
          }],
        },
        {
          name: "Akshay saini",
          text: "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur..",
          replies: [],
        },
        {
          name: "Akshay saini",
          text: "Lorem ipsum dolLorem ipsum dolor sit amet consectetur.or sit amet consectetur.",
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
    <div className="p-2 mt-5 w-full">
      <h1 className="text-2xl font-bold">Comments :</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
