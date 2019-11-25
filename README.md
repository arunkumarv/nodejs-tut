# nodejs-tut

## Installation
- [Download nodejs binaries for your architecture](https://nodejs.org/en/download/)
- mkdir -p ~/Softwares && tar -xf node-v`xx.xx.x`-linux-x64.tar.xz -C ~/Softwares/
- cd ~/Softwares/node-v`xx.xx.x`-linux-x64/bin
- The following steps will setup path to node in bashrc.
- pwd >> ~/.bashrc /* `pwd` will show the current path which is `bin`. The complete path is written into `~/.bashrc` file.
- `vim ~/.bashrc` - you can see the path appended to the end of the file as `/home/username/Softwares/node-xxxx/bin`.
- Update the line by adding export path: `export PATH=$PATH:/home/username/Softwares/node-xxxx/bin`
- Save the file `ESC:wq`
- `source ~/.bashrc`
- If everything is done properly `node --version` will show the version number

## Run a code
- `node filename` will run the javascript code on nodejs runtime.
- For development you can use `nodemon` which will rerun the code on every update and save.
- For that install nodemon globally, `npm install -g nodemon` 

## Create a NodeJS project and installing packages
- mkdir myProj, cd myProj
- `npm init` - Keep on pressing enter. This command will create package.json
- `npm install bcrypt`
    - this will install `bcrypt` package in node_modules folder and create an entry in `package.json` dependencies section.
