FROM node:18

WORKDIR /app 
RUN npm install -g @angular/cli 
COPY ./package.json . 
RUN npm install 
COPY . . 
# RUN ng build 

CMD [ "npm", "run", "dev" ]

# FROM nginx as runtime 

# COPY --from=build /app/dist/MyAngularApp /usr/share/nginx/html