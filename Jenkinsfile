pipeline {
    agent any

    tools {
        nodejs 'node18'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/KAVIYARASUCCE027/BLOG-APP-DEVOPS.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                script {
                    docker.build('kavi/blog-frontend')
                }
            }
        }

        stage('Deploy Container') {
            steps {
                script {
                    // Stop old container (if running)
                    sh 'docker rm -f blog-frontend || true'
                    // Run new one
                    sh 'docker run -d -p 3000:80 --name blog-frontend kavi/blog-frontend'
                }
            }
        }
    }

    post {
        success {
            echo '✅ Build and deployment successful!'
        }
        failure {
            echo '❌ Build failed!'
        }
    }
}
