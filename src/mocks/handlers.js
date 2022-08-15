import { rest } from "msw";

const baseURL = "https://first-drf-api.herokuapp.com";

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(ctx.json({
            pk: 5,
            username: "John",
            email: "",
            first_name: "",
            last_name: "",
            profile_id: 5,
            profile_image: "https://res.cloudinary.com/dexhos525/image/upload/v1/media/images/sushi_pimc2t"
            })
        );
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200));
    }),
];