import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { blogs } from "@/utils/mockData";
import { BlogConfigType } from "@/types/config";

const mock = new MockAdapter(axios);

function parseQueryString(url: string | undefined) {
  const queryString = url?.replace(/.*\?/, "");

  if (queryString === url || !queryString) {
    return null;
  }

  const urlParams = new URLSearchParams(queryString);
  const result: any = {};

  urlParams.forEach((val, key) => {
    if (result.hasOwnProperty(key)) {
      result[key] = [result[key], val];
    } else {
      result[key] = val;
    }
  });

  return result;
}

mock.onGet(/api\/blog\/?.*/).reply(config => {
  const params = parseQueryString(config.url);

  if (params?.id !== undefined) {
    const blogId: number = Number(params.id);

    return new Promise(resolve => {
      setTimeout(() => {
        resolve([200, blogs.filter((blog: BlogConfigType) => blog.id === blogId)]);
      }, 1000);
    });
  } else {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([200, {
          limit: 6,
          page: 1,
          total: blogs.length,
          blogs: blogs.map(blog => {
            return {
              ...blog,
              date: blog.date.toDateString()
            };
          })
        }]);
      }, 1500);
    });
  }
});