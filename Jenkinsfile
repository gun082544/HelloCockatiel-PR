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
    stage('Clone Hellocockatiel-PR code') {
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
          sh'whoami'
          sh'''
            #!/bin/bash
            source ~/.bash_profile
            yarn
          '''
          sh'''
            #!/bin/bash
            source ~/.bash_profile
            yarn build
          '''
      } // End steps
    } // End stage
    stage('Delete old Docker Image') {
      steps {
        sh' sudo docker image rm -f hellocockatiel '
      } // End steps
    } // End stage
    
    // ***** Stage Build Docker Image *****
    stage('Build Docker Image') {
      steps {
        sh' sudo docker build -t hellocockatiel . '
      } // End steps
    } // End stage
     
    stage('Delete old container') {
      steps {
        sh' sudo docker rm -f hellocockatiel '
      } // End steps
    } // End stage
    
    
    stage('Deploy HelloworldCockatiel WebPR') {
      steps {
              sh "sudo docker run -d -p 80:80 --name helloworldcockatiel hellocockatiel"
      } // End steps
    } // End stage


  } // End stages
} // End pipeline
