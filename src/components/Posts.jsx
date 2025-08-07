import "../App.css";
const Posts = () => {
  const posts = [
    {
      src: "/images/image-colton.jpg",
      name: "Colton Smith",
      feedback: `"We needed the same printed design as the one we had ordered a week prior.
    Not only did they find the original order, but we also received it in time.
    Excellent!"`,
      id: 1,
      margin: "md:mt-0 md:mb-16",
    },
    {
      src: "/images/image-irene.jpg",
      name: "Irene Roberts",
      feedback: `"Customer service is always excellent and very quick turn around. Completely
    delighted with the simplicity of the purchase and the speed of delivery."`,
      id: 2,
      margin: "md:mt-8 md:mb-8",
    },
    {
      src: "/images/image-anne.jpg",
      name: "Anne Wallace",
      feedback: `"Put an order with this company and can only praise them for the very high
    standard. Will definitely use them again and recommend them to everyone!"`,
      id: 3,
      margin: "md:mt-16 md:mb-0",
    },
  ];
  return (
    <ul className="posts flex max-md:flex-col max-md:gap-5 md:mt-20 justify-between">
      {posts.map((post) => {
        return (
          <li
            className={`xl:w-96 lg:w-80 md:w-60 text-white p-5 ${post.margin}`}
            key={post.id}
          >
            <div className="image-container flex gap-5 items-center mb-5">
              <img
                src={post.src}
                alt={post.name}
                className="w-11 rounded-full"
                key={post.id}
              />
              <div className="text">
                <span className="name block font-bold">{post.name}</span>
                <span className="job font-medium">Verified Buyer</span>
              </div>
            </div>
            <p className="feedback font-normal">{post.feedback}</p>
          </li>
        );
      })}
    </ul>
  );
};
export default Posts;
