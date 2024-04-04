**_Steps taken to start this project_**

1. Create a project folder
2. Ensure I have VS code installed
3. Installed node in the root --> https://nodejs.org/en/download ( npm install node)
4. Add typescript --> npm install -g typescript ts-node
5. Add npm --> npm init -y to create package.json file
6. Add Axios --> npm install axios@0.27.2 or npm install axios
   What is Axios? axios is used to make a network request.
7. On the command line type npx tsc --init" to add a ts config file

API 8. Fake JSON API being used:
https://jsonplaceholder.typicode.com/

1. Go down to the resources section and click on the /todos link
2. We will make a network request to this URL with endpoint being todos -- > [https://jsonplaceholder.typicode.com/todos](https://jsonplaceholder.typicode.com/todos/1)

3. We added 1 at the end to get the first one. (FYI)
4. to get all the fake data you can change the url to https://jsonplaceholder.typicode.com/todos


*** What am I building? ***
I am building a small application that will make a network request to an outside api, fetch data,
then we are going to print the data inside our terminal'

This is just to see why typescript is used and catch bugs with it.

----------------------------------------------------------------------------------------------------------------------------------------------------------------

RUN FILE TO VIEW API:
*** node index.js ***

RUN TO COMPILE typescript file
*** tsc index.ts ***

PLEASE NOTE : Running compiling file then js file is not ideal. so you can run code below to run both commands at once

"ts-node  typescript file name"  in this cases it would be  

*** ts-node index.ts ***


---------------------------------------------------------------------------------------------------------------------------------------------------------------


**_ API results _**

![image](https://github.com/ndorvillearnold/react_with_typscript/assets/43937188/02b01cd5-ae7d-40d7-bb92-b9d54c10a750)

**_ Things I learned _**

![image](https://github.com/ndorvillearnold/react_with_typscript/assets/43937188/2ff344aa-a60f-49f7-954f-9239c3870e0f)

**_ Obstacles I faced_**
-I could not run any command and kept getting an error that a port was closed. I had to then research how to open the port to make it work.
