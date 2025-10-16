pipeline {
    agent any

    environment {
        // Optional: set NODE_ENV if needed
        NODE_ENV = 'production'
    }

    stages {
        stage('Checkout') {
            steps {
                // Pull code from GitHub
                git branch: 'main', url: 'https://github.com/KAVIYARASUCCE027/BLOG-APP-DEVOPS.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install npm packages
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                // Build React app
                sh 'npm run build'
            }
        }

        stage('Archive Build') {
            steps {
                // Save build artifacts in Jenkins
                archiveArtifacts artifacts: 'build/**', fingerprint: true
            }
        }
    }

    post {
        success {
            echo 'Build completed successfully!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}
