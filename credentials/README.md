# Credentials Folder

## The purpose of this folder is to store all credentials needed to log into your server and databases. This is important for many reasons. But the two most important reasons is
    1. Grading , servers and databases will be logged into to check code and functionality of application. Not changes will be unless directed and coordinated with the team.
    2. Help. If a class TA or class CTO needs to help a team with an issue, this folder will help facilitate this giving the TA or CTO all needed info AND instructions for logging into your team's server. 


# Below is a list of items required. Missing items will causes points to be deducted from multiple milestone submissions.

1. Server URL or IP
   <br> IP : 35.236.55.195  
2. SSH username
   <br> derrickliang987  
3. SSH password or key.
    <br> If a ssh key is used please upload the key to the credentials folder.
4. Database URL or IP and port used.
    <br><strong> NOTE THIS DOES NOT MEAN YOUR DATABASE NEEDS A PUBLIC FACING PORT.</strong> But knowing the IP and port number will help with SSH tunneling into the database. The default port is more than sufficient for this class.
    <br> IP: 35.224.34.185, Port #: 3036
5. Database username
   <br> team03
6. Database password
   <br> TEAMpass03
7. Database name (basically the name that contains all your tables)
   <br> Restaurant_App_Database
8. Instructions on how to use the above information.
   <br> To use the information above, you must have a google account. To connect to our vm instance, you can input the SSH username and private key. To access our SQL database, you can enter the database username and password.
   - To view our app: go to http://35.236.55.195:3001/
   - To SSH into our VM, use the above credentials
   - to start the server: \
   &emsp;- cd to ~/csc648-03-sp23-team03/application/frontEnd/my-app \
   &emsp;- run `npm run build` \
   &emsp;- cd to ~/csc648-03-sp23-team03/application/backEnd/ \
   &emsp;- run `npm start` or `forever start server.js` to ensure server persists after SSH connection is closed. \

# Most important things to Remember
## These values need to kept update to date throughout the semester. <br>
## <strong>Failure to do so will result it points be deducted from milestone submissions.</strong><br>
## You may store the most of the above in this README.md file. DO NOT Store the SSH key or any keys in this README.md file.
