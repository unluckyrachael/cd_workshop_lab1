node {
   // The last stage cleans up the local images and workspace
   stage 'Pre-Build Housekeeping'

   // Clean up the Workspace
   deleteDir()

   // The first stage checks out the code from Github
   stage 'Get Code'

   // Get some code from a GitHub repository
   checkout scm

   // Test the application
   stage 'Run Unit Tests'

   // Test the Layout
   dir('tests') {sh "./layout-test.sh"}

   // Test the Index Page
   dir('tests') {sh "./index-test.sh"}

   // The next stage builds the Docker container for our site
   stage 'Build Container'

   // Run the docker build
   dir('src') {sh "docker build -t registry.roundtower.io:5000/training99/lab1:${env.BUILD_NUMBER} ."}

   // The next stage uploads the new container to the docker registry
   stage 'Upload Container'

   // Upload the container
   sh "docker push registry.roundtower.io:5000/training99/lab1:${env.BUILD_NUMBER}"
}
