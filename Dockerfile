FROM node:20.9.0 As build
 
WORKDIR /app
 
COPY package*.json ./
 
RUN npm ci
 
RUN npm install -g @angular/cli

COPY . .
 
RUN npm run build --configuration=production
 
FROM nginx:latest

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
 
COPY --from=build /app/dist/frontend/browser /usr/share/nginx/html

EXPOSE 80