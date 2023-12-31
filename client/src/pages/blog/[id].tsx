import Head from "next/head";
import {NextRouter, useRouter} from "next/router";
import React, {useEffect} from "react";
import {AnyAction, Dispatch} from "redux";
import {useDispatch} from "react-redux";

import {selectNavItem} from "@/store/actions/landing.action";

export default function BlogDetail() {
  const router: NextRouter = useRouter();
  const { id: blogId } = router.query;
  console.log(blogId);
  const dispatch: Dispatch<AnyAction> = useDispatch();

  useEffect(() => {
    dispatch(selectNavItem(3));
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>Drivingo | Blog</title>
      </Head>

      <main className="flex flex-col justify-center items-center">
        <span className="w-full h-[72px] md:h-[88px] bg-primary dark:bg-opacity-0" />

        <div className="container">

        </div>
      </main>
    </>
  );
};
