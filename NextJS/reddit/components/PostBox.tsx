import { useSession } from "next-auth/react";
import React, { useState } from "react";
import Avatar from "./Avatar";
import { PhotographIcon, LinkIcon } from "@heroicons/react/outline";
import { useForm } from "react-hook-form";

type FormData = {
  postTitle: string;
  postBody: string;
  postImage: string;
  subreddit: string;
};

function PostBox() {
  const [imageBoxOpen, setImageBoxOpen] = useState(false);

  const { data: session } = useSession();
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  return (
    <form className="sticky top-16 z-50 bg-white rounded-md border border-gray-300 p-2 ">
      <div className="items-center flex space-x-3">
        <Avatar />
        <input
          {...register("postTitle", { required: true })}
          disabled={!session}
          className="bg-gray-50 p-2 pl-5 outline-none flex-1 rounded-md"
          type="text"
          placeholder={
            session
              ? "create a post by entering a title"
              : "Please sign in to Post"
          }
        />
        <PhotographIcon
          onClick={() => {
            setImageBoxOpen(!imageBoxOpen);
          }}
          className={`h-6 text-gray-300 cursor-pointer ${
            imageBoxOpen && "text-blue-300"
          }`}
        />
        <LinkIcon className="h-6 text-gray-300 cursor-pointer" />
      </div>
      {!!watch("postTitle") && (
        <div className="flex flex-col py-2">
          {/* Body */}
          <div className="flex items-center px-2">
            <p className="min-w-[90px]">Body:</p>
            <input
              type="text"
              className="m-2 flex-1 bg-blue-50 p-2 outline-none"
              {...register("postBody")}
              placeholder="text (optional)"
            />
          </div>
          <div className="flex items-center px-2">
            <p className="min-w-[90px]">Subreddit:</p>
            <input
              type="text"
              className="m-2 flex-1 bg-blue-50 p-2 outline-none"
              {...register("subreddit", { required: true })}
              placeholder="i.e ReactJS"
            />
          </div>
          {imageBoxOpen ? (
            <div className="flex items-center px-2">
              <p className="min-w-[90px]">ImageURL:</p>
              <input
                type="text"
                placeholder="optional..."
                className="m-2 flex-1 bg-blue-50 p-2 outline-none"
                {...register("postImage")}
              />
            </div>
          ) : (
            ""
          )}

          {/* Errors */}
          
          {Object.keys(errors).length > 0 && (
            <div className="space-y-2 p-2 text-red-500">
              {errors.postTitle?.type === "required" && (
                <p>A post title is required</p>
              )}
              {errors.subreddit?.type === "required" && (
                <p>A post title is required</p>
              )}
              {!!watch("postTitle") && (
                <button
                  type="submit"
                  className="w-full rounded-full bg-blue-200"
                >
                  Create Post
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </form>
  );
}

export default PostBox;
