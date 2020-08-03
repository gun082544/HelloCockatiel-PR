// Define variables
def scmVars

// Start Pipeline
pipeline {

  // Configure Jenkins Slave
  agent any
    environment {
    ENV_NAME = "${BRANCH_NAME == "master" ? "develop" : "${BRANCH_NAME}"}"
  }

  // Start Pipeline
  stages {

    // ***** Stage Clone *****
    stage('Clone ratings source code') {
      // Steps to run build
      steps {
          // Use script to run
          script {
            // Git clone repo and checkout branch as we put in parameter
            scmVars = git branch: "${BRANCH_NAME}",
                          url: 'https://github.com/gun082544/HelloCockatiel-PR.git'
          } // End script
      } // End steps
    } // End stage
    // ***** Stage Build files *****
    stage('Install dependencies and build files') {
      steps {
          sh' cd HelloCockatiel-PR'
          sh' yarn '
          sh' yarn build'
      } // End steps
    } // End stage
    // ***** Stage Build Docker Image *****
    stage('Build Docker Image') {
      steps {
        sh' cd Hellocockatiel-PR '
        sh' sudo docker build -t hellocockatiel . '
      } // End steps
    } // End stage
    
    stage('Deploy HelloworldCockatiel WebPR') {
      steps {
              sh "sudo docker run -d -p 80:80 --name helloworldcockatiel hellocockatiel"
      } // End steps
    } // End stage


  } // End stages
} // End pipeline
