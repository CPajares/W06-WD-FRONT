import { rest } from "msw";

export const handlers = [
  rest.get(process.env.REACT_APP_URL_API_HEROKU, async (req, res, ctx) => {
    const response = res(
      ctx.json([
        {
          features: {
            speed: 2,
            resistence: 3,
            date: "2021-12-04T23:00:00.000Z",
          },
          _id: "618555c6c10e75c0021f6825",
          name: "Emilio",
          url: "https://nostalgiapop.es/wp-content/uploads/2020/07/NP_Emiglio-e1608391255576.jpg",
        },
        {
          features: {
            speed: 2,
            resistence: 3,
            date: "2021-02-04T23:00:00.000Z",
          },
          _id: "618678658516adffbffcac4b",
          name: "Bender",
          url: "https://images-na.ssl-images-amazon.com/images/I/51pHwsb63LL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_PIStarRatingFIVE%2CBottomLeft%2C360%2C-6_SR600%2C315_ZA9%2C445%2C290%2C400%2C400%2CAmazonEmberBold%2C12%2C4%2C0%2C0%2C5_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg",
        },
      ])
    );
    return response;
  }),
];
