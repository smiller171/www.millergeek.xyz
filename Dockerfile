FROM node as build
WORKDIR /src/IS-GUI
COPY yarn.lock .
COPY package.json .
COPY bower.json .
RUN echo '{ "allow_root": true }' > /root/.bowerrc
RUN yarn install --pure-lockfile
COPY . .
RUN yarn build

FROM nginx:alpine
COPY --from=build /src/IS-GUI/dist /usr/share/nginx/html
