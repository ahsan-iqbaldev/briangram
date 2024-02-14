import Loader from "@/components/shared/Loader";
import PostCard from "@/components/shared/PostCard";
import { useGetRecentPosts } from "@/lib/react-query/queriesAndMutations";
import { Models } from "appwrite";

const Home = () => {
  const { data: posts, isPending: isPostLoading,
  } = useGetRecentPosts();

  console.log(posts, "postsAhsan");

  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
        <div className="flex-between w-full max-w-5xl mt-2 mb-2">
        <h2 className="h3-bold md:h2-bold text-left w-full">Home Feed</h2>

        <div className="flex-center gap-3 bg-dark-3 rounded-xl px-4 py-2 cursor-pointer">
          <p className="small-medium md:base-medium text-light-2">All</p>
          <img
            src="/assets/icons/filter.svg"
            width={20}
            height={20}
            alt="filter"
          />
        </div>
      </div>
          {isPostLoading && !posts ? (
            <Loader />
          ) : (
            <ul className="flex flex-col flex-1 gap-9 w-full">
              {posts?.documents.map((post: Models.Document, index) => (
                <PostCard post={post} key={index+100}/>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
